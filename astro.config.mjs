// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Published on GitHub Pages as a project site. `site` + `base` feed the canonical URL,
  // Open Graph URLs and the sitemap; with a custom domain, set `site` to it and drop `base`.
  site: 'https://haderchr.github.io',
  base: '/monikas-coffee',

  // Self-hosted variable fonts (SIL OFL 1.1, files and licences in src/assets/fonts).
  // Astro generates @font-face rules, preload links and metric-matched fallbacks.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Brygada 1918',
      cssVariable: '--font-display',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/brygada-1918-latin.woff2'],
            weight: '400 700',
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/brygada-1918-italic-latin.woff2'],
            weight: '400 700',
            style: 'italic',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Familjen Grotesk',
      cssVariable: '--font-text',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/familjen-grotesk-latin.woff2'],
            weight: '400 700',
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
