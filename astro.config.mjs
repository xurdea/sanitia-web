// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Netlify inyecta `URL` en el build con la URL principal del sitio.
// En local se usa localhost. Cuando exista dominio definitivo, puede fijarse con SITE_URL.
const site = process.env.SITE_URL ?? process.env.URL ?? 'http://localhost:4321';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
