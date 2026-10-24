/**
 * Builds src/data/coverage-map.json: the coastline around Goole for the 150-mile coverage map.
 * Source: Natural Earth 1:10m land (public domain) via the world-atlas package.
 * Run: node scripts/build-coverage-map.mjs (only needed if the map bounds change).
 * Projection: equirectangular, longitude scaled by cos(53.7°) so distances are true near Goole.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { feature } from 'topojson-client';

const VIEW = { lonMin: -5.25, lonMax: 3.15, latMin: 51.2, latMax: 56.15 };
const LAT0 = 53.7, W = 800;
const cos = Math.cos((LAT0 * Math.PI) / 180);
const k = W / ((VIEW.lonMax - VIEW.lonMin) * cos);
const H = Math.round((VIEW.latMax - VIEW.latMin) * k);
const P = ([lon, lat]) => [(lon - VIEW.lonMin) * cos * k, (VIEW.latMax - lat) * k];

const topo = JSON.parse(readFileSync('node_modules/world-atlas/land-10m.json', 'utf8'));
const land = feature(topo, topo.objects.land);
const polys = land.geometry ? (land.geometry.type === 'Polygon' ? [land.geometry.coordinates] : land.geometry.coordinates) : land.features.flatMap((f) => (f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates));

const pad = 40, parts = [];
for (const poly of polys) for (const ring of poly) {
  const pts = ring.map(P);
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  if (Math.max(...xs) < -pad || Math.min(...xs) > W + pad || Math.max(...ys) < -pad || Math.min(...ys) > H + pad) continue;
  // clamp everything outside the (padded) frame onto its edge, then drop points closer than 1.6 px:
  // the fill stays correct inside the frame and the continent's far coastline costs nothing
  const clamp = ([x, y]) => [Math.min(W + pad, Math.max(-pad, x)), Math.min(H + pad, Math.max(-pad, y))];
  const out = [clamp(pts[0])];
  for (const raw of pts) { const p = clamp(raw), q = out[out.length - 1]; if (Math.hypot(p[0] - q[0], p[1] - q[1]) > 1.6) out.push(p); }
  if (out.length < 4) continue;
  parts.push('M' + out.map(([x, y]) => `${Math.round(x)} ${Math.round(y)}`).join('L') + 'Z');
}
mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/coverage-map.json', JSON.stringify({ source: 'Natural Earth 1:10m land, public domain', view: VIEW, lat0: LAT0, w: W, h: H, k, land: parts.join('') }));
console.log(`coverage map: ${W}x${H}, ${parts.length} rings, ${(parts.join('').length / 1024).toFixed(0)} KB`);
