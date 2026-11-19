---
name: Monika's Coffee
description: A painted shopfront in bottle green and gilt, and the plaster-and-wood room behind it.
colors:
  paint: "#213a2e"
  paint-deep: "#16291f"
  paint-raised: "#2b4738"
  gilt: "#d2ae62"
  gilt-bright: "#e2c27f"
  gilt-line: "rgb(210 174 98 / 0.5)"
  shade: "#0d1913"
  on-paint: "#f1e8d6"
  on-paint-muted: "#c5cab7"
  plaster: "#f5efe6"
  oat: "#ece2d2"
  ink: "#33231b"
  brown: "#4a3026"
  coffee: "#7d5f4b"
  muted: "#645d56"
  rule: "rgb(74 48 38 / 0.18)"
typography:
  signature:
    fontFamily: "Yellowtail, cursive"
    fontSize: "clamp(3.6rem, 1.6rem + 7.4vw, 8.25rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0"
  display:
    fontFamily: "Besley, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.4vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Besley, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.35rem + 3.4vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  numeral:
    fontFamily: "Besley, Georgia, serif"
    fontSize: "clamp(4rem, 2.5rem + 4.8vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.035em"
    fontFeature: "lnum"
  title:
    fontFamily: "Besley, Georgia, serif"
    fontSize: "clamp(1.15rem, 1.05rem + 0.4vw, 1.4rem)"
    fontWeight: 600
    lineHeight: 1.08
  body:
    fontFamily: "Libre Franklin, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Besley, Georgia, serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "0.14em"
rounded:
  none: "0"
  hairline: "2px"
  round: "50%"
spacing:
  joint: "clamp(0.5rem, 0.9vw, 0.875rem)"
  gutter: "clamp(1rem, 3.2vw, 3rem)"
  section-y: "clamp(4.5rem, 2.5rem + 6.5vw, 9rem)"
  wrap: "82.5rem"
  header-h: "4rem"
components:
  button-gilt:
    backgroundColor: "{colors.gilt}"
    textColor: "{colors.shade}"
    rounded: "{rounded.hairline}"
    padding: "0.8em 1.35em"
    height: "3rem"
  button-gilt-hover:
    backgroundColor: "{colors.gilt-bright}"
    textColor: "{colors.shade}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.on-paint}"
    rounded: "{rounded.hairline}"
    padding: "0.8em 1.35em"
    height: "3rem"
  board:
    backgroundColor: "{colors.paint}"
    textColor: "{colors.on-paint}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 1rem + 3vw, 4rem)"
  nav-bar:
    backgroundColor: "{colors.paint}"
    textColor: "{colors.on-paint}"
    height: "{spacing.header-h}"
  channel-row:
    backgroundColor: "transparent"
    textColor: "{colors.on-paint}"
    padding: "1rem 0.75rem"
    height: "5.5rem"
  channel-row-hover:
    backgroundColor: "{colors.paint-raised}"
---

# Design System: Monika's Coffee

## Overview

**Creative North Star: "The Painted Shopfront"**

The site is a sign-written shop façade and the room behind it. Bottle-green paint carries everything that belongs to the front of the shop: the header bar, the fascia, the window bays, the menu board on the wall, the door (contact) and the footer. Gilt, lettered with a sign-writer's dark drop shade, is reserved for lettering and fine rules on that paint. Inside the room, the page turns to plaster cream and oat with espresso-brown ink, and the photographs do the talking.

Density is calm and generous in the room sections (one idea per section, wide vertical rhythm) and deliberately dense on the menu board, which holds the whole menu on one painted panel in two columns, like a real board. Depth comes from paint and joinery, not from floating cards: photographs sit square-cornered inside green joinery with a thin gilt bead, boards carry a chamfered gilt rule inset from their edge.

Motion is restrained and physical: the shutters roll up once on load, the ritual's sticky photograph crossfades with the step being read, photographs ease in a 3% zoom on hover, buttons step up and press down, nav underlines draw from the left. Everything rests under reduced motion.

**Key Characteristics:**
- Two materials: green paint with gilt lettering (the front) and plaster with brown ink (the room).
- Gilt appears only on paint, never on plaster.
- Square photographs in green joinery with a gilt bead; no rounded image cards.
- Boards with notched (chamfered) gilt rules frame the sign, the menu and the door.
- Three typefaces with fixed jobs: Yellowtail signs the name, Besley letters every heading and numeral, Libre Franklin sets the text.

## Colors

A two-material palette: bottle-green paint and gilt for the façade, plaster and espresso browns for the interior.

### Primary
- **Bottle-Green Paint** (paint): the façade colour. Header, hero, menu board, door section, joinery between photographs. Raised Paint (paint-raised) is its hover and the shutter slats; Deep Paint (paint-deep) is the footer, the page edge and the frame backing behind photographs.

### Secondary
- **Sign-Writer's Gilt** (gilt): lettering on paint (sign, board titles, category headings, contact title), the primary button, the active nav underline, icons on paint. Bright Gilt (gilt-bright) is its hover and the focus ring on paint. Gilt Line (gilt-line) is every rule, column rule, border and bead on paint.
- **Shade** (shade): the sign-writer's drop shadow under gilt letters and the text colour on gilt buttons.

### Tertiary
- **Coffee** (coffee): the unit beside each ritual measurement (g, s, °C). Darkened from the brief's #8B6B55 to hold 5:1 on plaster.

### Neutral
- **Plaster** (plaster): the room background (Casa, Ritual) and body background.
- **Oat** (oat): the alternate room band (Carta wall, Sala), so sections read as walls without lines.
- **Espresso Ink** (ink): body text on plaster.
- **Dark Brown** (brown): headings and numerals on plaster; the focus ring on plaster.
- **Warm Muted** (muted): secondary text and leads on plaster.
- **On-Paint Cream** (on-paint) and **On-Paint Sage** (on-paint-muted): primary and secondary text on green.
- **Brown Rule** (rule): hairline dividers on plaster (between ritual steps).

### Named Rules
**The Gilt Stays On Paint Rule.** Gilt lettering, gilt rules and the gilt bead appear only on bottle-green surfaces. On plaster, headings are dark brown and dividers are the brown rule.

**The Two Materials Rule.** Every section is either paint (front of shop: header, hero, menu board, door, footer) or plaster/oat (the room). No third surface colour, no gradients between them.

## Typography

**Display Font:** Besley (with Georgia, serif), a Clarendon cut for sign letters, headings and numerals.
**Body Font:** Libre Franklin (with Arial, sans-serif).
**Signature Font:** Yellowtail (with cursive), only for the word "Monika's".

**Character:** A sign-writer's Clarendon over a plain, warm grotesque; the script appears only as the shop's signature, as if painted by hand on the fascia.

### Hierarchy
- **Signature** (Yellowtail 400, clamp(3.6rem…8.25rem) on the fascia, up to 15.5rem in the footer, 1.85rem in the header, line-height 0.9): the name "Monika's" and nothing else.
- **Display** (Besley 800, clamp(2.75rem…5.5rem), 0.95): titles lettered on boards in gilt ("La carta", "Escríbenos" up to 6.25rem).
- **Headline** (Besley 600, clamp(2.25rem…4.25rem), 1.02): section titles on plaster, dark brown, balanced wrap.
- **Numeral** (Besley 800, clamp(4rem…7.5rem), 0.85, lining figures): the ritual's real measurements, with a Besley 600 unit in coffee beside it.
- **Title** (Besley 600, clamp(1.15rem…1.4rem)): menu item names, channel labels, step titles (up to 2rem).
- **Body** (Libre Franklin 400, 1.0625rem, 1.6): running text, 40–50ch measures; leads at clamp(1.0625rem…1.25rem) in muted.
- **Label** (Besley 700, 1.05rem, 0.14em, uppercase): menu category headings in gilt on the board. The trade word "COFFEE" is the wider cousin (Besley 800, 0.28em).

### Named Rules
**The Signature Only Rule.** Yellowtail sets the word "Monika's" and nothing else.

**The Measurement Is The Headline Rule.** Where a fact has a number (grams, seconds, degrees), the numeral is set largest and the sentence follows.

## Layout

Content sits in a centred wrap of 82.5rem with a fluid gutter (clamp(1rem, 3.2vw, 3rem)). Room sections use a 12-column grid with a fluid gap (clamp(1.5rem, 3vw, 3rem)); section heads split title (columns 1–6) and lead (8–12). Vertical rhythm is the section-y token (clamp(4.5rem…9rem)); paint sections that are part of the façade (hero, door) run tighter.

The **joint** token (clamp(0.5rem, 0.9vw, 0.875rem)) is the width of green joinery between panes: it is the gap between the hero's fascia, bays and stallriser, and between the Sala window's panes, which sit on a paint background padded by one joint.

The hero fills the first viewport (100svh minus the header). The menu board sets its body in two CSS columns with a gilt column rule; categories never break across columns, and the price question is the board's last line under a gilt rule. The ritual pairs a sticky photograph (columns 1–6) with tall steps (columns 8–12).

Breakpoints: 60rem (header nav collapses to the dialog menu; hero stallriser stacks), 56rem (door board and footer to fewer columns), 44rem (12-column splits stack; menu board to one column; the ritual's sticky photo is replaced by a photo per step; Sala window becomes two columns), 40rem (fascia sign stacks centred), 26rem (header trade word drops). Touch targets hold 44px throughout.

## Elevation & Depth

Depth is material, not floating. Surfaces are flat paint and flat plaster; the sense of depth comes from joinery (photographs set into green with a gilt bead), from the chamfered gilt rule inset inside boards, and from the sign-writer's hard drop shade under gilt letters. The few shadows are long, soft and low, as if a board hangs on a wall.

### Shadow Vocabulary
- **Sign-writer's shade** (`text-shadow: 0.035em 0.045em 0 #0d1913`): under every gilt letter on paint. A hard offset is native to painted sign-writing in this world.
- **Hung board** (`box-shadow: 0 30px 60px -40px rgb(13 25 19 / 0.65)`): the menu board and the Sala window on oat.
- **Button lift** (`box-shadow: 0 6px 16px -8px rgb(13 25 19 / 0.7)`): gilt button on hover; at rest a 1px ledge (`0 1px 0 rgb(13 25 19 / 0.35)`).
- **Notice** (`box-shadow: 0 40px 80px -30px rgb(0 0 0 / 0.7)`): the demo-channel popover only.

### Named Rules
**The Hung, Not Floating Rule.** A shadow only says that a painted object hangs on a wall: long, low, with a large negative spread. No ambient card shadows on plaster.

## Shapes

Square corners everywhere. Photographs are square-cornered and cropped by their frame; the bead is a 1px gilt line inset 0.35–0.5rem inside the photo (dropped on small menu thumbnails). Boards are rectangles whose inner gilt rule has chamfered (notched) corners, drawn with a clip-path polygon. Buttons carry only a 2px hairline radius. The one round shape is the circular arrow well beside each contact channel.

## Components

### Buttons
Painted and lettered; they step up 1px on hover and press 1px down on active (0.06s), and the arrow nudges 3px right.
- **Shape:** near-square (2px), min-height 3rem, 1.5px border, Libre Franklin 600 at 1rem.
- **Gilt (primary):** gilt fill, shade text; hover brightens to bright gilt with a soft lift shadow. Used for every "Escríbenos" / ask action.
- **Line:** transparent with a gilt-line border and cream text on paint; hover turns the border to full gilt over an 8% gilt wash. The secondary action beside a gilt button.
- **Focus:** 2px outline offset 3px, brown on plaster, bright gilt on paint.

### Board (signature)
A bottle-green panel with a 1px gilt rule inset from its edge and chamfered at the corners. It frames the fascia, the menu, the door and the demo notice. Content inside uses on-paint text, gilt titles and gilt-line dividers.

### Menu Board (signature)
One board holds the whole menu: a gilt display title, an intro in sage, a row of deep links to each category (Besley 600, gilt-line underline, 44px targets), then the categories in two columns split by a gilt column rule. Each item is a square photograph (6.5–9rem, beaded, hover zoom) beside its Besley name and a short description. The last line, under a gilt rule, asks about prices with a gilt button.

### Photograph frames
Square-cornered crop on a deep-paint backing; optional gilt bead; optional hover zoom (scale 1.03 over 0.9s, hover-capable pointers only).

### Navigation
A sticky green bar (4rem) with the script signature and spaced "COFFEE", five links in Libre Franklin 500 at 0.95rem, and a compact gilt button. Hover and the current section draw a 1px gilt underline from the left; the current link turns bright gilt. The bar gains a gilt-line border once scrolled and hides while reading downward. Below 60rem the links move to a full-screen green dialog with large Besley links separated by gilt lines and a full-width gilt button.

### Contact channels
Rows on the door board, separated by gilt lines: gilt icon, Besley label, sage handle, and a circular gilt-line arrow well that fills gilt on hover while the row warms to paint-raised and its padding shifts in.

### Ritual step
A large Besley numeral with its coffee-coloured unit, a step title and a short paragraph; on wide screens a sticky photograph beside the steps crossfades (0.7s) to the step nearest mid-screen.

### Shutter (signature motion)
Green slat shutters (repeating paint-raised / paint / shade bands) cover the hero bays and roll up once on load (1.25s, ease-in-out, door pane 0.2s later) while the photographs settle from 1.06 scale. Without motion the windows are simply open.

## Do's and Don'ts

### Do:
- **Do** letter in gilt with the shade drop only on bottle-green paint.
- **Do** set photographs square-cornered inside green joinery (one joint wide), with the gilt bead on anything larger than a thumbnail.
- **Do** frame a block that belongs to the shopfront (sign, menu, door, notice) as a board with the chamfered gilt rule.
- **Do** alternate room sections between plaster and oat instead of drawing lines between them.
- **Do** set real measurements as large Besley numerals with the unit in coffee.
- **Do** let every animation rest under prefers-reduced-motion; motion is once on load, on scroll position, or on hover/press.
- **Do** serve photographs as WebP with a JPEG fallback.

### Don't:
- **Don't** use Yellowtail for anything but the word "Monika's".
- **Don't** place gilt text or gilt rules on plaster or oat.
- **Don't** round photograph or panel corners, or float cards on soft ambient shadows.
- **Don't** break a menu category across the board's columns, or turn the menu into a uniform tile grid.
- **Don't** introduce a third surface colour or a gradient between paint and plaster.
