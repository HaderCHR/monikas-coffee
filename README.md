# Monika's Coffee

Landing page de **Monika's Coffee**, una cafetería **ficticia** creada como proyecto de portafolio.
No es un negocio real: no tiene local, horarios, precios ni canales de contacto activos, y la web
lo indica donde podría confundirse.

## Concepto

La página es **la ficha de receta de la casa, leída como un editorial**: el oficio del café escrito
en su propia notación (gramos, segundos, grados, lo que lleva cada taza) junto a fotografías
grandes y tranquilas. Leída de arriba abajo, la página es **una taza en sección**: espuma, leche,
crema y espresso.

- **Portada:** la sala con luz de tarde a todo lo ancho; encima, apoyada en su borde inferior, una
  ficha con el titular, una frase, «Escríbenos» y «Ver la carta». Al cargar, la foto se «sirve»
  desde abajo y la ficha se posa sobre ella (una sola vez; nada con movimiento reducido).
- **La casa:** composición asimétrica: titular grande, la ventana en vertical y las notas de la casa
  como campos de una ficha con renglones.
- **La carta:** un índice de recetas. El nombre de cada categoría se queda fijo a la izquierda
  mientras pasan sus productos; junto a cada bebida, **una tacita dibujada por capas** con lo que
  lleva dentro (espresso, leche, espuma, hielo…) y la misma información en texto. Las capas son lo
  que la bebida es por definición, no recetas ni cantidades de la casa.
- **El ritual:** cuatro estaciones en orden sobre una línea de tiempo que se dibuja al leerla, cada
  una con su medida (18 g, 25 s, 65 °C, 1 vaso).
- **La sala:** un pliego editorial sobre fondo espresso: fotos de distintos tamaños y alturas, el
  titular y una línea de texto grande entre ellas.
- **Escríbenos:** tres canales como tres puertas, claramente de demostración.
- **Pie:** marca, nota de marca ficticia, navegación y créditos.

**Paleta** (las capas de la taza): espuma `#FCFAF7` (cabecera, portada, la casa), leche `#F5EFE6`
(la carta), crema `#E4CDAE` (el ritual) y espresso `#241812` / `#1A110D` (la sala, el contacto,
el pie). Tinta espresso `#2A1C16` / `#4A3026`, café `#7D5F4B` para la notación (el `#8B6B55` del
brief, oscurecido para llegar a 5:1) y un único acento caramelo `#C9A27A`, solo sobre espresso.
Entre fondos claros hay transiciones suaves, sin franjas.

**Tipografía:** Brygada 1918 (una romana de libro de 1918, con cursiva) para titulares, medidas y
la marca; Familjen Grotesk para el texto y la notación. Las dos, variables y autoalojadas.

**Fotografía:** 23 fotos con un etalonaje común (algo más cálidas, mate y con menos saturación)
para que se lean como una misma sesión. Sin marcos: esquinas rectas y un zoom lento al pasar el
cursor.

## Tecnología

- **[Astro 7](https://astro.build)** (versión fijada `7.4.5`) generando un sitio **estático**:
  cero JavaScript de framework en el cliente; un solo script pequeño (cabecera y menú). Los
  efectos ligados al scroll usan animaciones CSS con `animation-timeline`: sin librerías y sin
  JavaScript; donde el navegador no las admite, todo se ve en reposo.
- **Imágenes:** `astro:assets` + sharp en build: WebP responsive (`srcset`/`sizes`) con JPEG de
  respaldo, `width`/`height` explícitos (sin saltos de maquetación), `lazy` fuera del primer
  pantallazo y `fetchpriority="high"` solo en la imagen principal. Se probó AVIF y se descartó:
  con la misma calidad pesaba un 25–45 % más que WebP en estas fotos.
- **Fuentes:** API de fuentes de Astro con archivos locales: `@font-face`, `preload` y fallbacks con
  métricas ajustadas, sin peticiones a terceros.
- **Seguridad:** CSP generada por Astro (hashes de scripts y estilos) en un `<meta>`, más
  `public/_headers` (nosniff, frame-ancestors, Referrer-Policy, Permissions-Policy, HSTS) para
  hostings que lo leen (Netlify, Cloudflare Pages). Sin formularios, sin backend, sin scripts
  externos, sin dependencias aparte de Astro.
- **Única dependencia:** `astro` (sharp llega como dependencia opcional de Astro).

## Estructura

```
src/
  pages/        index.astro (la landing), 404.astro, robots.txt.ts, sitemap.xml.ts
  layouts/      Base.astro (head: SEO, Open Graph, fuentes, JSON-LD)
  components/   SiteHeader, Hero, Casa, Carta, Cup, Ritual, Sala, Contacto, SiteFooter, Photo, Icon
  data/         site.ts, menu.ts (carta), contact.ts (canales demo), credits.ts (fotos)
  styles/       global.css (tokens, base, botones, "board", marcos de foto)
  assets/       photos/ (originales de Unsplash), fonts/ (woff2 + licencias)
public/         favicon.svg/.ico, iconos PNG, og-image.jpg, site.webmanifest, _headers
scripts/        check-dist.mjs (comprobaciones del build), make-icons.mjs (iconos desde el SVG)
.github/        workflows/deploy.yml (publicación en GitHub Pages)
PRODUCT.md      registro de producto (supuestos marcados)
.impeccable/    brief de superficie con el contrato de dirección y capturas de revisión
```

## Cómo ejecutarlo

Requiere Node.js 22.23 o superior.

```bash
npm install
npm run dev        # http://localhost:4321/monikas-coffee/
npm run build      # genera dist/
npm run preview    # sirve dist/ en http://localhost:4321/monikas-coffee/
npm run check      # comprobaciones estáticas sobre dist/ (ejecutar después de build)
```

Astro envía telemetría anónima de uso; se desactiva con `npx astro telemetry disable`.

## Publicación

La web está publicada en **GitHub Pages**: https://haderchr.github.io/monikas-coffee/

Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que instala, compila, pasa
`npm run check` y publica `dist/`. Si alguna comprobación falla, no se publica. El workflow usa
solo acciones oficiales de GitHub fijadas por commit.

Como es un sitio de proyecto, vive bajo la subruta `/monikas-coffee/` (`base` en
`astro.config.mjs`); todas las rutas internas la respetan y `npm run check` lo verifica.

GitHub Pages no lee `public/_headers`: la CSP sigue activa porque va en el `<meta>` de la página,
pero las cabeceras que solo pueden enviarse desde el servidor (frame-ancestors, HSTS propio,
Permissions-Policy) no se aplican allí. Y `robots.txt` solo cuenta en la raíz de un dominio, así que
bajo la subruta es informativo.

## Si pasara a ser una cafetería real

1. Con dominio propio: pon el dominio en `site` y quita `base` en `astro.config.mjs`; de ahí salen la
   URL canónica, las de Open Graph, `robots.txt` y `sitemap.xml`.
2. En `src/data/contact.ts` pon `isDemo: false` y rellena `href` y `handle` de cada canal; se
   convertirán en enlaces normales y desaparecerán los avisos de demo.
3. Sustituye las fotografías de muestra por fotos propias (mismos nombres en `src/assets/photos/`).

## Fotografía

Todas las fotos son **imágenes de muestra** de [Unsplash](https://unsplash.com), usadas bajo la
[Licencia de Unsplash](https://unsplash.com/license) (uso gratuito, también comercial; la atribución
se agradece pero no es obligatoria). Se comprobó una a una que eran gratuitas y no Unsplash+
(19/11/2026). Las personas que aparecen no son clientes de ninguna cafetería real. Se descartó una
foto porque mostraba la carta de otra cafetería con su marca, y en el rediseño se retiraron cuatro
que no encajaban con una casa pequeña (un local industrial, una foto genérica de banco de imágenes,
otra cafetería con otro estilo y tazas sucias). Las 23 que quedan llevan un etalonaje común
aplicado con sharp; la licencia de Unsplash permite modificarlas.

| Archivo | Uso | Autor | Foto |
|---|---|---|---|
| casa-sala | Portada | Volodymyr Dobrovolskyy | [4lZyKFyzmWw](https://unsplash.com/photos/4lZyKFyzmWw) |
| ambiente-mesa | La sala | Nathan Dumlao | [zUNs99PGDg0](https://unsplash.com/photos/zUNs99PGDg0) |
| ambiente-luz | La casa | Long Chung | [EGU0c37idAA](https://unsplash.com/photos/EGU0c37idAA) |
| casa-tazas | La sala | Katja Vogt | [CipURjPCXOo](https://unsplash.com/photos/CipURjPCXOo) |
| espresso | Carta | Katt Galvan | [3v0vppDjvMI](https://unsplash.com/photos/3v0vppDjvMI) |
| americano | Carta | Mehmet Talha Onuk | [MBeY2m00Ybc](https://unsplash.com/photos/MBeY2m00Ybc) |
| cappuccino | Carta | T (@tanyabarrow) | [UWidxu7nZNg](https://unsplash.com/photos/UWidxu7nZNg) |
| latte | Carta | Billy Kwok | [vfiA7rRtjWo](https://unsplash.com/photos/vfiA7rRtjWo) |
| mocha | Carta | Emily Richards | [QD4g6u1-cS4](https://unsplash.com/photos/QD4g6u1-cS4) |
| vanilla-latte | Carta | Jeanie de Klerk | [hmLY7GiNFyE](https://unsplash.com/photos/hmLY7GiNFyE) |
| iced-caramel-latte | Carta | Kari Shea | [1e5V69AQjgA](https://unsplash.com/photos/1e5V69AQjgA) |
| iced-latte | Carta | Nathan Dumlao | [vZOZJH_xkUk](https://unsplash.com/photos/vZOZJH_xkUk) |
| matcha-latte | Carta | Liana S | [U4kneR_s7bU](https://unsplash.com/photos/U4kneR_s7bU) |
| te-frutos-rojos | Carta | Wesual Click | [bQOk1OuAk9Y](https://unsplash.com/photos/bQOk1OuAk9Y) |
| croissant | Carta | Kobby Mendez | [iyM-XTsTiek](https://unsplash.com/photos/iyM-XTsTiek) |
| roll-canela | Carta | Yosep Sugiarto | [1PEqqv4i2iM](https://unsplash.com/photos/1PEqqv4i2iM) |
| cheesecake | Carta | Orkun Orcan | [7yhu6txevQA](https://unsplash.com/photos/7yhu6txevQA) |
| ritual-dosis | El ritual | Zarak Khan | [69ilqMz0p1s](https://unsplash.com/photos/69ilqMz0p1s) |
| ritual-extraccion | El ritual | Nathan Dumlao | [So7cyDtlmls](https://unsplash.com/photos/So7cyDtlmls) |
| ritual-leche | El ritual | Brooke Cagle | [X4RJG4aNi8o](https://unsplash.com/photos/X4RJG4aNi8o) |
| ritual-agua | El ritual | Giorgio Trovato | [nxhqxf1FJBY](https://unsplash.com/photos/nxhqxf1FJBY) |
| hero-sala | La sala | KWON JUNHO | [cdV6wL_Eoy4](https://unsplash.com/photos/cdV6wL_Eoy4) |
| ambiente-charla | La sala | Julio Lopez | [d7jgsEdPcpw](https://unsplash.com/photos/d7jgsEdPcpw) |
| ambiente-pastel | La sala | Roman Kraft | [suOsnKfTzMI](https://unsplash.com/photos/suOsnKfTzMI) |
| ambiente-taza-verde | La sala | Priscilla Du Preez | [3MrkGyBoRc0](https://unsplash.com/photos/3MrkGyBoRc0) |
| ambiente-barra | La sala | RR Abrot | [pNIgH0y3upM](https://unsplash.com/photos/pNIgH0y3upM) |
| ambiente-tazas | La sala | Izz R | [VKPLOCtxJRs](https://unsplash.com/photos/VKPLOCtxJRs) |

Otros recursos: iconos de WhatsApp e Instagram de [Simple Icons](https://simpleicons.org) (CC0),
dibujados en un solo color; el resto de iconos, el favicon y la imagen Open Graph se crearon para
este proyecto (`scripts/make-icons.mjs` genera los PNG/ICO a partir de `public/favicon.svg`; la
imagen Open Graph es una captura de la portada a 1200×630).
Fuentes: Brygada 1918 y Familjen Grotesk (SIL OFL 1.1); licencias en
`src/assets/fonts/`.

## Decisiones y límites conocidos

- **Sin precios, horarios ni dirección** por diseño: el brief prohíbe inventar datos reales. Los
  precios y la disponibilidad se preguntan por los canales de contacto.
- **Canales de demostración:** los botones abren un aviso nativo (`popover`) que explica que son de
  ejemplo; ningún enlace apunta a un WhatsApp, Instagram o buzón real. El correo usa el dominio
  reservado `.example` (RFC 2606).
- **Datos estructurados:** solo `WebSite`. No se usa `LocalBusiness`/`CafeOrCoffeeShop` para no
  hacer pasar la cafetería por un negocio verificable.
- **Sin filtros en la carta:** las cuatro categorías caben en una pizarra con índice de anclas
  enlazables (`#carta-clasicos`, etc.); ocultar productos tras filtros no mejoraba la exploración.
- **Movimiento:** una sola familia de curvas (salida exponencial) y una idea: las cosas se llenan
  desde abajo, como una taza. La portada se sirve al cargar; las tacitas de la carta se llenan al
  entrar en pantalla; la línea del ritual se dibuja al leerla; dos fotos de la sala se desplazan un
  poco para dar profundidad. Las interacciones siguen la misma idea: los botones y los discos de
  contacto se «llenan» de un tono más claro al pasar el cursor, las flechas salen y vuelven, los
  subrayados se escriben y se borran, al señalar una bebida se vuelve a servir la capa superior de
  su tacita y su foto se enmarca con un paspartú del color del fondo, y el aviso y el menú salen más
  rápido de lo que entran. Ningún contenido espera al scroll para poder leerse, y todo queda quieto
  con `prefers-reduced-motion`.
- **Fotos de muestra:** son de distintos autores; el etalonaje común las acerca, pero no sustituye a
  una sesión propia con la misma luz y el mismo local.
- **`_headers`:** solo lo aplican hostings compatibles (Netlify, Cloudflare Pages); GitHub Pages lo
  ignora. La CSP va siempre en el `<meta>` de la página.
