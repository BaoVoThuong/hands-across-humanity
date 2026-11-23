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

## Online donations (Stripe)

Donors pay without leaving the site. The donate panel sends the chosen amount, frequency and focus to `POST /api/checkout` ([src/pages/api/checkout.ts](src/pages/api/checkout.ts)), which creates an embedded Stripe Checkout Session (`ui_mode: embedded_page`). The panel then mounts Stripe's payment form in a dialog with Stripe.js. Card details are typed into Stripe's iframe and never touch this site. One-time gifts use `mode: payment`; monthly gifts use `mode: subscription`. On completion Stripe sends the donor to `/donate/thank-you/`, which confirms the session through `GET /api/checkout-status` before thanking them.

The API routes are the only server-rendered ones (Vercel functions via `@astrojs/vercel`); every page is still prerendered.

Without both Stripe keys, every donate button opens an email instead. To go live:

1. Stripe Dashboard → Developers → API keys → copy the secret key and the publishable key (`sk_test_…`/`pk_test_…` first, the live pair for production).
2. Vercel → Project → Settings → Environment Variables → add `STRIPE_SECRET_KEY` and `PUBLIC_STRIPE_PUBLISHABLE_KEY` (Production with the live pair, Preview with the test pair) → redeploy.
3. Stripe → Settings → Customer emails → turn on receipts for successful payments.
4. Optional: Stripe → Settings → Billing → Customer portal → enable it, copy the login link into `PUBLIC_STRIPE_PORTAL_URL` so monthly donors can manage their gift from the thank-you page.
5. Test with card `4242 4242 4242 4242`, any future date, any CVC.

Locally, put the test keys in `.env` and run `npm run dev`. Without an account yet, set `STRIPE_MOCK=1` instead: the dialog then shows a local placeholder where Stripe's form would be (dev server only; production builds ignore it). `astro preview` does not work with the Vercel adapter; use `npm run dev`, or a Vercel preview deployment to test the production build.

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
