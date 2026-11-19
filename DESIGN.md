---
name: Monika's Coffee
description: The house recipe card read as an editorial; the page is a cup in section, foam to espresso.
colors:
  foam: "#fcfaf7"
  milk: "#f5efe6"
  crema: "#e4cdae"
  espresso: "#241812"
  espresso-deep: "#1a110d"
  caramel: "#c9a27a"
  caramel-light: "#d9b893"
  ink: "#2a1c16"
  brown: "#4a3026"
  roast: "#5c4233"
  coffee: "#7d5f4b"
  on-dark: "#f3e9dc"
  on-dark-muted: "#cdb9a3"
  rule: "rgb(74 48 38 / 0.2)"
  rule-strong: "rgb(74 48 38 / 0.45)"
  rule-dark: "rgb(243 233 220 / 0.16)"
  focus: "#8a5a2b"
typography:
  display:
    fontFamily: "Brygada 1918, Georgia, serif"
    fontSize: "clamp(2.6rem, 1.6rem + 4.2vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Brygada 1918, Georgia, serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.6vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  measure:
    fontFamily: "Brygada 1918, Georgia, serif"
    fontSize: "clamp(2.6rem, 1.6rem + 4.2vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "lnum"
  title:
    fontFamily: "Brygada 1918, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Familjen Grotesk, Arial, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Familjen Grotesk, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  notation:
    fontFamily: "Familjen Grotesk, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.01em"
    fontFeature: "tnum, lnum"
  label:
    fontFamily: "Familjen Grotesk, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.1
rounded:
  square: "0"
  card: "4px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(4.5rem, 2.5rem + 5.5vw, 8rem)"
  seam: "clamp(4rem, 2rem + 5vw, 7rem)"
  header: "4.5rem"
  wrap: "86rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.foam}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brown}"
  button-on-espresso:
    backgroundColor: "{colors.caramel}"
    textColor: "{colors.espresso}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  button-on-espresso-hover:
    backgroundColor: "{colors.caramel-light}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "2.75rem"
  recipe-card:
    backgroundColor: "{colors.milk}"
    textColor: "{colors.brown}"
    rounded: "{rounded.card}"
    padding: "clamp(1.75rem, 3.2vw, 3rem)"
  photo:
    backgroundColor: "{colors.crema}"
    rounded: "{rounded.square}"
---

# Design System: Monika's Coffee

## Overview

**Creative North Star: "The Cup in Section"**

The page is Monika's house recipe card read as an editorial: the café's craft written in its own notation (doses, seconds, degrees, what goes into each cup) set beside large, quiet photographs. Read top to bottom, the page is a cup cut through: foam at the top, then milk, crema, and espresso at the foot. Every ground is a layer of a coffee, and the visitor moves down through them.

The system is warm, calm and sparse. A 1918 book face carries headlines, the wordmark and the measurements at display size; a plain grotesk carries text and the small print. Between them there is no middle size: big measured numbers against small notation. Structure comes from hairline rules like a ruled card, never from boxes, frames or card grids. Photographs are square-cornered, unframed and treated as one graded set.

Motion is one grammar: exponential ease-out, and things fill from the bottom like a poured cup. Everything is readable without motion and comes to rest under reduced motion.

**Key Characteristics:**
- Grounds change only by cup layer: foam, milk, crema, espresso, espresso-deep.
- One accent, caramel, and only on espresso.
- Hairline-ruled fields as the structural device (notation line, house notes, contact channels, menu categories).
- The cup-in-section glyph as the signature mark.
- Square, unframed photographs; one pill button.

## Colors

A coffee read in cross-section: four warm grounds from near-white foam to espresso, brown inks, and a single caramel accent kept on the dark layers.

### Primary
- **Espresso** (`espresso`): the dark ground for the room (Sala) and contact; the bottom of the cup. Its sections switch ink, rules, focus and selection as a set.
- **Espresso Deep** (`espresso-deep`): the footer only, the dregs below the espresso.

### Secondary
- **Caramel** (`caramel`): the one accent. Button fill on espresso, channel icons and arrow discs, footer labels, focus ring and selection on dark grounds. `caramel-light` is its hover state.

### Neutral
- **Foam** (`foam`): header, hero, the house, the 404 page; the page's default ground.
- **Milk** (`milk`): the menu ground, and the surface of the hero recipe card and modal notes.
- **Crema** (`crema`): the ritual ground; also the selection colour and the placeholder behind photographs on light grounds.
- **Espresso Ink** (`ink`): headlines, button fill on light grounds, the ritual timeline.
- **Brown** (`brown`): body text on light grounds; button hover.
- **Roast** (`roast`): secondary text on crema, where coffee would be too weak.
- **Coffee** (`coffee`): notation, category notes, closing lines, scrollbar thumb on milk.
- **On-Dark** / **On-Dark Muted** (`on-dark`, `on-dark-muted`): headings and body on espresso.
- **Rules** (`rule`, `rule-strong`, `rule-dark`): hairlines. `rule-strong` opens a ruled field, `rule` divides its rows; `rule-dark` replaces `rule` on espresso.
- **Focus** (`focus`): the 2px focus ring on light grounds.

### Named Rules
**The Cup Layer Rule.** A section's ground is one of the cup's layers, in order down the page. Between light layers the seam is a soft gradient over `spacing.seam` (milk into crema runs `in oklab` over 1.75 seams); no other surface tints exist.

**The Caramel-on-Espresso Rule.** Caramel appears only on espresso grounds. On light grounds the accent role is played by espresso ink.

## Typography

**Display Font:** Brygada 1918, roman and italic (Georgia, serif fallback)
**Body Font:** Familjen Grotesk (Arial, sans-serif fallback)

**Character:** An old book face set at weight 500 with tight tracking gives the headlines and numbers a written, measured voice; the grotesk underneath stays plain and legible. Italic Brygada is the handwriting on the card: the wordmark, field terms, units and the room's long line.

### Hierarchy
- **Display** (500, `display` step, 1.02): section titles (la casa, la carta, el ritual, la sala).
- **Headline** (500, `headline` step, 1.04): the hero h1 on the recipe card, the 404 title, the room's italic long line, contact channel labels.
- **Measure** (500, display size, 1, lining figures): the ritual's measurements (18 g, 25 s, 65 °C); the unit is italic at 0.42em. The hero notation values use the same face at the title step.
- **Title** (500, title step): menu category names, price question, modal titles; drink and station names drop to the lead step.
- **Lead** (400, lead step, 1.5, max 34em): the one paragraph under each section title.
- **Body** (400, 1.0625rem, 1.6): running text; menu and station descriptions at 0.975rem.
- **Notation** (500, 0.875rem, tabular lining figures, `coffee`): the recipe card's small print: drink composition, station counts, hero field labels, contact handles.
- **Label** (600, 1rem): buttons and text links.

### Named Rules
**The No Middle Size Rule.** Measurements and headlines sit at display size against small notation; do not introduce an intermediate size to bridge them.

**The Written Field Rule.** Italic Brygada marks the hand-written parts of the card (wordmark, field terms, units, the long line). Roman Brygada carries headings. Grotesk never goes italic.

## Layout

A 12-column grid inside a centred wrap (max `spacing.wrap`, side gutter `spacing.gutter`), column gap `clamp(1rem, 2vw, 2rem)`. Sections pad by `spacing.section`; the header is sticky at `spacing.header` and gains a hairline once the page scrolls.

Every section is a different composition inside that grid: the hero photograph runs out to the right window edge with the recipe card overlapping its lower-left foot and the notation line beside it; the house sets title and ruled notes left against a tall photograph dropped lower on the right; the menu holds each category name sticky on the left while drinks pass in two columns; the ritual is four stations on one timeline; the room is an editorial spread of photographs of different sizes with one long italic line; contact is a 5:7 split of heading and channel rows.

Responsive steps are 72rem (menu to one column), 64rem (tablet re-flows), 60rem (header collapses to a full-screen dialog menu; contact stacks), 48rem (phones: single column, hero photo edge to edge), 40rem and 30rem for the last tightening. The contact heading sizes by its own column (`17cqi`), never the viewport.

## Elevation & Depth

Flat. Depth comes from the cup's grounds and from photographs, not from shadows. Two surfaces are set down on the page and carry one soft drop: the recipe card (hero, 404) and the demonstration note.

### Shadow Vocabulary
- **Card set down** (`box-shadow: 0 1px 0 rgb(74 48 38 / 0.08), 0 28px 56px -32px rgb(36 24 18 / 0.45)`): the hero recipe card; the 404 card uses the second layer only.
- **Modal note** (`box-shadow: 0 40px 80px -30px rgb(0 0 0 / 0.6)`): the demonstration popover over a `rgb(26 17 13 / 0.6)` backdrop.

### Named Rules
**The Set-Down Rule.** Only a card that sits over something else gets a shadow. Sections, photographs and list rows never do.

## Shapes

Square by default. Photographs are square-cornered with no frame, border or caption box; they clip their image; under the pointer the picture leans in 6% while a mat in the ground colour closes around it. Cards that are set down round their corners just enough to read as paper (`rounded.card`; the modal note 6px). Buttons are full pills. The cup glyph is the one drawn silhouette: open at the top, rounded at the base, built from stacked layers. Rules are 1px hairlines; the ritual timeline adds a 7px dot at each station.

## Components

### Buttons
- **Shape:** full pill (`rounded.pill`), minimum height 3.25rem; 2.75rem in the header.
- **Primary:** espresso ink with foam text on light grounds, label type, 0.85rem × 1.6rem padding; on hover the trailing arrow travels out to the right and comes back from the left (560ms).
- **On espresso:** the same pill turns caramel with espresso text inside any dark section.
- **Hover / Active:** a lighter shade (`brown`, or `caramel-light` on espresso) is poured in from the bottom (scaleY on a pseudo-element, 520ms, `cubic-bezier(0.33, 1, 0.68, 1)`) while the shadow deepens; press scales to 0.965 in 120ms. With reduced motion the pour is a 240ms fade.
- **Text link (the quieter action):** label type in ink with a 1px underline that is erased to the right and redrawn from the left on hover (680ms); its arrow travels through like the button's.

### Recipe Card
- **Character:** a cream card set down over a photograph.
- **Surface:** milk, `rounded.card`, card-set-down shadow, padding `clamp(1.75rem, 3.2vw, 3rem)`.
- **Use:** the hero (h1, sentence, button and text link) and the 404 page. It enters by translating up 1.75rem; it never fades over the photograph.

### Ruled Fields
- **Character:** the card's ruled lines, the system's one structural device.
- **Style:** a `rule-strong` hairline opens the field, `rule` hairlines divide rows. Terms set in italic Brygada (or notation in the hero), values in body or display.
- **Instances:** the hero notation line (three cells, vertical hairlines between), the house notes (8.5rem term column), the contact channel rows (icon, Brygada label, notation handle, caramel arrow disc), menu category dividers, and the mobile menu links.

### Navigation
- **Desktop:** foam bar, wordmark left (Brygada italic 600 at 1.7rem plus "Coffee" in 0.72rem tracked grotesk caps), links in brown 500 whose underline draws in from the left on hover, leaves to the right, and stays on the current section; small pill CTA.
- **Mobile (≤60rem):** a "Menú" button opens a full-screen foam dialog: ruled Brygada links staggered in by 40ms, full-width pill at the foot.

### Cup in Section (signature)
A small glass drawn in layers of what goes into a drink, read from the bottom: espresso, water, milk, foam, chocolate, cream, vanilla, caramel, ice (diagonal stripes), matcha, tea, red fruit. Each layer has its own fixed fill colour (kept in the component, not the palette), with shares of 1–3. Medium (2rem × 2.85rem) stands beside each drink's name with the composition written under it as notation; large (5.5rem × 7.5rem) is the menu's key, its layers named on hairlines. Decorative and hidden from assistive technology because the composition is also written as text. It fills from the bottom as it scrolls into view; pointing at a drink sips its top layer and pours it again (900ms) without moving the layers below.

### Photographs
Square, unframed, `object-fit: cover`, crema placeholder (a darker brown on espresso). Aspect ratios vary by composition (4:5, 1:1, 3:2, 16:11). Where hover exists: the image leans in 6% (1100ms in, 700ms out) and a mat in the section's ground colour (`--mat`, 0.75rem; 0.4rem on menu thumbnails, triggered by the whole item) closes around it. Under reduced motion only the mat answers, as a fade.

## Do's and Don'ts

### Do:
- **Do** change ground only by cup layer, in order, with a soft seam between light layers.
- **Do** keep caramel on espresso grounds only.
- **Do** build structure from hairline rules: `rule-strong` to open a field, `rule` between rows.
- **Do** keep photographs square-cornered and unframed, and treat new photographs with the same warm, matte, lower-saturation grade.
- **Do** use the single pill button; on espresso it turns caramel.
- **Do** write measurements in Brygada at display size with an italic unit, and composition in small tabular notation.
- **Do** animate with the exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) and fill from the bottom: the hero photo pours in on load (clip from the bottom, 1100ms), cups fill and the ritual timeline draws on scroll timelines, two room photographs drift against the scroll. Interactions follow the same idea: buttons and contact discs are poured full on hover, arrows travel through and back, underlines are written in and erased, contact rows slide their name and write a caramel rule, the notice and the menu leave faster than they arrive (200ms vs 320–380ms), focus rings tighten onto the control. Everything is readable before motion; under reduced motion nothing moves or scales, but colour, opacity and box-shadow still fade.

### Don't:
- **Don't** put eyebrows or kickers above headings.
- **Don't** lay content out as card grids, or put frames inside frames.
- **Don't** add a second button style or a second accent colour.
- **Don't** add shadows to sections, photographs or rows; only set-down cards carry one.
- **Don't** size contact or footer type from the viewport as single giant words; size it from content or its own column.
