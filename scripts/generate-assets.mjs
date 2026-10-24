/**
 * Generates the favicon, apple-touch-icon, logo.png (for schema.org) and the Open Graph image into /public.
 * Run: npm run assets
 * Needs the `sharp` and `playwright-core` dev dependencies and a Chromium binary
 * (set CHROMIUM_PATH, defaults to /opt/pw-browsers/chromium). The OG image is rendered in Chromium so it
 * uses the site's own Overpass font.
 */
import { writeFileSync, readFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import sharp from 'sharp';
import { chromium } from 'playwright-core';
import { FOX_HEAD, FOX_BLADE, foxSvg } from '../src/brand/fox.mjs';
import { vanSvg } from '../src/brand/van.mjs';

mkdirSync('public', { recursive: true });

const C = { sign: '#0B4EA2', plate: '#FFD500', ink: '#0B0C0C', paper: '#FFFFFF', muted: '#DCE7F5' };

// Favicon: the white fox pictogram on a motorway-blue tile with a white inset rule, the same tile as the site logo.
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="${C.sign}"/>
  <rect x="3.5" y="3.5" width="57" height="57" rx="8.5" fill="none" stroke="${C.paper}" stroke-width="3"/>
  <g transform="translate(13 11) scale(0.594)"><path fill="${C.paper}" fill-rule="evenodd" d="${FOX_HEAD}"/><path fill="${C.paper}" d="${FOX_BLADE}"/></g>
</svg>`;
writeFileSync('public/favicon.svg', favicon);
await sharp(Buffer.from(favicon), { density: 600 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(favicon), { density: 600 }).resize(512, 512).png().toFile('public/icon-512.png');

// Old logo files from the previous design.
for (const f of ['public/logo-dark.svg', 'public/logo-light.svg', 'public/logo.svg']) if (existsSync(f)) rmSync(f);

const fontData = readFileSync('node_modules/@fontsource-variable/overpass/files/overpass-latin-wght-normal.woff2').toString('base64');
const fontCss = `@font-face{font-family:Overpass;src:url(data:font/woff2;base64,${fontData}) format('woff2');font-weight:100 900}
*{box-sizing:border-box;margin:0}body{font-family:Overpass,Arial,sans-serif;color:${C.ink}}`;
const fox = (size, fill) => foxSvg(fill, `width="${size}" height="${Math.round((size * 75) / 64)}"`);
const tile = (size) => `<span style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;background:${C.sign};border-radius:${size * 0.18}px;box-shadow:inset 0 0 0 ${size * 0.045}px ${C.sign},inset 0 0 0 ${size * 0.09}px ${C.paper}">${fox(Math.round(size * 0.58), C.paper)}</span>`;

const og = `<!doctype html><html><head><style>${fontCss}
.og{width:1200px;height:630px;background:${C.paper};padding:40px;display:flex;flex-direction:column;gap:28px}
.sign{flex:1;background:${C.sign};color:${C.paper};border:6px solid ${C.paper};outline:5px solid ${C.sign};border-radius:22px;padding:44px 52px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:18px}
.word{display:flex;flex-direction:column;line-height:.9}
.word b{font-size:46px;font-weight:900;letter-spacing:-.01em}
.word span{font-size:21px;font-weight:900;letter-spacing:.2em;color:${C.muted};margin-top:6px}
.shields{margin-left:auto;display:flex;gap:10px}
.shield{border:3px solid ${C.paper};border-radius:6px;padding:4px 12px 0;font-size:26px;font-weight:900}
h1{margin-top:auto;font-size:78px;line-height:1;font-weight:900;letter-spacing:-.025em}
.foot{display:flex;align-items:center;gap:26px}
.plate{background:${C.plate};border:3px solid ${C.ink};border-radius:10px;display:flex;align-items:stretch;overflow:hidden}
.plate i{background:#1F4FA6;color:${C.paper};font-style:normal;font-weight:900;font-size:18px;padding:0 10px;display:flex;align-items:flex-end;padding-bottom:10px}
.plate b{font-size:46px;font-weight:900;letter-spacing:.05em;padding:12px 22px 4px}
.foot p{font-size:25px;font-weight:700;line-height:1.35}
</style></head><body><div class="og">
<div class="sign">
  <div class="brand">${fox(50, C.paper)}<div class="word"><b>FOXKEY</b><span>HGV</span></div>
    <div class="shields"><span class="shield">M62</span><span class="shield">M18</span></div></div>
  <h1>Lost your keys?<br>We come to you – 24/7.</h1>
</div>
<div class="foot"><div class="plate"><i>UK</i><b>07944 087924</b></div>
<p>Mobile HGV &amp; lorry keys and diagnostics.<br>Goole &amp; Yorkshire. Free call-out within 25 miles.</p></div>
</div></body></html>`;

const logo = `<!doctype html><html><head><style>${fontCss}
.l{width:512px;height:512px;background:${C.paper};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px}
.l b{font-size:78px;font-weight:900;line-height:.9;letter-spacing:-.01em}
.l span{font-size:34px;font-weight:900;letter-spacing:.2em;color:${C.sign}}
</style></head><body><div class="l">${tile(200)}<b>FOXKEY</b><span>HGV</span></div></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ deviceScaleFactor: 1 });
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(og);
await page.evaluate(() => document.fonts.ready);
const ogPng = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } });
await sharp(ogPng).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile('public/og-image.png');
await page.setViewportSize({ width: 512, height: 512 });
await page.setContent(logo);
await page.evaluate(() => document.fonts.ready);
const logoPng = await page.screenshot({ clip: { x: 0, y: 0, width: 512, height: 512 } });
await sharp(logoPng).png({ compressionLevel: 9, palette: true }).toFile('public/logo.png');

// Van livery illustration: a web image for the site and a large PNG to hand to a sign-writer.
mkdirSync('public/images', { recursive: true });
const vanBig = await browser.newPage({ deviceScaleFactor: 2.5 });
await vanBig.setViewportSize({ width: 1160, height: 580 });
await vanBig.setContent(`<!doctype html><html><head><style>${fontCss} body{background:transparent}</style></head><body>${vanSvg()}</body></html>`);
await vanBig.evaluate(() => document.fonts.ready);
const bigPng = await vanBig.locator('svg').first().screenshot({ omitBackground: true });
await sharp(bigPng).png({ compressionLevel: 9 }).toFile('public/images/foxkey-sprinter-livery.png');
await sharp(bigPng).resize(1600).webp({ quality: 82, alphaQuality: 90 }).toFile('public/images/foxkey-sprinter.webp');
await sharp(bigPng).resize(800).webp({ quality: 80, alphaQuality: 90 }).toFile('public/images/foxkey-sprinter-800.webp');
await browser.close();

writeFileSync('public/site.webmanifest', JSON.stringify({
  name: 'FoxKey HGV',
  short_name: 'FoxKey',
  description: 'Mobile HGV & Lorry Locksmith and Diagnostics',
  start_url: '/',
  display: 'browser',
  background_color: C.paper,
  theme_color: C.sign,
  icons: [
    { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
  ],
}, null, 2) + '\n');
console.log('Assets written to /public');
