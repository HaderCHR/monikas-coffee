import type { ImageMetadata } from 'astro';

import espresso from '../assets/photos/espresso.jpg';
import americano from '../assets/photos/americano.jpg';
import cappuccino from '../assets/photos/cappuccino.jpg';
import latte from '../assets/photos/latte.jpg';
import mocha from '../assets/photos/mocha.jpg';
import vanillaLatte from '../assets/photos/vanilla-latte.jpg';
import icedCaramelLatte from '../assets/photos/iced-caramel-latte.jpg';
import icedLatte from '../assets/photos/iced-latte.jpg';
import matchaLatte from '../assets/photos/matcha-latte.jpg';
import teFrutosRojos from '../assets/photos/te-frutos-rojos.jpg';
import croissant from '../assets/photos/croissant.jpg';
import rollCanela from '../assets/photos/roll-canela.jpg';
import cheesecake from '../assets/photos/cheesecake.jpg';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: ImageMetadata;
  alt: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note: string;
  items: MenuItem[];
};

/** The menu, without prices on purpose: prices are asked for through the contact channels. */
export const menu: MenuCategory[] = [
  {
    id: 'carta-clasicos',
    title: 'Cafés clásicos',
    note: 'Los de toda la vida. Pídelo corto, largo o con más leche.',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Corto e intenso, con una crema espesa que se queda pegada a la taza. El punto de partida de todo lo demás.',
        image: espresso,
        alt: 'Espresso en un vaso pequeño de cristal sobre un platillo blanco, en una mesa de madera.',
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso alargado con agua caliente: suave, largo y sin prisa. El que se pide para acompañar una buena conversación.',
        image: americano,
        alt: 'Taza negra de café sobre su platillo, iluminada por el sol en una mesa de madera.',
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Espresso, leche y una capa generosa de espuma a partes iguales, con cacao por encima si te apetece.',
        image: cappuccino,
        alt: 'Cappuccino espolvoreado con cacao en una taza de cerámica moteada, sobre una mesa de roble.',
      },
      {
        id: 'cafe-latte',
        name: 'Café latte',
        description: 'Más leche que café, cremoso y servido en vaso. Para empezar el día sin sobresaltos.',
        image: latte,
        alt: 'Café latte con un dibujo de hoja en la espuma, en un vaso de doble pared sobre una mesa de madera.',
      },
    ],
  },
  {
    id: 'carta-especiales',
    title: 'Bebidas especiales',
    note: 'Para cuando apetece algo más dulce que un café solo.',
    items: [
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'Espresso con chocolate fundido y leche caliente, terminado con nata montada y virutas de chocolate.',
        image: mocha,
        alt: 'Mocha cubierto de nata montada y trozos de chocolate, en una taza blanca.',
      },
      {
        id: 'vanilla-latte',
        name: 'Vanilla latte',
        description: 'Nuestro latte con un toque de vainilla: dulce sin pasarse, perfumado y muy fácil de querer.',
        image: vanillaLatte,
        alt: 'Latte con espuma en una taza de cristal sobre un platillo negro, en una mesa de madera.',
      },
      {
        id: 'iced-caramel-latte',
        name: 'Iced caramel latte',
        description: 'Café con leche fría, hielo y caramelo, coronado con nata y un hilo de caramelo que cae por el vaso.',
        image: icedCaramelLatte,
        alt: 'Café helado con nata y caramelo en un vaso, sobre una mesa de madera en una cafetería luminosa.',
      },
    ],
  },
  {
    id: 'carta-frias',
    title: 'Frías y alternativas',
    note: 'Hielo, matcha y frutos rojos para las tardes de calor.',
    items: [
      {
        id: 'iced-latte',
        name: 'Iced latte',
        description: 'Espresso sobre leche fría y hielo. Las dos capas se mezclan solas mientras lo miras.',
        image: icedLatte,
        alt: 'Vaso con hielo en el que el café y la leche se mezclan en espiral.',
      },
      {
        id: 'matcha-latte',
        name: 'Matcha latte',
        description: 'Té matcha batido con leche texturizada: verde, cremoso y con un fondo ligeramente vegetal.',
        image: matchaLatte,
        alt: 'Matcha latte con un dibujo de hojas, visto desde arriba en una taza con platillo azul claro.',
      },
      {
        id: 'te-frutos-rojos',
        name: 'Té frío de frutos rojos',
        description: 'Infusión de frutos rojos con hielo, menta fresca y fruta entera. Sin café y muy refrescante.',
        image: teFrutosRojos,
        alt: 'Té frío rojo con hielo, frutos rojos y una rama de menta en un vaso tallado.',
      },
    ],
  },
  {
    id: 'carta-reposteria',
    title: 'Repostería',
    note: 'Hecha en casa. Lo que hay cada día depende del horno.',
    items: [
      {
        id: 'croissant',
        name: 'Croissant de mantequilla',
        description: 'Hojaldrado, dorado y con mantequilla de verdad. Cruje por fuera y se deshace por dentro.',
        image: croissant,
        alt: 'Croissant dorado en un plato oscuro sobre una tabla de madera, junto a un vaso de leche.',
      },
      {
        id: 'roll-canela',
        name: 'Roll de canela',
        description: 'Masa tierna enrollada con canela y azúcar moreno, con un glaseado ligero que se funde con el calor.',
        image: rollCanela,
        alt: 'Roll de canela con glaseado sobre una tabla de cortar de madera.',
      },
      {
        id: 'cheesecake',
        name: 'Cheesecake',
        description: 'Cremosa, con base de galleta y una capa de mermelada de frutos rojos. Pide un espresso para acompañarla.',
        image: cheesecake,
        alt: 'Porción de cheesecake con mermelada de frutos rojos en un plato blanco, junto a una taza.',
      },
    ],
  },
];
