# Events page — design

**Date:** 2026-08-29
**Route:** `/events/`
**Status:** approved, ready for an implementation plan

## Why this page exists

The site currently describes how the organisation works, but never shows a
dated occasion. An events page does two jobs the other pages cannot:

1. Tells a visitor what is coming up, which is the only thing on the site
   they can act on with a calendar.
2. Shows that the work has actually taken place, which is the strongest
   trust signal available to an organisation that publishes no statistics.

Upcoming comes before past. Upcoming is actionable; past is evidence.

## Placement

- Menu grows from five items to six:
  About Us · Mission · What We Do · **Events** · Vision · Who We Are
- Events sits after What We Do. The first three items answer *who we are and
  what we do*; Events answers *and here is proof*; the last two answer *where
  we are going and who makes it happen*.
- Built with the existing `EditorialPage` + `Panel` components so it matches
  the four sibling pages exactly. No new layout primitives.

## Structure — three panels, each sized to one viewport

Every panel must fit within one screen at 1440x800 (724px of usable height
after the 76px header). This is a hard constraint, not a preference; the
`field-notes` section elsewhere on the site already violates it and reads
worse for it.

| # | Panel | id | Ground | Role |
|---|-------|----|--------|------|
| 1 | Hero | `top` | paper | What this page is |
| 2 | Upcoming | `upcoming` | sand | What is next, and how to take part |
| 3 | Recent events | `recent` | paper | What the work has looked like |

Panel 3 carries the closing CTA that links to the next page, following the
pattern of the four sibling pages.

## Content

### Panel 1 — Hero

- **Eyebrow:** Events
- **H1:** Where the work actually happens.
- **Lead:** Distribution days, school kit handouts, partner drives. Here is
  what is coming up — and what the work has looked like so far.
- **Hero signals (3):** Community distributions · School and family support ·
  Partner supply drives
- **Image:** `communitySupportWide`

The lead deliberately points forward before it points back, because the panel
immediately below it is Upcoming.

### Panel 2 — Upcoming

Two states, selected by whether `upcomingEvents` has entries.

**State A — events are scheduled.** A vertical list. Each row carries date,
title, location, one line of description, and a *Get in touch* action.

**State B — nothing scheduled yet.** The panel becomes *Take part in the next
one*, offering three ways in: contribute goods, volunteer, be notified.

State B is a deliberate design decision, not a fallback. When this panel is
empty it occupies the most valuable position on the page, and an empty list
there tells a visitor the organisation has stopped operating. An invitation
in that position does useful work instead.

### Panel 3 — Recent events

Four cards, 2x2 at desktop, one column on mobile.

| Card | Title | Image |
|------|-------|-------|
| 01 | Community distribution day | `communityDistributionWide` |
| 02 | School and learning kits | `educationRelief` |
| 03 | Health and hygiene supplies | `healthSupplies` |
| 04 | Partner supply drive | `partnerShowcase` |

Card anatomy: image (3:2) → title → optional meta line (date · location) →
one or two sentences of description.

## Data model

All content lives in `src/data/events.ts`. A non-engineer edits that file and
touches nothing else.

```ts
pastEvents: [
  { title, image, alt, summary, date?, location? }
]
upcomingEvents: [
  { title, date, location, summary }
]
```

`date` and `location` are optional on past events. `upcomingEvents` may be
empty.

## Degradation rules

These are the reason the design works before the client supplies anything.

1. A past event missing `date` and `location` drops the entire meta line. No
   stray separator, no empty element, no visible gap.
2. Every `summary` is written as a complete sentence that does not depend on
   the date. Removing the meta line never leaves a fragment.
3. `upcomingEvents` empty renders State B. It never renders an empty list, and
   never renders a heading with nothing under it.
4. No element is shipped hidden and waiting to be unhidden later. State B is
   real content, not a placeholder.

## Content integrity

The four card titles name **kinds of activity** — "Community distribution
day" — not the proper name of a specific occasion. They describe what is
visibly in the photograph, so they assert nothing unverified.

Dates, locations, attendance figures and event names are left for the client
to supply. They are the most checkable facts a visitor encounters, and the
site's standing rule is that nothing unverifiable ships as fact.

## Images

Reuse from the existing `src/assets/images/eps/` set; repetition across pages
is acceptable and was confirmed with the client. Alt text is written from the
descriptions recorded in `src/assets/images/README.md`.

The seven `eps-field-01` … `eps-field-07` photographs are not assigned here.
They have not been reviewed, and alt text will not be written for an image
nobody has looked at. This page is the natural home for them once their
subjects are known.

## Out of scope

No calendar feed, no RSVP or registration handling, no ticketing, no email
capture backend, no CMS. The site remains a static build with no backend, and
*Get in touch* and *be notified* resolve to existing contact routes.

## Acceptance criteria

- [ ] `/events/` builds and appears in the menu as the fourth item
- [ ] Each of the three panels fits within 724px at 1440x800
- [ ] With `upcomingEvents` empty, panel 2 renders State B and no empty list
- [ ] With a past event missing date and location, no meta line and no gap
- [ ] All content comes from `src/data/events.ts`
- [ ] `npm run prelaunch` exits 0
- [ ] One h1, no console errors, no horizontal overflow at 1440 and 390
- [ ] Every image carries alt text and intrinsic dimensions
