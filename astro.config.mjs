// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio público confirmado. SITE_URL permite usar otro dominio de forma explícita si cambia.
const site = process.env.SITE_URL ?? 'https://www.sanitia.es';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // La página de confirmación del formulario lleva noindex y no debe figurar en el sitemap.
      // /experiment/* son vistas temporales del experimento A/B de diseño (rama design/apple-experiment).
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return path !== '/contacto-enviado' && !path.startsWith('/experiment');
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
