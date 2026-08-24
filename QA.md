# QA handoff

Last verified against the production build with Node 22.12.0.

## Automated checks

- `npm run prelaunch` — pass
- Capital-bracket placeholder gate — pass
- Empty-content-container gate — pass
- `npm audit --omit=dev --audit-level=high` — 0 vulnerabilities
- Contrast pairs from the design system — all used pairs pass WCAG AA

## Browser smoke test

Production preview was checked across `/`, `/mission/`, `/what-we-do/`, `/vision/` and `/who-we-are/` at 375×812 and 1440×900 with Chromium headless:

- One `h1` per route
- All rendered images have an `alt` attribute
- No horizontal overflow at either viewport
- Navigation resolves to four dedicated pages with the active page state
- Home cards navigate to the Mission page
- Mobile menu opens, sets `aria-expanded`, makes `main` inert, closes on Escape, and returns focus to the toggle
- No console errors or page errors

## Launch blockers intentionally left for client handoff

- Replace all illustrative AI-generated images with consent-cleared documentary photography.
- Confirm donation provider and connect the secure donation URL.
- Supply verified contact, legal registration, governance and policy details.
- Set the canonical production URL in `astro.config.mjs` and enable sitemap generation.
