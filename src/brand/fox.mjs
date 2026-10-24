/**
 * The FoxKey mark: a fox head whose chin runs into a key, drawn as a white outline on blue
 * (white strokes for the head, ears and key; solid white eyes and cheek lines).
 * Shared by FoxMark.astro, scripts/generate-assets.mjs and scripts/van-scene.html.
 * Path coordinates sit on a 64 × 75 grid; FOX_VIEWBOX adds room for the stroke at the ear tips.
 */
export const FOX_VIEWBOX = '-4 -5 72 84';
/** Head and key as one outline: the V of the chin opens straight into the key shaft and teeth. Stroke it. */
export const FOX_OUTLINE =
  'M3 2 L23 18 H41 L61 2 L59 29 L34.8 53.2 V58 H41 V61.5 H34.8 V65 H39.5 V68.5 H34.8 V73 H29.2 V53.2 L5 29 Z';
/** Inner ears. Stroke them. */
export const FOX_EARS = 'M10 10 L19 17.5 L11 21.5 Z M54 10 L45 17.5 L53 21.5 Z';
/** Eyes and the cheek line. Fill them. */
export const FOX_FILL = 'M16 27 L27.5 29 L25 33 Z M48 27 L36.5 29 L39 33 Z M5 30 L32 50 L59 30 L59 33.5 L32 53.5 L5 33.5 Z';
export const FOX_STROKE = 3.2;
export const FOX_EAR_STROKE = 2.6;

/** Standalone SVG markup. `weight` thickens the lines for very small sizes (favicons). */
export const foxSvg = (color, attrs = '', weight = 1) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${FOX_VIEWBOX}" ${attrs}>` +
  `<path d="${FOX_OUTLINE}" fill="none" stroke="${color}" stroke-width="${FOX_STROKE * weight}" stroke-linejoin="miter" stroke-miterlimit="6"/>` +
  `<path d="${FOX_EARS}" fill="none" stroke="${color}" stroke-width="${FOX_EAR_STROKE * weight}" stroke-linejoin="miter"/>` +
  `<path d="${FOX_FILL}" fill="${color}"/></svg>`;

/** Draw the mark on a 2D canvas: (x, y) is the top-left of the 64-wide grid, w its width in pixels. */
export const drawFox = (ctx, x, y, w, color) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(w / 64, w / 64);
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineJoin = 'miter'; ctx.miterLimit = 6;
  ctx.lineWidth = FOX_STROKE; ctx.stroke(new Path2D(FOX_OUTLINE));
  ctx.lineWidth = FOX_EAR_STROKE; ctx.stroke(new Path2D(FOX_EARS));
  ctx.fill(new Path2D(FOX_FILL));
  ctx.restore();
};
