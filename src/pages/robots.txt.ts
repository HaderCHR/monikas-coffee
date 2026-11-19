import type { APIRoute } from 'astro';

// Built from `site` in astro.config.mjs so the sitemap URL follows the real domain once it is set.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
