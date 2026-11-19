import type { APIRoute } from 'astro';

// A one-page site needs a one-entry sitemap; no integration required.
export const GET: APIRoute = ({ site }) => {
  const home = new URL('/', site).href;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${home}</loc>
  </url>
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
