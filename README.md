# Hands Across Humanity

Static Astro site for Hands Across Humanity, built as a documentary-style homepage with four dedicated content pages: Mission, What We Do, Vision and Who We Are.

## Run locally

This project requires Node 22.12 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

The main content routes are `/mission/`, `/what-we-do/`, `/vision/` and `/who-we-are/`.

## Verification

```bash
npm run prelaunch
```

The prelaunch command builds the static site, fails on unfilled capital-bracket placeholders in rendered HTML, and fails on empty content containers. The production build is emitted to `dist/`.

## Content handoff before launch

- Replace all illustrative images in `src/assets/images/` with consent-cleared photographs of the organisation's work.
- Re-write each matching alt text and caption after the final image is selected.
- Add verified contact details, legal registration, privacy policy and photography policy when the client supplies them.
- Set the production `site` URL in `astro.config.mjs` once the client confirms the canonical domain; then enable the sitemap integration.
- Keep the illustrative-image disclosure in the footer until every placeholder image has been replaced.

## Design decisions

The site follows the project brief: Field Report editorial layout, Newsreader + Public Sans, warm paper/sand/ink tokens, no fabricated metrics, no fake trust badges and restrained motion. See `src/assets/images/README.md` for the image register and disclosure requirements.
