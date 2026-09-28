import type { APIRoute } from 'astro';
import { siteNoindex } from '../lib/env';

export const GET: APIRoute = ({ site }) => {
  const body = siteNoindex
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
