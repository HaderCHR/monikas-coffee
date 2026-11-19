// Static checks on the built site (run `npm run build` first, then `npm run check`).
// No dependencies: it reads dist/ and fails with a non-zero exit code when something is wrong.
import { readFile, access } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const read = (p) => readFile(new URL(p, dist), 'utf8');
const exists = (p) => access(new URL(p, dist)).then(() => true, () => false);

const failures = [];
const passes = [];
const check = (ok, label) => (ok ? passes : failures).push(label);

const html = await read('index.html');
const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`)) || [])[1];
const tags = (name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map((m) => m[0]);

// --- Head and SEO
const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
check(title.length >= 30 && title.length <= 65, `title length 30–65 (${title.length})`);
const description = attr(tags('meta').find((t) => /name="description"/.test(t)) || '', 'content') || '';
check(description.length >= 110 && description.length <= 160, `meta description 110–160 (${description.length})`);
check(/<html lang="es"/.test(html), 'html lang="es"');
check(/<link rel="canonical" href="https?:\/\//.test(html), 'canonical URL');
for (const p of ['og:title', 'og:description', 'og:image', 'og:url', 'og:type']) check(html.includes(`property="${p}"`), `Open Graph ${p}`);
check(html.includes('name="twitter:card"'), 'twitter:card');
check(/http-equiv="content-security-policy"/.test(html), 'Content-Security-Policy meta');
check(/<script type="application\/ld\+json">/.test(html) && !/LocalBusiness|CafeOrCoffeeShop|aggregateRating/.test(html), 'JSON-LD present and not posing as a real business');
for (const f of ['robots.txt', 'sitemap.xml', 'favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'site.webmanifest', 'og-image.jpg', '404.html']) check(await exists(f), `dist/${f} exists`);
check((await read('robots.txt')).includes('Sitemap:'), 'robots.txt points to the sitemap');

// --- Structure and accessibility
check(tags('h1').length === 1, `exactly one h1 (${tags('h1').length})`);
const levels = [...html.matchAll(/<h([1-6])\b/g)].map((m) => +m[1]);
const skips = levels.filter((l, i) => i > 0 && l > levels[i - 1] + 1);
check(skips.length === 0, `heading levels never skip (${levels.join('')})`);
const imgs = tags('img');
// A bare `alt` attribute is an empty alt (decorative image): valid, and how Astro writes alt="".
check(imgs.every((t) => /\salt(?:=|\s|>)/.test(t)), `every <img> has alt (${imgs.length} images)`);
const decorative = imgs.filter((t) => !/\salt="[^"]+"/.test(t)).length;
check(decorative === 4, `only the 4 duplicated ritual photographs are decorative (${decorative})`);
check(imgs.every((t) => attr(t, 'width') && attr(t, 'height')), 'every <img> has width and height (no layout shift)');
check(imgs.filter((t) => attr(t, 'fetchpriority') === 'high').length === 1, 'exactly one high-priority (LCP) image');
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const dupes = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]).filter((id, i, a) => a.indexOf(id) !== i);
check(dupes.length === 0, `ids are unique${dupes.length ? ' (' + [...new Set(dupes)].join(', ') + ')' : ''}`);
const anchors = tags('a').map((t) => attr(t, 'href')).filter((h) => h?.startsWith('#'));
const missing = anchors.filter((h) => h.length > 1 && !ids.has(h.slice(1)));
check(missing.length === 0, `every in-page link has a target (${anchors.length} links${missing.length ? '; missing ' + missing.join(', ') : ''})`);
const refs = [...html.matchAll(/\s(?:aria-labelledby|aria-describedby|aria-controls|popovertarget)="([^"]+)"/g)].flatMap((m) => m[1].split(' '));
check(refs.every((r) => ids.has(r)), 'every ARIA/popover reference points at an existing id');
check(tags('button').every((t) => /type="button"/.test(t)), 'every <button> declares type="button"');
const blank = tags('a').filter((t) => attr(t, 'target') === '_blank');
check(blank.every((t) => /rel="[^"]*noopener/.test(t)), 'external links opened in a new tab use rel="noopener"');
check(html.includes('class="skip-link"') && ids.has('contenido'), 'skip link and its target');

// --- Honesty constraints from the brief
check(!/\d+(?:[.,]\d{2})?\s?(?:€|\$|EUR|USD)/.test(html.replace(/<[^>]+>/g, ' ')), 'no prices in the page text');
check(!/<form\b/.test(html), 'no forms (nothing pretends to send)');
const external = tags('a').map((t) => attr(t, 'href')).filter((h) => /^https?:/.test(h || ''));
check(external.every((h) => /^https:\/\/unsplash\.com\/@/.test(h)), 'only external links are photo credits');
check(!/wa\.me|instagram\.com|mailto:/.test(html), 'no live WhatsApp/Instagram/mail links while in demo mode');

for (const p of passes) console.log('  ✓ ' + p);
for (const f of failures) console.log('  ✗ ' + f);
console.log(`\n${passes.length} passed, ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);
