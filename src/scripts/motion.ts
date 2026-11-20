/**
 * Monika's Coffee — scroll choreography.
 *
 * The page is a cup in section, and everything in it is poured: photographs fill from the bottom,
 * titles rise from behind the rim, the cups on the menu are filled layer by layer, the recipe's
 * rules are written in, and where the crema meets the espresso the dark surface rises with a
 * curved meniscus that settles flat. Inertia comes from scrubbed timelines that catch up with the
 * scroll, never from taking the scroll over: native scrolling, anchors and find-in-page are left
 * alone.
 *
 * This module is an enhancement. It loads deferred, the page is complete and readable without it,
 * and none of it runs with prefers-reduced-motion. Above the fold the entrance is plain CSS, so the
 * first paint never waits for this file.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

const $ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  root.querySelector<T>(selector);
const $$ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(selector));


/** Things undone when the media conditions change (GSAP reverts its own tweens and splits). */
let cleanups: Array<() => void> = [];

/* ------------------------------------------------------------------------------------------ */
/* Typography                                                                                  */
/* ------------------------------------------------------------------------------------------ */

/** Section titles: each line rises from behind its own mask, then the split is undone. */
function titles() {
  $$('[data-motion="title"]').forEach((el) => {
    const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'm-line' });
    el.classList.add('is-split');
    cleanups.push(() => el.classList.remove('is-split'));
    gsap.from(split.lines, {
      yPercent: 118,
      duration: 1.25,
      stagger: 0.1,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onComplete: () => {
        split.revert();
        el.classList.remove('is-split');
      },
    });
  });
}

/** The last call to action: «Escríbenos» is set letter by letter, each one tipping into place. */
function letters() {
  $$('[data-motion="chars"]').forEach((el) => {
    const split = SplitText.create(el, { type: 'chars', mask: 'chars', charsClass: 'm-char' });
    gsap.from(split.chars, {
      yPercent: 120,
      rotate: 7,
      transformOrigin: '0% 100%',
      duration: 1.15,
      stagger: 0.035,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      onComplete: () => split.revert(),
    });
  });
}

/** The room's one long line is read in: words take their ink as the line crosses the screen. */
function ink() {
  const line = $('[data-motion="ink"]');
  if (!line) return;
  const split = SplitText.create(line, { type: 'words', wordsClass: 'm-word' });
  gsap.fromTo(
    split.words,
    { opacity: 0.2 },
    {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: { trigger: line, start: 'top 84%', end: 'top 46%', scrub: 0.6 },
    },
  );
}

/* ------------------------------------------------------------------------------------------ */
/* The hero: a slow camera push as the page is left                                           */
/* ------------------------------------------------------------------------------------------ */

function heroCamera(wide: boolean) {
  const hero = $('.hero');
  if (!hero) return;
  const picture = $('.hero__photo picture', hero);
  // The one image whose scale is scrubbed: keep it on its own layer so it is not re-rastered.
  gsap.set(picture, { willChange: 'transform' });
  const timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: hero, start: 0, end: 'bottom top', scrub: 0.6 },
  });
  // The photograph is the far plane: it pushes in and sinks. The card and the notes are nearer
  // the camera, so they travel further: three depths from one scroll.
  timeline
    .to(picture, { scale: wide ? 1.12 : 1.07, yPercent: wide ? 5 : 3 }, 0)
    .to($('.hero__card', hero), { y: wide ? -96 : -36 }, 0)
    .to($('.hero__notes', hero), { y: wide ? -48 : -18 }, 0);
}

/* ------------------------------------------------------------------------------------------ */
/* Photographs                                                                                 */
/* ------------------------------------------------------------------------------------------ */

/**
 * Pour one photograph: its cover (the ground's colour, see .photo::before) shrinks upwards so the
 * picture is uncovered from the bottom, while the image settles from a slight zoom. Both are pure
 * transforms on their own layers for the length of the pour; afterwards the image's transform is
 * handed back to the stylesheet (hover zoom) and the layers are released.
 */
function pourOne(frame: HTMLElement, delay = 0, duration = 1.35) {
  const img = $('img', frame);
  frame.classList.add('is-pouring');
  gsap.to(frame, { '--cover': 0, duration, ease: 'power3.inOut', delay });
  gsap.fromTo(
    img,
    { scale: 1.18 },
    {
      scale: 1,
      duration: duration + 0.45,
      ease: 'expo.out',
      delay,
      clearProps: 'transform',
      onComplete: () => frame.classList.remove('is-pouring'),
    },
  );
}

/** Pour a set of frames as they reach the screen, in reading order. */
function pour(frames: HTMLElement[], { start = 'top 86%', stagger = 0.13 } = {}) {
  if (!frames.length) return;
  gsap.set(frames, { '--cover': 1 });
  ScrollTrigger.batch(frames, {
    start,
    once: true,
    onEnter: (batch) => batch.forEach((frame, i) => pourOne(frame as HTMLElement, i * stagger)),
  });
}

/** Reframe a photograph as it crosses the screen: the image drifts inside its frame. */
function reframe(frame: HTMLElement, amount = 3.5) {
  const picture = $('picture', frame);
  if (!picture) return;
  // A constant scale (only the translation is scrubbed) on its own layer: no re-rasterising.
  gsap.set(picture, { scale: 1 + (amount * 2.2) / 100, willChange: 'transform' });
  gsap.fromTo(
    picture,
    { yPercent: -amount },
    {
      yPercent: amount,
      ease: 'none',
      scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    },
  );
}

/* ------------------------------------------------------------------------------------------ */
/* Sections                                                                                    */
/* ------------------------------------------------------------------------------------------ */

function casa(wide: boolean) {
  const frame = $('.casa__photo');
  if (frame) {
    pour([frame], { start: 'top 84%' });
    reframe(frame, wide ? 4 : 2.5);
  }

  // The house notes are written like a recipe card: the top rule, then each line in turn.
  const notes = $('.casa__notes');
  if (notes) {
    const rows = $$('.casa__note', notes);
    gsap.set(notes, { '--rule-top': 0 });
    gsap.set(rows, { '--rule': 0 });
    gsap
      .timeline({ scrollTrigger: { trigger: notes, start: 'top 86%', once: true } })
      .to(notes, { '--rule-top': 1, duration: 1.1, ease: 'expo.inOut' })
      .to(rows, { '--rule': 1, duration: 1.1, ease: 'expo.inOut', stagger: 0.16 }, 0.2);
  }
}

function carta() {
  // The key: a cappuccino made in front of the reader. Espresso first, then the milk, then the
  // foam, each named as it is poured.
  const key = $('.carta__key');
  if (key) {
    const layers = $$('.cup__layer', key).reverse();
    const labels = $$('.carta__key-labels li', key).reverse();
    const note = $('.carta__key-note', key);
    gsap
      .timeline({ scrollTrigger: { trigger: key, start: 'top 84%', once: true } })
      .from(layers, {
        scaleY: 0,
        transformOrigin: '50% 100%',
        duration: 0.8,
        ease: 'power2.inOut',
        stagger: 0.42,
      })
      .from(labels, { x: -14, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.42 }, 0.35)
      .from(note, { opacity: 0, duration: 0.8, ease: 'power2.out' }, '>-0.3');
  }

  // Every drink: its photograph is poured, then its cup is filled from the bottom up, the way a
  // barista works along a row of cups.
  const items = $$('.item');
  const cupLayers = (item: Element) => $$('.cup__layer', item).reverse();
  gsap.set($('.item__photo'), { '--cover': 1 });
  gsap.set($$('.item .cup__layer'), { scaleY: 0, transformOrigin: '50% 100%' });
  ScrollTrigger.batch(items, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => {
      batch.forEach((item, i) => {
        const at = i * 0.12;
        pourOne($('.item__photo', item)!, at, 1.2);
        const layers = cupLayers(item);
        if (layers.length) {
          gsap.to(layers, {
            scaleY: 1,
            duration: 0.55,
            ease: 'power2.out',
            stagger: 0.14,
            delay: at + 0.5,
          });
        }
      });
    },
  });
}

/** Count a measurement up from zero, holding its final width so the unit never moves. */
function count(el: HTMLElement, delay: number) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target) || target < 2) return;
  el.style.minWidth = `${el.getBoundingClientRect().width}px`;
  const value = { n: 0 };
  el.textContent = '0';
  gsap.to(value, {
    n: target,
    duration: 1.7,
    ease: 'power3.out',
    delay,
    snap: { n: 1 },
    onUpdate: () => {
      el.textContent = String(value.n);
    },
  });
}

function ritual(oneRow: boolean) {
  const list = $('.stations');
  if (!list) return;
  const stations = $$('.station', list);

  // The timeline is one stroke: each station's dot lands, then its stretch of the rule is drawn
  // towards the next. Scrubbed with inertia, so it trails the scroll like a pen.
  gsap.set(stations, { '--line': 0, '--dot': 0 });
  const draw = (target: HTMLElement[], trigger: HTMLElement, start: string, end: string) => {
    const timeline = gsap.timeline({ scrollTrigger: { trigger, start, end, scrub: 0.9 } });
    target.forEach((station) => {
      timeline
        .to(station, { '--dot': 1, duration: 0.22, ease: 'back.out(3)' })
        .to(station, { '--line': 1, duration: 1, ease: 'none' });
    });
  };
  if (oneRow) draw(stations, list, 'top 86%', 'top 32%');
  else stations.forEach((station) => draw([station], station, 'top 88%', 'top 55%'));

  // The photographs are poured left to right and each measurement is counted as it arrives.
  const frames = stations.map((station) => $('.station__photo', station)).filter(Boolean) as HTMLElement[];
  gsap.set(frames, { '--cover': 1 });
  const nums = $('.station__num', list);
  cleanups.push(() =>
    nums.forEach((num) => {
      num.textContent = num.dataset.count ?? num.textContent;
      num.style.minWidth = '';
    }),
  );
  ScrollTrigger.batch(stations, {
    start: 'top 84%',
    once: true,
    onEnter: (batch) => {
      batch.forEach((station, i) => {
        const at = i * 0.16;
        pourOne($('.station__photo', station)!, at);
        const num = $('.station__num', station);
        if (num) count(num, at + 0.35);
      });
    },
  });
}

function sala(wide: boolean) {
  const section = $('.sala');
  if (!section) return;

  // The surface of the espresso: the crema above hangs into the room in a shallow curve that
  // releases and flattens as the dark layer rises into view.
  const meniscus = $('.sala__meniscus', section);
  if (meniscus) {
    gsap.fromTo(
      meniscus,
      { scaleY: 1 },
      {
        scaleY: 0,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'top 30%', scrub: 0.8 },
      },
    );
  }

  // Four photographs at four depths: the nearest travel furthest against the scroll, and each
  // image drifts inside its own frame.
  const frames = $$('.sala__photo', section);
  pour(frames, { start: 'top 88%', stagger: 0.16 });
  frames.forEach((frame) => {
    reframe(frame, wide ? 3.5 : 2);
    const depth = Number(frame.dataset.depth || 0);
    if (!depth) return;
    const reach = wide ? 46 : 20;
    gsap.set(frame, { willChange: 'transform' });
    gsap.fromTo(
      frame,
      { y: depth * reach },
      {
        y: -depth * reach * 0.8,
        ease: 'none',
        scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1.1 },
      },
    );
  });

  ink();
}

function contacto() {
  const list = $('.channels');
  if (!list) return;
  const rows = $$('li', list);
  gsap.set(list, { '--rule-top': 0 });
  gsap.set(rows, { '--rule': 0 });
  // The channels are written in like the house notes; their discs arrive last, with a little
  // spring, because they are what the visitor is meant to press.
  gsap
    .timeline({ scrollTrigger: { trigger: list, start: 'top 86%', once: true } })
    .to(list, { '--rule-top': 1, duration: 1.1, ease: 'expo.inOut' })
    .to(rows, { '--rule': 1, duration: 1.1, ease: 'expo.inOut', stagger: 0.14 }, 0.15)
    .from($$('.channel__icon', list), { y: 14, opacity: 0, duration: 0.9, stagger: 0.14, ease: 'expo.out' }, 0.3)
    .from($$('.channel__label, .channel__handle', list), { opacity: 0, duration: 0.9, stagger: 0.07, ease: 'power2.out' }, 0.35)
    .from($$('.channel__go', list), { scale: 0.2, opacity: 0, duration: 1, stagger: 0.14, ease: 'back.out(2)' }, 0.55);
}

/** On tall screens the footer waits underneath the page; its content rises as it is uncovered. */
function footer() {
  const main = $('main');
  const foot = $('.footer');
  const inner = foot && $('.wrap', foot);
  if (!main || !foot || !inner) return;
  gsap.fromTo(
    inner,
    { y: -64, opacity: 0.35 },
    {
      y: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: { trigger: main, start: 'bottom bottom', end: () => `+=${foot.offsetHeight}`, scrub: 0.6 },
    },
  );
}

/* ------------------------------------------------------------------------------------------ */
/* Magnetic actions                                                                            */
/* ------------------------------------------------------------------------------------------ */

/**
 * The main actions lean towards the pointer and spring back when it leaves. Calls to action pull
 * themselves; on the contact rows the whole row is the field and the arrow disc is what moves.
 */
function magnetic() {
  const fields: Array<[HTMLElement, HTMLElement, number]> = [];
  $$('[data-magnetic]').forEach((el) => fields.push([el, el, 0.32]));
  $$('.hero__actions .btn').forEach((el) => fields.push([el, el, 0.32]));
  $$('.channel').forEach((row) => {
    const disc = $('.channel__go', row);
    if (disc) fields.push([row, disc, 0.4]);
  });

  fields.forEach(([field, target, strength]) => {
    const move = (event: PointerEvent) => {
      const box = target.getBoundingClientRect();
      const x = Number(gsap.getProperty(target, 'x'));
      const y = Number(gsap.getProperty(target, 'y'));
      const dx = event.clientX - (box.left - x + box.width / 2);
      const dy = event.clientY - (box.top - y + box.height / 2);
      gsap.to(target, {
        x: gsap.utils.clamp(-14, 14, dx * strength),
        y: gsap.utils.clamp(-10, 10, dy * strength),
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };
    const leave = () =>
      gsap.to(target, { x: 0, y: 0, duration: 1.1, ease: 'elastic.out(1, 0.38)', overwrite: 'auto' });
    field.addEventListener('pointermove', move);
    field.addEventListener('pointerleave', leave);
    cleanups.push(() => {
      field.removeEventListener('pointermove', move);
      field.removeEventListener('pointerleave', leave);
      gsap.set(target, { clearProps: 'x,y' });
    });
  });
}

/* ------------------------------------------------------------------------------------------ */

function init() {
  const mm = gsap.matchMedia();
  mm.add(
    {
      motion: '(prefers-reduced-motion: no-preference)',
      wide: '(min-width: 48.0625rem)',
      oneRow: '(min-width: 64.0625rem)',
      fine: '(hover: hover) and (pointer: fine)',
      tall: '(min-width: 48rem) and (min-height: 40rem)',
    },
    (context) => {
      const { motion, wide, oneRow, fine, tall } = context.conditions as Record<string, boolean>;
      if (!motion) return;
      cleanups = [];
      heroCamera(wide);
      titles();
      letters();
      casa(wide);
      carta();
      ritual(oneRow);
      sala(wide);
      contacto();
      if (tall) footer();
      if (fine) magnetic();
      const done = cleanups;
      return () => done.forEach((undo) => undo());
    },
  );
}

// Lines are measured after the web fonts are in, so the split matches the final layout.
document.fonts.ready.then(init);
