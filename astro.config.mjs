import { defineConfig } from 'astro/config';

// The canonical site URL is intentionally unset until the client confirms the
// production domain. This prevents a fabricated canonical or sitemap URL.
export default defineConfig({
  integrations: [],
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
