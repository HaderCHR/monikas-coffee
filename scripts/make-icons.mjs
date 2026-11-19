// Rasterises public/favicon.svg into the PNG/ICO icons the page and manifest reference.
// Run once after changing the SVG:  node scripts/make-icons.mjs
// Uses sharp, which Astro already installs for its image pipeline.
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const svg = await readFile(new URL('../public/favicon.svg', import.meta.url));
const png = (size) => sharp(svg, { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

const out = (name) => new URL(`../public/${name}`, import.meta.url);

await writeFile(out('apple-touch-icon.png'), await png(180));
await writeFile(out('icon-192.png'), await png(192));
await writeFile(out('icon-512.png'), await png(512));

// favicon.ico: an ICO container holding PNG images (supported by every current browser).
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = sizes.map((size, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(size, 0);
  e.writeUInt8(size, 1);
  e.writeUInt8(0, 2); // palette
  e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4); // colour planes
  e.writeUInt16LE(32, 6); // bits per pixel
  e.writeUInt32LE(images[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += images[i].length;
  return e;
});
await writeFile(out('favicon.ico'), Buffer.concat([header, ...entries, ...images]));

console.log('icons written');
