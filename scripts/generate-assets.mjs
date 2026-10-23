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

mkdirSync('public', { recursive: true });

const C = { sign: '#0B4EA2', plate: '#FFD500', ink: '#0B0C0C', paper: '#FFFFFF', fox: '#F26A1B', foxDark: '#D55A12', muted: '#DCE7F5' };

const mark = (hole) => `
  <polygon points="4,4 22,16 32,16 32,54 4,30" fill="${C.fox}"/>
  <polygon points="60,4 42,16 32,16 32,54 60,30" fill="${C.foxDark}"/>
  <polygon points="19,31 45,31 32,50" fill="${C.paper}"/>
  <polygon points="18,22 27,24 22,30" fill="${C.ink}"/>
  <polygon points="46,22 37,24 42,30" fill="${C.ink}"/>
  <polygon points="29,41 35,41 32,46" fill="${C.ink}"/>
  <circle cx="32" cy="11" r="3.2" fill="${hole}"/>
  <rect x="29" y="50" width="6" height="22" rx="1" fill="${C.fox}"/>
  <rect x="35" y="57" width="6" height="3.5" rx="0.5" fill="${C.fox}"/>
  <rect x="35" y="64" width="4.5" height="3.5" rx="0.5" fill="${C.fox}"/>`;

// Favicon: the fox on a motorway-blue tile with a white inset rule, like a small road sign.
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="${C.sign}"/>
  <rect x="3" y="3" width="58" height="58" rx="9" fill="none" stroke="${C.paper}" stroke-width="2.5"/>
  <g transform="translate(13.5 9) scale(0.58)">${mark(C.sign)}</g>
</svg>`;
writeFileSync('public/favicon.svg', favicon);
await sharp(Buffer.from(favicon), { density: 600 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(favicon), { density: 600 }).resize(512, 512).png().toFile('public/icon-512.png');

// Old logo files from the previous design.
for (const f of ['public/logo-dark.svg', 'public/logo-light.svg', 'public/logo.svg']) if (existsSync(f)) rmSync(f);

const fontData = readFileSync('node_modules/@fontsource-variable/overpass/files/overpass-latin-wght-normal.woff2').toString('base64');
const fontCss = `@font-face{font-family:Overpass;src:url(data:font/woff2;base64,${fontData}) format('woff2');font-weight:100 900}
*{box-sizing:border-box;margin:0}body{font-family:Overpass,Arial,sans-serif;color:${C.ink}}`;
const foxSvg = (size, hole) => `<svg width="${size}" height="${Math.round(size * 74 / 64)}" viewBox="0 0 64 74" xmlns="http://www.w3.org/2000/svg">${mark(hole)}</svg>`;

const og = `<!doctype html><html><head><style>${fontCss}
.og{width:1200px;height:630px;background:${C.paper};padding:40px;display:flex;flex-direction:column;gap:28px}
.sign{flex:1;background:${C.sign};color:${C.paper};border:6px solid ${C.paper};outline:5px solid ${C.sign};border-radius:22px;padding:44px 52px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:18px}
.word{display:flex;flex-direction:column;line-height:.9}
.word b{font-size:46px;font-weight:900;letter-spacing:-.01em}
.word span{font-size:17px;font-weight:800;letter-spacing:.24em;color:${C.muted};margin-top:6px}
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
  <div class="brand">${foxSvg(58, C.sign)}<div class="word"><b>FOXKEY</b><span>AUTO &amp; HGV</span></div>
    <div class="shields"><span class="shield">M62</span><span class="shield">M18</span></div></div>
  <h1>Lost your keys?<br>We come to you – 24/7.</h1>
</div>
<div class="foot"><div class="plate"><i>UK</i><b>07944 087924</b></div>
<p>Mobile auto locksmith for cars, vans, lorries &amp; HGVs.<br>Goole &amp; Yorkshire. Free call-out within 25 miles.</p></div>
</div></body></html>`;

const logo = `<!doctype html><html><head><style>${fontCss}
.l{width:512px;height:512px;background:${C.paper};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px}
.l b{font-size:78px;font-weight:900;line-height:.9;letter-spacing:-.01em}
.l span{font-size:26px;font-weight:800;letter-spacing:.24em;color:${C.sign}}
</style></head><body><div class="l">${foxSvg(180, C.paper)}<b>FOXKEY</b><span>AUTO &amp; HGV</span></div></body></html>`;

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
await browser.close();

writeFileSync('public/site.webmanifest', JSON.stringify({
  name: 'FoxKey Auto & HGV',
  short_name: 'FoxKey',
  description: 'Mobile Auto Locksmith & Diagnostics – Cars, Vans, Lorries & HGVs',
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
