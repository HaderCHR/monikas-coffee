/**
 * Photo credits. Every photograph is a stand-in from Unsplash, used under the Unsplash
 * License (free use, attribution appreciated but not required). Verified as free (not
 * Unsplash+) on 2026-11-19. Files live in src/assets/photos under the key name.
 */
export type Credit = { file: string; author: string; handle: string; id: string };

export const credits: Credit[] = [
  { file: 'casa-sala', author: 'Volodymyr Dobrovolskyy', handle: 'vladimir_d', id: '4lZyKFyzmWw' },
  { file: 'ambiente-mesa', author: 'Nathan Dumlao', handle: 'nate_dumlao', id: 'zUNs99PGDg0' },
  { file: 'ambiente-luz', author: 'Long Chung', handle: 'chungj07', id: 'EGU0c37idAA' },
  { file: 'casa-tazas', author: 'Katja Vogt', handle: 'folkmade', id: 'CipURjPCXOo' },
  { file: 'espresso', author: 'Katt Galvan', handle: 'kattgalvan', id: '3v0vppDjvMI' },
  { file: 'americano', author: 'Mehmet Talha Onuk', handle: 'mtonuk', id: 'MBeY2m00Ybc' },
  { file: 'cappuccino', author: 'T', handle: 'tanyabarrow', id: 'UWidxu7nZNg' },
  { file: 'latte', author: 'Billy Kwok', handle: 'billykwok', id: 'vfiA7rRtjWo' },
  { file: 'mocha', author: 'Emily Richards', handle: 'emilyrichardsss', id: 'QD4g6u1-cS4' },
  { file: 'vanilla-latte', author: 'Jeanie de Klerk', handle: 'jdk4lyfe', id: 'hmLY7GiNFyE' },
  { file: 'iced-caramel-latte', author: 'Kari Shea', handle: 'karishea', id: '1e5V69AQjgA' },
  { file: 'iced-latte', author: 'Nathan Dumlao', handle: 'nate_dumlao', id: 'vZOZJH_xkUk' },
  { file: 'matcha-latte', author: 'Liana S', handle: 'cherstve_pechivo', id: 'U4kneR_s7bU' },
  { file: 'te-frutos-rojos', author: 'Wesual Click', handle: 'wesual', id: 'bQOk1OuAk9Y' },
  { file: 'croissant', author: 'Kobby Mendez', handle: 'kobbymendez', id: 'iyM-XTsTiek' },
  { file: 'roll-canela', author: 'Yosep Sugiarto', handle: 'otjep', id: '1PEqqv4i2iM' },
  { file: 'cheesecake', author: 'Orkun Orcan', handle: 'orkunorcan', id: '7yhu6txevQA' },
  { file: 'ritual-dosis', author: 'Zarak Khan', handle: 'zarakvg', id: '69ilqMz0p1s' },
  { file: 'ritual-extraccion', author: 'Nathan Dumlao', handle: 'nate_dumlao', id: 'So7cyDtlmls' },
  { file: 'ritual-leche', author: 'Brooke Cagle', handle: 'brookecagle', id: 'X4RJG4aNi8o' },
  { file: 'ritual-agua', author: 'Giorgio Trovato', handle: 'giorgiotrovato', id: 'nxhqxf1FJBY' },
  { file: 'hero-sala', author: 'KWON JUNHO', handle: 'juno1412', id: 'cdV6wL_Eoy4' },
  { file: 'ambiente-charla', author: 'Julio Lopez', handle: 'juliolopez', id: 'd7jgsEdPcpw' },
  { file: 'ambiente-pastel', author: 'Roman Kraft', handle: 'iamromankraft', id: 'suOsnKfTzMI' },
  { file: 'ambiente-taza-verde', author: 'Priscilla Du Preez', handle: 'priscilladupreez', id: '3MrkGyBoRc0' },
  { file: 'ambiente-barra', author: 'RR Abrot', handle: 'rr_abrot', id: 'pNIgH0y3upM' },
  { file: 'ambiente-tazas', author: 'Izz R', handle: 'dizzcoverie', id: 'VKPLOCtxJRs' },
];

/** Unique photographers, in order of first appearance. */
export const photographers = credits.reduce<{ author: string; handle: string }[]>((list, c) => {
  if (!list.some((p) => p.handle === c.handle)) list.push({ author: c.author, handle: c.handle });
  return list;
}, []);
