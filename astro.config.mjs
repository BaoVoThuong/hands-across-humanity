import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// The production domain, confirmed on 2026-11-23. www redirects here (Vercel).
export default defineConfig({
  site: 'https://handsacrosshumanity.org',
  integrations: [],
  // Every page is still prerendered to static HTML. The adapter only exists so
  // the one route that opts out (src/pages/api/checkout.ts, which talks to
  // Stripe with the secret key) can run as a Vercel serverless function.
  output: 'static',
  adapter: vercel(),
  // The site's entry page now lives at /about-us/; keep the root reachable.
  redirects: {
    '/': '/about-us/'
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },
  // Pre-bundle Stripe.js at dev-server start so Vite never re-optimises it
  // mid-session (that left the checkout dialog fetching a stale chunk).
  vite: {
    optimizeDeps: { include: ['@stripe/stripe-js/pure'] }
  }
});
