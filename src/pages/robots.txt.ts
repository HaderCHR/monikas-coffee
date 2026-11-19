import type { APIRoute } from 'astro';
import { base } from '../data/site';

// Built from `site` + `base` in astro.config.mjs so the sitemap URL follows the real address.
// Crawlers only read robots.txt at a host's root, so under a GitHub Pages subpath this file is
// informative; it takes effect once the site moves to its own domain.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${base}sitemap.xml`, site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
