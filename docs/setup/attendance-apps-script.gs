/**
 * Hands Across Humanity — attendance endpoint.
 *
 * Receives sign-ups from the events page and appends them to the
 * `attendance` tab. Deployed as a web app: Execute as me, Access anyone.
 *
 * The URL this produces is a public write endpoint. It ships inside the
 * site's JavaScript and anyone can post to it, so everything below is
 * validated here rather than trusted from the browser.
 */

const SHEET_NAME = 'attendance';
const EVENTS_SHEET = 'events';
const MAX_BODY = 2048;
const MIN_FILL_MS = 3000;

const HEADERS = [
  'timestamp', 'event_date', 'event_title',
  'name', 'organization', 'org_type',
  'email', 'phone', 'people', 'help', 'notes'
];

function doPost(e) {
  try {
    const raw = (e && e.postData && e.postData.contents) || '';
    if (raw.length > MAX_BODY) return reply(false, 'Payload too large.');

    const data = JSON.parse(raw);

    // 1. Honeypot. Humans never see this field, so anything in it is a bot.
    if (data.company) return reply(true, 'Thanks.');   // silent accept

    // 2. Time trap. A form filled in under three seconds was not filled by a person.
    const elapsed = Number(data.elapsed || 0);
    if (elapsed > 0 && elapsed < MIN_FILL_MS) return reply(true, 'Thanks.');

    // 3. Required fields.
    const name  = str(data.name, 120);
    const email = str(data.email, 160);
    const title = str(data.event_title, 160);
    const date  = str(data.event_date, 20);
    if (!name)  return reply(false, 'Please add your name.');
    if (!isEmail(email)) return reply(false, 'That email address does not look right.');
    if (!title || !date) return reply(false, 'Missing event details.');

    // 4. The event must actually exist. Stops arbitrary rows being injected.
    if (!eventExists(date, title)) return reply(false, 'Unknown event.');

    const sheet = ensureSheet();
    sheet.appendRow([
      new Date(),                    // set here; never trust a client clock
      date,
      title,
      name,
      str(data.organization, 160),
      orgType(data.org_type),
      email,
      str(data.phone, 40),
      clampInt(data.people, 1, 50),
      str(Array.isArray(data.help) ? data.help.join(', ') : data.help, 200),
      str(data.notes, 1000)
    ]);

    return reply(true, 'Thanks — we have your details.');
  } catch (err) {
    return reply(false, 'Something went wrong. Please email us instead.');
  }
}

function doGet() {
  return reply(false, 'This endpoint only accepts submissions.');
}

/* ---------- helpers ---------- */

function ensureSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function eventExists(date, title) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(EVENTS_SHEET);
  if (!sheet) return true;               // no events tab: do not block sign-ups
  const rows = sheet.getDataRange().getValues();
  const head = rows.shift().map(String);
  const di = head.indexOf('date');
  const ti = head.indexOf('title');
  if (di < 0 || ti < 0) return true;
  return rows.some(function (r) {
    return String(r[ti]).trim() === title && asIso(r[di]) === date;
  });
}

function asIso(v) {
  if (v instanceof Date) return Utilities.formatDate(v, 'UTC', 'yyyy-MM-dd');
  return String(v).trim();
}

function str(v, max) {
  return String(v == null ? '' : v).trim().slice(0, max);
}

function isEmail(v) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
}

/** Only accept a value the form actually offers; anything else becomes 'other'. */
function orgType(v) {
  const allowed = ['individual', 'business', 'faith organisation', 'nonprofit', 'school', 'other'];
  const t = String(v == null ? '' : v).trim().toLowerCase();
  return allowed.indexOf(t) >= 0 ? t : (t ? 'other' : '');
}

function clampInt(v, lo, hi) {
  const n = parseInt(v, 10);
  if (isNaN(n)) return lo;
  return Math.min(Math.max(n, lo), hi);
}

function reply(ok, message) {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: ok, message: message }))
    .setMimeType(ContentService.MimeType.JSON);
}
