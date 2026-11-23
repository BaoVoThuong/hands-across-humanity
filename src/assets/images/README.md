# Image register

`eps/` holds the documentary photography the client supplied: 48 unique photographs of real community distributions, partner events, volunteers and children. `eps/index.ts` exports every one under a name that says what the frame shows, grouped the same way as below.

## Rules this set follows

- **No duplicates.** Every file was checked byte-for-byte (md5) and visually (difference hash). Several client batches resend the same photo under a new filename or as a smaller WebP; those copies are not kept.
- **Resolution decides placement.** The JPGs are 2048px masters (except `eps-community-partners-group.jpg`, 600px) and can fill heroes, carousels and cards. The WebPs are ~480px social-media exports and appear only as small tiles in the Events field record, as does the 600px partners photo.
- **Each photo appears exactly once on the whole site.** When a slot needs a photo, pick one that is not shown anywhere else, whose subject matches what the slot says, and whose orientation matches the frame (portrait photos in portrait frames). If there is no such photo, drop the slot rather than repeat one.
- **Alt text and captions describe what is visible**, including any organisation printed on a banner in the frame, and nothing that is not. If a photo is swapped, its alt and caption are rewritten with it.

## Distribution and goods (2048px)

| File | Shows | Used on |
|---|---|---|
| `eps-community-distribution.jpg` | Volunteers in navy talking with community members across a table of boxed goods, outdoor pavilion | Mission commitments ("Listen first") |
| `eps-community-distribution-wide.jpg` | Crowd at tables of goods in a large indoor hall | Home hero carousel |
| `eps-community-support-wide.jpg` | Wide view of a busy indoor hall with tables of donated goods | What We Do programs (community care) |
| `eps-relief-distribution-wide.jpg` | A volunteer handing a packaged item to a community member in a crowded hall | Mission hero |
| `eps-indoor-relief.jpg` | Community members moving between tables in a two-storey indoor hall | Mission approach ("Share") |
| `eps-relief-station.jpg` | Volunteers and community members, some in grey robes, at a table of goods under a pavilion | Mission commitments ("Share without discrimination") |
| `eps-supply-staging.jpg` | Boxed goods and bagged supplies on an outdoor table, volunteers behind | Mission approach ("Gather and prepare") |
| `eps-health-supplies.jpg` | Vitamins, medicines and health products on an outdoor table | What We Do programs (health) |
| `eps-supply-table-indoor.jpg` | Health products and flyers on a round indoor table, two volunteers behind | What We Do "How support moves" |
| `eps-partner-showcase.jpg` | Partners making heart hands behind a long table of donated supplies | Home hero carousel |
| `eps-water-delivery.jpg` | Three volunteers wheeling cases of bottled water on a hand truck | Mission commitments ("Prepare with care") |

## Children, school kits and families (2048px)

| File | Shows | Used on |
|---|---|---|
| `eps-education-relief.jpg` | Schoolchildren in uniform holding school-supply kits beside volunteers | What We Do hero |
| `eps-children-outreach.jpg` | Volunteers and schoolchildren with school-supply kits, selfie | What We Do programs (learning) |
| `eps-backpack-handout.jpg` | Volunteers, parents and children holding new backpacks before a pile of backpacks | Home hero carousel |
| `eps-backpack-stockpile.jpg` | Two volunteers beside a large stack of new backpacks | Home "The work, in pictures" |
| `eps-holiday-gift-bags.jpg` | Volunteers, families and children behind rows of holiday gift bags | Vision hero |

## Team and partners (2048px; `community-partners-group` is 600px)

| File | Shows | Used on |
|---|---|---|
| `eps-team-thank-you.jpg` | Four team members behind boxed electronics under a thank-you banner | Events hero |
| `eps-team-selfie.jpg` | Four team members in navy shirts, selfie at an indoor event | Home "Ways to take part" |
| `eps-volunteers-outdoor-event.jpg` | Two volunteers in navy shirts at an outdoor pavilion event | Events hero |
| `eps-community-partners-group.jpg` | Partners, families and a child holding a toy panda at an indoor gathering | Events field record |
| `eps-partner-team.jpg` | Three partners, two in yellow shirts, at an outdoor event | Events hero (main photo) |

## Events field record (~480px WebP)

All shown once, in the Events "Field record", in four groups (28 photos):

- **Getting goods ready:** `eps-relief-shipment-loading`, `eps-relief-shipment-ramp`, `eps-relief-pallets`, `eps-volunteer-team-outdoor`
- **Health partners:** `eps-clinic-team-portrait`, `eps-clinic-partners`, `eps-community-health-briefing`, `eps-hope-clinic-recognition`, `eps-lions-club-volunteers`, `eps-immunization-partners`
- **Celebrations and recognition:** `eps-living-giving-award`, `eps-award-ceremony-stage`, `eps-community-recognition`, `eps-podium-presentation`, `eps-community-recognition-event`, `eps-heritage-month-event`, `eps-living-giving-award-portrait`, `eps-taste-of-africa-gala`, `eps-taste-of-africa-gala-speaker`
- **Time together:** `eps-lions-club-gathering`, `eps-community-outdoor-partners`, `eps-community-roundtable`, `eps-community-meal`, `eps-partner-portrait`, `eps-community-meal-two`, `eps-community-booth-gathering`, `eps-community-team`, plus `eps-community-partners-group.jpg`

Within each group the order is set so rows break evenly at desktop width. The grid keeps each photo's own proportions, so changing the order changes where rows break.

## Brand mark

- `logo-mark-teal-navy.jpg`: cropped from the supplied two-person logo lockup; used in the header and footer.
- `logo-mark-blue.png` and `logo-mark.png`: earlier marks kept as legacy assets, not used by the current identity.
- `Logo.svg`, `Logo.pdf`: source lockup files.

## History of this set

- **November 2026 import:** the client sent 25 files. Nine were byte-identical to photos already here. Three more were ~480px WebP copies of photos held as 2048px JPGs (`water-delivery`, `holiday-gift-bags`, `community-team`), so only the higher-resolution version is kept. The other 13 were new and are in the field record.
- **Earlier duplicates removed:** `h2.jpg` was the same photo as `eps-children-outreach.jpg`, and `eps-community-supplies.jpg` was the same photo as `eps-relief-station.jpg`.
- **Restored:** `eps-indoor-relief.jpg` was deleted as unused in c74ce77. It is back, and now in use.
- **Renamed** so each name describes the frame: `eps-field-01`…`07` → `team-selfie`, `backpack-handout`, `volunteers-outdoor-event`, `supply-table-indoor`, `team-thank-you`, `backpack-stockpile`, `community-partners-group`. Also `eps-fleet-delivery` → `eps-water-delivery`, `eps-partner-community` → `eps-holiday-gift-bags`, and `eps-donation-presentation` → `eps-podium-presentation` (the frame shows envelopes, not a stated donation).

The Astro image pipeline emits optimised AVIF/WebP derivatives at build time.
- **November 2026 placement review:** every photo now appears once. The home hero carousel went from five slides to three, "The work, in pictures" lost its four small tiles, "Ways to take part" shows one photo instead of three, and Events lost its four-photo "Recent work" section (its links now land on the field record). Events opens on `partner-team` (portrait, in a portrait frame) instead of a cropped hall photo, and Mission's "Gather, prepare, share" photos are 3:2 instead of 21:9 strips.
