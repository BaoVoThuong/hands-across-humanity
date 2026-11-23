import { defineConfig } from 'astro/config';

// The production domain, confirmed on 2026-11-23. www redirects here (Vercel).
export default defineConfig({
  site: 'https://handsacrosshumanity.org',
  integrations: [],
  output: 'static',
  // The site's entry page now lives at /about-us/; keep the root reachable.
  redirects: {
    '/': '/about-us/'
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
