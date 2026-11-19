# Monika's Coffee

Landing page de **Monika's Coffee**, una cafetería **ficticia** creada como proyecto de portafolio.
No es un negocio real: no tiene local, horarios, precios ni canales de contacto activos, y la web
lo indica donde podría confundirse.

## Concepto

La página es el **escaparate pintado de la cafetería y la sala que hay detrás**.

- **Fachada (hero):** un rótulo de madera pintada en verde botella con el nombre en letras doradas
  de rotulista (guion "Monika's" + "COFFEE" en clarendon), dos vanos —el ventanal con su travesaño y
  la puerta— con fotografías enmarcadas en carpintería verde, y el zócalo bajo el alféizar con el
  mensaje y las acciones. Al cargar, la persiana sube una vez (desactivado con movimiento reducido).
- **La casa:** paredes de yeso crema, composición asimétrica foto + texto.
- **La carta:** una pizarra pintada colgada en la pared que reúne los 13 productos escritos en dos
  columnas con un filete dorado entre ellas, como una carta de verdad: foto cuadrada junto a cada
  nombre. Su último renglón es la invitación a preguntar precios y disponibilidad. Una columna en
  móvil.
- **El ritual:** cuatro gestos registrados con su medida real (18 g, 25 s, 65 °C, 1 vaso). En
  escritorio, la fotografía queda fija y cambia con cada paso.
- **La sala:** una sola ventana de muchos paneles: seis fotografías de distinto tamaño unidas por la
  carpintería verde.
- **Escríbenos:** la puerta. Tres canales (WhatsApp, Instagram, correo) claramente de demostración.
- **Pie:** la firma "Monika's" en grande, navegación secundaria y créditos fotográficos.

**Paleta:** verde botella `#213A2E` (fachada, pizarra, puerta, pie), dorado `#D2AE62` solo para
rótulos sobre verde, y los neutros del brief para el interior: crema `#F5EFE6`, avena `#ECE2D2`,
marrón espresso `#4A3026` / `#33231B`, café `#7D5F4B` (el `#8B6B55` del brief, oscurecido para
llegar a 5:1 de contraste) y gris cálido `#645D56` (el `#77716B` del brief daba 4,3:1 sobre crema).

**Tipografía:** Besley (clarendon de rotulista) para rótulos y titulares, Yellowtail (guion de
rotulista) solo para la firma "Monika's", y Libre Franklin para el texto. Todas autoalojadas.

## Tecnología

- **[Astro 7](https://astro.build)** (versión fijada `7.4.5`) generando un sitio **estático**:
  cero JavaScript de framework en el cliente; solo dos scripts pequeños (cabecera/menú y el paso
  activo del ritual, ~1,7 KB en total).
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
  components/   SiteHeader, Hero, Casa, Carta, Ritual, Sala, Contacto, SiteFooter, Photo, Icon
  data/         site.ts, menu.ts (carta), contact.ts (canales demo), credits.ts (fotos)
  styles/       global.css (tokens, base, botones, "board", marcos de foto)
  assets/       photos/ (originales de Unsplash), fonts/ (woff2 + licencias)
public/         favicon.svg/.ico, iconos PNG, og-image.jpg, site.webmanifest, _headers
scripts/        check-dist.mjs (comprobaciones del build), make-icons.mjs (iconos desde el SVG)
PRODUCT.md      registro de producto (supuestos marcados)
.impeccable/    brief de superficie con el contrato de dirección y capturas de revisión
```

## Cómo ejecutarlo

Requiere Node.js 22.23 o superior.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ en http://localhost:4321
npm run check      # comprobaciones estáticas sobre dist/ (ejecutar después de build)
```

Astro envía telemetría anónima de uso; se desactiva con `npx astro telemetry disable`.

## Antes de publicarlo

1. Cambia `site` en `astro.config.mjs` (ahora `https://monikas-coffee.example`): de ahí salen la URL
   canónica, las de Open Graph, `robots.txt` y `sitemap.xml`.
2. Si fuera una cafetería real: en `src/data/contact.ts` pon `isDemo: false` y rellena `href` y
   `handle` de cada canal; se convertirán en enlaces normales y desaparecerán los avisos de demo.
3. Sustituye las fotografías de muestra por fotos propias (mismos nombres en `src/assets/photos/`).

## Fotografía

Todas las fotos son **imágenes de muestra** de [Unsplash](https://unsplash.com), usadas bajo la
[Licencia de Unsplash](https://unsplash.com/license) (uso gratuito, también comercial; la atribución
se agradece pero no es obligatoria). Se comprobó una a una que eran gratuitas y no Unsplash+
(19/11/2026). Las personas que aparecen no son clientes de ninguna cafetería real. Se descartó una
foto porque mostraba la carta de otra cafetería con su marca.

| Archivo | Uso | Autor | Foto |
|---|---|---|---|
| casa-sala | Hero (ventanal) | Volodymyr Dobrovolskyy | [4lZyKFyzmWw](https://unsplash.com/photos/4lZyKFyzmWw) |
| ambiente-mesa | Hero (puerta) | Nathan Dumlao | [zUNs99PGDg0](https://unsplash.com/photos/zUNs99PGDg0) |
| ambiente-luz | La casa | Long Chung | [EGU0c37idAA](https://unsplash.com/photos/EGU0c37idAA) |
| casa-tazas | La casa | Katja Vogt | [CipURjPCXOo](https://unsplash.com/photos/CipURjPCXOo) |
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
imagen OG se compuso con las fuentes y la foto `casa-sala` y se capturó a 1200×630).
Fuentes: Besley y Libre Franklin (SIL OFL 1.1), Yellowtail (Apache 2.0); licencias en
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
- **Movimiento:** solo dos momentos (la persiana del hero y la foto fija del ritual) más micro
  interacciones al pasar el cursor; nada aparece al hacer scroll y todo queda quieto con
  `prefers-reduced-motion`.
- **Fotos de muestra:** son de distintos autores, así que la luz y el estilo no son 100 %
  homogéneos como lo serían en una sesión propia.
- **`_headers`:** solo lo aplican hostings compatibles; en otros hay que configurar esas cabeceras
  en el servidor. La CSP va siempre en el `<meta>` de la página.
