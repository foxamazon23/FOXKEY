/**
 * Generates the standalone logo SVGs, favicon, apple-touch-icon and the Open Graph image into /public.
 * Run: node scripts/generate-assets.mjs   (requires the `sharp` dev dependency)
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

mkdirSync('public', { recursive: true });

const mark = (bg) => `
  <polygon points="4,4 22,16 32,16 32,54 4,30" fill="#F26A1B"/>
  <polygon points="60,4 42,16 32,16 32,54 60,30" fill="#D55A12"/>
  <polygon points="19,31 45,31 32,50" fill="#F5F5F5"/>
  <polygon points="18,22 27,24 22,30" fill="#111418"/>
  <polygon points="46,22 37,24 42,30" fill="#111418"/>
  <polygon points="29,41 35,41 32,46" fill="#111418"/>
  <circle cx="32" cy="11" r="3.2" fill="${bg}"/>
  <rect x="29" y="50" width="6" height="22" rx="1" fill="#F26A1B"/>
  <rect x="35" y="57" width="6" height="3.5" rx="0.5" fill="#F26A1B"/>
  <rect x="35" y="64" width="4.5" height="3.5" rx="0.5" fill="#F26A1B"/>`;

const font = `font-family="Inter, 'Inter Display', Arial, Helvetica, sans-serif"`;

// Full logo: mark + two-level wordmark. viewBox 0 0 360 100.
const logo = (variant) => {
  const dark = variant === 'dark';
  const bg = dark ? '#111418' : '#FFFFFF';
  const text = dark ? '#F5F5F5' : '#111418';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 100" width="360" height="100" role="img" aria-labelledby="t">
  <title id="t">FoxKey Auto &amp; HGV</title>
  <rect width="360" height="100" fill="${bg}"/>
  <g transform="translate(14 10) scale(1.08)">${mark(bg)}</g>
  <text x="100" y="56" ${font} font-weight="800" font-size="46" letter-spacing="-1.5" fill="${text}">FOXKEY</text>
  <text x="102" y="82" ${font} font-weight="600" font-size="15" letter-spacing="6.5" fill="#F26A1B">AUTO &amp; HGV</text>
</svg>`;
};

writeFileSync('public/logo-dark.svg', logo('dark'));
writeFileSync('public/logo-light.svg', logo('light'));

// Favicon: fox head only, on a rounded charcoal tile.
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="#111418"/>
  <g transform="translate(4 8) scale(0.875)">
    <polygon points="4,4 22,16 32,16 32,54 4,30" fill="#F26A1B"/>
    <polygon points="60,4 42,16 32,16 32,54 60,30" fill="#D55A12"/>
    <polygon points="19,31 45,31 32,50" fill="#F5F5F5"/>
    <polygon points="18,22 27,24 22,30" fill="#111418"/>
    <polygon points="46,22 37,24 42,30" fill="#111418"/>
    <polygon points="29,41 35,41 32,46" fill="#111418"/>
    <circle cx="32" cy="11" r="3.2" fill="#111418"/>
  </g>
</svg>`;
writeFileSync('public/favicon.svg', favicon);
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');

// Open Graph image 1200x630
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1B2027"/><stop offset="1" stop-color="#111418"/></linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#F5F5F5" stroke-opacity="0.06" stroke-width="1"/></pattern>
    <radialGradient id="glow" cx="0.85" cy="0.2" r="0.6"><stop offset="0" stop-color="#F26A1B" stop-opacity="0.35"/><stop offset="1" stop-color="#F26A1B" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(80 70) scale(2.1)">${mark('#161B21')}</g>
  <text x="250" y="150" ${font} font-weight="800" font-size="96" letter-spacing="-3" fill="#F5F5F5">FOXKEY</text>
  <text x="256" y="200" ${font} font-weight="600" font-size="30" letter-spacing="13" fill="#F26A1B">AUTO &amp; HGV</text>
  <text x="80" y="330" ${font} font-weight="800" font-size="58" letter-spacing="-1.5" fill="#F5F5F5">Lost your keys?</text>
  <text x="80" y="400" ${font} font-weight="800" font-size="58" letter-spacing="-1.5" fill="#F26A1B">We come to you – 24/7.</text>
  <text x="80" y="460" ${font} font-weight="500" font-size="28" fill="#A0A7B1">Mobile auto locksmith &amp; diagnostics · Cars, vans, lorries &amp; HGVs</text>
  <text x="80" y="502" ${font} font-weight="500" font-size="28" fill="#A0A7B1">Goole · Yorkshire &amp; the Humber · UK on request</text>
  <rect x="80" y="545" width="330" height="56" rx="14" fill="#F26A1B"/>
  <text x="245" y="583" ${font} font-weight="800" font-size="28" fill="#111418" text-anchor="middle">07944 087924</text>
  <text x="440" y="583" ${font} font-weight="600" font-size="24" fill="#A0A7B1">Call or WhatsApp · Free call-out within 25 miles</text>
</svg>`;
await sharp(Buffer.from(og), { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toFile('public/og-image.png');
console.log('Assets written to /public');
