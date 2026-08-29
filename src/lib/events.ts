/**
 * Events data, read at build time.
 *
 * Source of truth is the published Google Sheet so the client can edit it
 * without touching the repository. The committed CSV is the fallback: if the
 * sheet is unpublished, renamed, or Google is unreachable, the build uses the
 * CSV rather than failing. A site must not stop deploying because an external
 * document moved.
 */

import fs from 'node:fs';
import path from 'node:path';

const SHEET_ID = '1ZmpPLBpc_Zb7pca3pIF1EoigbqFPuRSUhyhWRl9wIKU';
const SHEET_TAB = 'events';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_TAB}`;
const CSV_FALLBACK = path.join(process.cwd(), 'src/data/events.csv');

export interface EventRow {
  date: string;
  time: string;
  title: string;
  venue: string;
  city: string;
  state: string;
  /** Street address. The sheet calls this `address`; `map_query` is accepted too. */
  address: string;
  /** Present only when the sheet gains the column; absent means "we attend". */
  role: string;
  summary: string;
}

/** Minimal RFC-4180 reader: handles quoted fields and embedded commas. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else quoted = false;
      } else field += c;
      continue;
    }
    if (c === '"') { quoted = true; continue; }
    if (c === ',') { row.push(field); field = ''; continue; }
    if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; continue; }
    if (c === '\r') continue;
    field += c;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function toRows(text: string): EventRow[] {
  const table = parseCsv(text).filter((r) => r.some((c) => c.trim() !== ''));
  if (!table.length) return [];

  const head = table[0].map((h) => h.trim().toLowerCase());
  /** Read by column name, accepting any of the given aliases. */
  const at = (r: string[], ...names: string[]) => {
    for (const n of names) {
      const i = head.indexOf(n);
      if (i !== -1) return (r[i] ?? '').trim();
    }
    return '';
  };

  return table
    .slice(1)
    .map((r) => ({
      date: at(r, 'date'),
      time: at(r, 'time'),
      title: at(r, 'title'),
      venue: at(r, 'venue'),
      city: at(r, 'city'),
      state: at(r, 'state'),
      address: at(r, 'address', 'map_query'),
      role: at(r, 'role') || 'attending',
      summary: at(r, 'summary')
    }))
    .filter((e) => e.date && e.title);
}

async function load(): Promise<EventRow[]> {
  try {
    const res = await fetch(SHEET_URL, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`sheet responded ${res.status}`);
    const rows = toRows(await res.text());
    if (!rows.length) throw new Error('sheet returned no usable rows');
    console.log(`[events] ${rows.length} rows from the published sheet`);
    return rows;
  } catch (err) {
    const why = err instanceof Error ? err.message : String(err);
    console.warn(`[events] sheet unavailable (${why}); using src/data/events.csv`);
    try {
      return toRows(fs.readFileSync(CSV_FALLBACK, 'utf8'));
    } catch {
      console.warn('[events] CSV fallback missing too; rendering an empty page');
      return [];
    }
  }
}

/** Today at UTC midnight, so an event dated today still counts as upcoming. */
function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export interface EventsData {
  upcoming: EventRow[];
  past: EventRow[];
}

export async function getEvents(): Promise<EventsData> {
  const all = await load();
  const today = todayIso();
  const byDate = (a: EventRow, b: EventRow) => a.date.localeCompare(b.date);

  return {
    upcoming: all.filter((e) => e.date >= today).sort(byDate),
    past: all.filter((e) => e.date < today).sort(byDate).reverse()
  };
}

/* ---------- presentation helpers ---------- */

export function formatDate(iso: string): { day: string; month: string; full: string } {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return { day: '', month: '', full: iso };
  return {
    day: String(d.getUTCDate()).padStart(2, '0'),
    month: d.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }),
    full: d.toLocaleDateString('en-US', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
    })
  };
}

export function locationLabel(e: EventRow): string {
  return [e.city, e.state].filter(Boolean).join(', ');
}

/**
 * A map link only when we can actually point at a place.
 *
 * Falling back to the venue name alone produces confidently wrong links: a
 * search for "VACA" lands nowhere near the event. A venue is only usable as a
 * query when it is paired with a city, so an unaddressed row simply gets no
 * link. No link is better than one that sends someone to the wrong place.
 */
export function mapUrl(e: EventRow): string | null {
  const q = e.address || (e.venue && e.city
    ? [e.venue, e.city, e.state].filter(Boolean).join(', ')
    : '');
  return q ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}` : null;
}

/**
 * Label the period a set of events covers, e.g. "August 2026" or
 * "August – September 2026". Derived from the dates rather than naming a
 * single venue, which would speak for only one of them.
 */
export function periodLabel(events: EventRow[]): string {
  const dates = events
    .map((e) => new Date(`${e.date}T00:00:00Z`))
    .filter((d) => !Number.isNaN(d.getTime()))
    .sort((a, b) => a.getTime() - b.getTime());
  if (!dates.length) return '';

  const fmt = (d: Date, withYear: boolean) =>
    d.toLocaleDateString('en-US', {
      month: 'long',
      ...(withYear ? { year: 'numeric' } : {}),
      timeZone: 'UTC'
    });

  const first = dates[0];
  const last = dates[dates.length - 1];
  const sameMonth = first.getUTCFullYear() === last.getUTCFullYear()
    && first.getUTCMonth() === last.getUTCMonth();
  if (sameMonth) return fmt(first, true);

  const sameYear = first.getUTCFullYear() === last.getUTCFullYear();
  return `${fmt(first, !sameYear)} – ${fmt(last, true)}`;
}
