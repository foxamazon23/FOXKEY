/**
 * FoxKey HGV livery on a 2016 Mercedes-Benz Sprinter (NCV3 facelift, MWB high roof), drawn side-on.
 * An illustration of the decals, not a photo. No manufacturer badge is drawn.
 * Shared by scripts/generate-assets.mjs (renders it to /public/images). viewBox 0 0 1160 560, ground at y 520.
 */
import { FOX_HEAD, FOX_BLADE } from './fox.mjs';

const C = { body: '#F4F5F5', line: '#2A2E30', glass: '#33414F', glassHi: '#4A5A6B', trim: '#3A3F44', tyre: '#1B1E21', rim: '#A9AFB5', sign: '#0B4EA2', plate: '#FFD500', ink: '#0B0C0C', white: '#FFFFFF', light: '#DCE7F5', band: '#1F4FA6' };

const fox = (x, y, w, fill) => `<g transform="translate(${x} ${y}) scale(${w / 64})"><path fill="${fill}" fill-rule="evenodd" d="${FOX_HEAD}"/><path fill="${fill}" d="${FOX_BLADE}"/></g>`;
const wheel = (cx) => `
  <circle cx="${cx}" cy="508" r="57" fill="${C.tyre}"/>
  <circle cx="${cx}" cy="508" r="35" fill="${C.rim}"/>
  <circle cx="${cx}" cy="508" r="27" fill="none" stroke="#8B9197" stroke-width="3"/>
  <circle cx="${cx}" cy="508" r="11" fill="#6E747A"/>`;

export const vanSvg = ({ font = 'Overpass, Arial, sans-serif', title = 'Illustration of the FoxKey HGV van: a 2016 Mercedes-Benz Sprinter in FoxKey HGV livery' } = {}) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1160 560" role="img" aria-label="${title}">
  <title>${title}</title>
  <ellipse cx="590" cy="566" rx="520" ry="16" fill="#000" opacity="0.12"/>
  <!-- body -->
  <path fill="${C.body}" stroke="${C.line}" stroke-width="3" stroke-linejoin="round" d="M112 476 L98 446 L98 372 Q100 334 140 324 L258 296 L354 112 Q364 90 398 88 L1036 88 Q1058 88 1058 110 L1060 470 L1060 482 L906 482 A70 70 0 0 0 806 482 L314 482 A70 70 0 0 0 214 482 L120 482 Z"/>
  <!-- rub strip and bumpers -->
  <path fill="${C.trim}" d="M98 440 L112 476 L120 482 L214 482 A70 70 0 0 1 222 458 L102 458 Z"/>
  <path fill="${C.trim}" d="M306 458 A70 70 0 0 1 314 482 L806 482 A70 70 0 0 1 814 458 Z"/>
  <path fill="${C.trim}" d="M898 458 A70 70 0 0 1 906 482 L1060 482 L1060 458 Z"/>
  <!-- headlight, grille edge, indicator -->
  <path fill="#D9DEE3" stroke="${C.line}" stroke-width="2" d="M100 356 Q104 334 138 326 L214 308 Q210 334 186 344 L104 368 Z"/>
  <path fill="${C.trim}" d="M98 382 L128 376 L128 430 L98 436 Z"/>
  <rect x="150" y="372" width="34" height="8" rx="4" fill="#E8A13A"/>
  <!-- windscreen and cab glass -->
  <path fill="${C.glass}" d="M268 296 L360 118 Q366 104 382 104 L388 104 L300 292 Z"/>
  <path fill="${C.glass}" d="M312 268 L388 120 L500 120 L500 268 Z"/>
  <path fill="${C.glassHi}" opacity="0.6" d="M330 262 L396 132 L420 132 L352 262 Z"/>
  <!-- mirror -->
  <path fill="none" stroke="${C.trim}" stroke-width="5" d="M296 262 L314 262"/>
  <rect x="276" y="222" width="24" height="64" rx="6" fill="${C.trim}"/>
  <!-- door shut lines -->
  <path fill="none" stroke="${C.line}" stroke-width="2" d="M262 302 L262 456 M510 100 L510 456 M522 100 L522 456 M780 100 L780 456 M1046 96 L1046 470"/>
  <path fill="none" stroke="${C.line}" stroke-width="2" d="M780 236 L1040 236"/>
  <rect x="470" y="300" width="24" height="7" rx="3" fill="${C.trim}"/>
  <rect x="534" y="300" width="24" height="7" rx="3" fill="${C.trim}"/>
  <!-- rear light -->
  <rect x="1050" y="320" width="10" height="110" rx="3" fill="#B3261E"/>
  ${wheel(264)}
  ${wheel(856)}

  <!-- LIVERY: big motorway sign on the load area -->
  <rect x="548" y="118" width="482" height="224" rx="22" fill="${C.sign}"/>
  <rect x="558" y="128" width="462" height="204" rx="15" fill="none" stroke="${C.white}" stroke-width="6"/>
  ${fox(580, 152, 96, C.white)}
  <text x="700" y="224" font-family="${font}" font-size="82" font-weight="900" fill="${C.white}" textLength="292" lengthAdjust="spacingAndGlyphs">FOXKEY</text>
  <text x="702" y="266" font-family="${font}" font-size="34" font-weight="900" fill="${C.light}" letter-spacing="10">HGV</text>
  <text x="789" y="312" font-family="${font}" font-size="19" font-weight="800" fill="${C.white}" text-anchor="middle">MOBILE LORRY KEYS &amp; DIAGNOSTICS<tspan dx="3">·</tspan><tspan dx="9">24/7</tspan></text>
  <!-- phone number on a rear number plate -->
  <rect x="610" y="362" width="380" height="74" rx="9" fill="${C.plate}" stroke="${C.ink}" stroke-width="4"/>
  <path fill="${C.band}" d="M612 371 Q612 364 619 364 L652 364 L652 434 L619 434 Q612 434 612 427 Z"/>
  <text x="632" y="425" font-family="${font}" font-size="16" font-weight="900" fill="${C.white}" text-anchor="middle">24/7</text>
  <text x="820" y="418" font-family="${font}" font-size="50" font-weight="900" fill="${C.ink}" text-anchor="middle" textLength="300" lengthAdjust="spacingAndGlyphs">07944 087924</text>
  <!-- cab door: small tile logo -->
  <rect x="318" y="296" width="64" height="64" rx="10" fill="${C.sign}"/>
  <rect x="322" y="300" width="56" height="56" rx="7" fill="none" stroke="${C.white}" stroke-width="3"/>
  ${fox(332, 307, 36, C.white)}
  <text x="392" y="330" font-family="${font}" font-size="30" font-weight="900" fill="${C.ink}" textLength="108" lengthAdjust="spacingAndGlyphs">FOXKEY</text>
  <text x="393" y="355" font-family="${font}" font-size="17" font-weight="900" fill="${C.sign}" letter-spacing="5">HGV</text>
  <text x="318" y="394" font-family="${font}" font-size="16" font-weight="800" fill="${C.ink}">Goole<tspan dx="2">·</tspan><tspan dx="6">up to 150 miles</tspan></text>
</svg>`;
