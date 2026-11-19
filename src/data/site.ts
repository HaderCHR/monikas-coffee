/**
 * Site-wide copy and settings.
 * Monika's Coffee is a fictional café built as a portfolio project: nothing here
 * describes a real business (no address, hours, ratings or reviews on purpose).
 */
export const site = {
  name: "Monika's Coffee",
  lang: 'es',
  locale: 'es_ES',
  title: "Monika's Coffee — Café y repostería para quedarse un rato",
  description:
    'Café preparado al momento, bebidas frías y repostería hecha en casa. Mira la carta de Monika’s Coffee y escríbenos para preguntar precios o disponibilidad.',
  tagline: 'Café recién hecho y repostería de casa',
  themeColor: '#213a2e',
  year: 2026,
} as const;

/** Primary navigation: one entry per section, in page order. */
export const nav = [
  { id: 'la-casa', label: 'La casa' },
  { id: 'carta', label: 'La carta' },
  { id: 'ritual', label: 'El ritual' },
  { id: 'sala', label: 'La sala' },
] as const;

export const contactAnchor = 'contacto';
