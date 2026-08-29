import { defineConfig } from 'astro/config';

// The canonical site URL is intentionally unset until the client confirms the
// production domain. This prevents a fabricated canonical or sitemap URL.
export default defineConfig({
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
