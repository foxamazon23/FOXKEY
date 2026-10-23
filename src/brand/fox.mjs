/**
 * The FoxKey mark: a one-colour fox pictogram whose chin runs into a key blade, drawn like a road-sign symbol.
 * Shared by FoxMark.astro and scripts/generate-assets.mjs. viewBox 0 0 64 75.
 */
export const FOX_VIEWBOX = '0 0 64 75';
/** Head with ears, inner ears, eyes and the cheek line cut out (draw with fill-rule="evenodd"). */
export const FOX_HEAD =
  'M3 2 L23 18 H41 L61 2 L59 29 L32 56 L5 29 Z M10 10 L19 17.5 L11 21.5 Z M54 10 L45 17.5 L53 21.5 Z M16 27 L27.5 29 L25 33 Z M48 27 L36.5 29 L39 33 Z M5 30 L32 50 L59 30 L59 33.5 L32 53.5 L5 33.5 Z';
/** Key blade and teeth (default fill rule, so it can overlap the chin). */
export const FOX_BLADE = 'M29.2 52 H34.8 V73 H29.2 Z M34.8 58 H41 V61.5 H34.8 Z M34.8 65 H39.5 V68.5 H34.8 Z';
/** Standalone SVG markup in one colour. */
export const foxSvg = (fill, attrs = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${FOX_VIEWBOX}" ${attrs}><path fill="${fill}" fill-rule="evenodd" d="${FOX_HEAD}"/><path fill="${fill}" d="${FOX_BLADE}"/></svg>`;
