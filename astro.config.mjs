// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANT: change `site` to your real domain before deploying (used for sitemap, canonical URLs and Open Graph).
export default defineConfig({
  site: 'https://foxkeyauto.co.uk',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      filter: (page) => !page.endsWith('/thanks'),
      serialize(item) {
        if (item.url.endsWith('/hgv') || item.url.endsWith('.co.uk/')) item.priority = 1.0;
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
