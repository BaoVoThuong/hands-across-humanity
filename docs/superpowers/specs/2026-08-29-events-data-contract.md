# Events data contract — Google Sheet and registration form

**Date:** 2026-08-29
**Feeds:** `/events/` upcoming table
**Local fallback:** `src/data/events.csv`

## 1. Google Sheet structure

Create one sheet, first row exactly these headers, in this order. The build
reads the sheet by column name, so the order can change later but the spelling
cannot.

| Column | Required | Example | Notes |
|---|---|---|---|
| `date` | yes | `2026-09-13` | ISO `YYYY-MM-DD`. Sorts and splits past/upcoming reliably; `09/13` alone is ambiguous between US and EU readers |
| `time` | no | `10:00 AM – 2:00 PM` | Free text, shown as given. Omit and the row simply shows no time |
| `title` | yes | `Back-to-School event` | What appears in the Event column |
| `venue` | no | `Vien Thong Temple` | Shown under the title |
| `city` | no | `Houston` | Shown in the Location column |
| `state` | no | `TX` | Shown beside city |
| `map_query` | no | `17355 Groeschke Rd, Houston, TX 77084` | Full street address. Drives the map link. Empty means no map link on that row |
| `register_url` | no | `https://forms.gle/…` | Empty means no button on that row |
| `role` | no | `attending` or `hosting` | See section 3 |
| `summary` | no | One sentence | Optional; not shown in the table |

**Publishing:** File → Share → Publish to web → select the sheet → CSV. Copy
that URL into the build config. Publishing to web is separate from sharing
permissions; the sheet itself can stay private.

**Fallback behaviour:** the build fetches the published CSV first. If the fetch
fails for any reason — sheet unpublished, network error, Google outage — it
falls back to `src/data/events.csv` in the repository. The site never fails to
build because of an external file.

## 2. Registration form fields

If registration is handled by a Google Form, these are the fields to create.
The form writes to its own responses sheet automatically; no code is involved.

**Ask for:**

| Field | Type | Required | Why |
|---|---|---|---|
| Full name | Short answer | yes | To know who is coming |
| Email | Short answer | yes | The only reliable way to send a change of plan |
| Phone | Short answer | no | Useful on the day; not everyone will give one |
| Which event | Dropdown | yes | Only if one form serves several events |
| Number of people | Number | no | For planning supplies |
| How you would like to help | Checkboxes | no | Contribute goods · Volunteer on the day · Just attending |
| Anything we should know | Paragraph | no | Access needs, arrival time, questions |

**Do not ask for:** date of birth, address, income, immigration status, or any
health information. None of it is needed to attend a community event, and
collecting it creates a duty of care over sensitive data that a static site
and a spreadsheet are not equipped to meet.

**Say on the form** what the data is used for and who sees it. One sentence is
enough: used only to plan this event, not shared with anyone else.

## 5. Registration — custom form posting to Apps Script

Chosen over an embedded Google Form so the form matches the site's styling
and stays on the page. This section records what that costs, because the
cost is real and lands on whoever maintains the sheet.

### What people are signing up for

These events are run by other organisations; Hands Across Humanity attends.
So the form is **not** registration for the event itself — that belongs to the
host. It is people telling Hands Across Humanity they would like to come along
or help on the day.

The button copy must say so. **"Join us at this event"**, not "Register".
Writing "Register" implies we control admission to someone else's event.

### Fields written to the `attendance` tab

| Column | Source | Required |
|---|---|---|
| `timestamp` | server-side, `new Date()` in Apps Script | auto |
| `event_date` | hidden field, the row's ISO date | yes |
| `event_title` | hidden field | yes |
| `name` | text input | yes |
| `email` | email input | yes |
| `phone` | tel input | no |
| `people` | number input, default 1 | no |
| `help` | checkboxes: contribute goods / volunteer / just attending | no |
| `notes` | textarea | no |

`timestamp` is set inside Apps Script, never sent by the browser. A client
supplied timestamp can be forged and is not evidence of anything.

### The endpoint is public and writable

This is the part that must not be discovered later. An Apps Script web app
deployed as "anyone, even anonymous" is an **open write endpoint**. Its URL
ships inside the site's JavaScript, so anyone who views source can post to it.

Mitigations that do not require a third party:

1. **Honeypot field** — a text input hidden from sight and from assistive
   technology, `tabindex="-1"`, `autocomplete="off"`. Humans never fill it.
   Any submission with it filled is dropped silently.
2. **Time trap** — record when the form was rendered; reject submissions that
   arrive under three seconds. Bots submit instantly.
3. **Server-side validation in Apps Script** — reject rows where `event_title`
   does not match a title in the `events` tab, where `email` fails a basic
   shape check, or where any field exceeds a sane length.
4. **Cap the payload** — refuse anything over ~2KB.

These stop naive bots. They do not stop a determined person. If the sheet does
start collecting junk, the honest next step is a captcha, which means a third
party script and, in the EU, a cookie notice — the thing this site has so far
avoided. Say so now rather than discovering it under pressure.

### CORS

Apps Script web apps cannot set arbitrary response headers. Post as a **simple
request** — `Content-Type: text/plain` with a JSON string body — so the browser
skips the preflight that Apps Script cannot answer. Verify a real round trip
against a deployed script before building the success and failure states; do
not assume the response is readable.

### Failure states the form must handle

A public endpoint on someone else's infrastructure will fail sometimes.

- **Submitting** — button disabled, label changes, so nobody double-posts.
- **Succeeded** — replace the form with a short confirmation naming the event.
- **Failed** — keep every value the person typed, explain that it did not send,
  and offer the contact email as a fallback. Never discard a filled form.
- **JavaScript off** — the form does not render at all. Show the contact email
  instead. A form that cannot submit is worse than no form.

### Privacy

The form collects a name, an email and possibly a phone number, and writes
them to a spreadsheet. One sentence beside the submit button: what it is used
for, and that it is not shared. No date of birth, no address, no health
information — none of it is needed to attend, and collecting it creates a duty
of care a spreadsheet cannot meet.

### What the client deploys

1. Apps Script bound to the sheet, `doPost(e)` appending to `attendance`.
2. Deploy → New deployment → Web app → Execute as **me**, access
   **anyone**. Copy the `/exec` URL.
3. Put that URL in the site config. It is not a secret, but it is a write
   endpoint; treat it as replaceable and rotate it if abused.
4. Create the `attendance` header row exactly as the table above, in order.

## 3. Hosting versus attending

The supplied list is headed "Attendance", and the events are run by other
organisations — medical associations and temples — with Hands Across Humanity
taking part. That distinction changes the page:

- `role = attending` → the row shows **Get directions**. Registration belongs
  to the host organisation, not to us, and offering our own sign-up would be
  misleading.
- `role = hosting` → the row shows **Register**, pointing at `register_url`.

A single table can hold both. If `role` is left empty the build treats the row
as `attending`, which is the safer default: it never invites someone to
register for an event we do not run.

## 4. Verified venue addresses

Researched and confirmed against public listings on 2026-08-29:

| Venue | Address | Source |
|---|---|---|
| Tu Vien Phuoc Duc | 10839 Lilleux Rd, Houston, TX 77067 | Yelp, TripAdvisor listings |
| Vien Thong Temple | 17355 Groeschke Rd, Houston, TX 77084 | Yelp listing; vienthongtu.org |
| Vietnamese Buddhist Center | 10002 Synott Rd, Sugar Land, TX | Yelp listing |

**Unresolved, left blank rather than guessed:**

- **VAMA** is the Vietnamese American Medical Association of Greater Houston
  (vamahouston.org), a 501(c)(3) founded 2007. It is an *organisation*, not a
  venue; its health fairs are held at varying locations, so the venue for this
  particular fair is not derivable.
- **VACA** did not resolve to any Houston Vietnamese-American organisation.
  Searches surfaced VAMA-GH, VCSA and VNCH, none of which match the acronym.
  The full name is needed.

Both rows are shipped without a map link rather than with a wrong one.
