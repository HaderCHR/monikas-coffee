// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Placeholder: replace with the real domain before deploying.
  // It feeds the canonical URL, Open Graph URLs and the sitemap.
  site: 'https://monikas-coffee.example',

  // Self-hosted fonts (OFL / Apache 2.0, files and licences in src/assets/fonts).
  // Astro generates @font-face rules, preload links and metric-matched fallbacks.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Besley',
      cssVariable: '--font-sign',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/besley-latin-wght-normal.woff2'],
            weight: '400 900',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Libre Franklin',
      cssVariable: '--font-text',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/libre-franklin-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Yellowtail',
      cssVariable: '--font-script',
      fallbacks: ['cursive'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/yellowtail-latin-400-normal.woff2'],
            weight: '400',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],

  // Content Security Policy: Astro hashes its own scripts and styles and emits a <meta> tag.
  // Headers that a <meta> cannot carry (frame-ancestors, HSTS…) live in public/_headers.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'none'",
        "object-src 'none'",
      ],
    },
  },

  // No Markdown code blocks on this site; turning Shiki off also keeps every style CSP-hashable.
  markdown: {
    syntaxHighlight: false,
  },

  build: {
    // One small stylesheet is cheaper inlined; larger ones stay external and cacheable.
    inlineStylesheets: 'auto',
  },
});
