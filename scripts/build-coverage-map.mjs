/**
 * Builds src/data/coverage-map.json: the outline of Great Britain for the coverage map.
 * Source: Natural Earth 1:10m admin-0 countries (public domain) via the world-atlas package.
 * Only Great Britain is drawn (Northern Ireland, Ireland and the continent are left out to keep the map clean).
 * Run: node scripts/build-coverage-map.mjs (only needed if the map bounds change).
 * Projection: equirectangular, longitude scaled by cos(54.3°), so the coverage circle stays round.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { feature } from 'topojson-client';

const VIEW = { lonMin: -4.75, lonMax: 1.85, latMin: 51.55, latMax: 56.0 };
const LAT0 = 54.3, W = 560;
const cos = Math.cos((LAT0 * Math.PI) / 180);
const k = W / ((VIEW.lonMax - VIEW.lonMin) * cos);
const H = Math.round((VIEW.latMax - VIEW.latMin) * k);
const P = ([lon, lat]) => [(lon - VIEW.lonMin) * cos * k, (VIEW.latMax - lat) * k];

const topo = JSON.parse(readFileSync('node_modules/world-atlas/countries-10m.json', 'utf8'));
const uk = feature(topo, topo.objects.countries).features.find((f) => String(f.id) === '826');
const polys = uk.geometry.type === 'Polygon' ? [uk.geometry.coordinates] : uk.geometry.coordinates;

const parts = [];
for (const poly of polys) {
  const ring = poly[0];
  const lons = ring.map((p) => p[0]), lats = ring.map((p) => p[1]);
  if (Math.max(...lons) < -5.5 && Math.min(...lats) > 54 && Math.max(...lats) < 55.4) continue;   // Northern Ireland
  if (Math.min(...lats) > VIEW.latMax || Math.max(...lats) < VIEW.latMin) continue;               // far islands
  const pts = ring.map(P);
  const out = [pts[0]];
  for (const p of pts) { const q = out[out.length - 1]; if (Math.hypot(p[0] - q[0], p[1] - q[1]) > 1.1) out.push(p); }
  if (out.length < 5) continue;
  parts.push('M' + out.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L') + 'Z');
}
mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/coverage-map.json', JSON.stringify({ source: 'Natural Earth 1:10m admin-0, public domain', view: VIEW, lat0: LAT0, w: W, h: H, k, land: parts.join('') }));
console.log(`coverage map: ${W}x${H}, ${parts.length} rings, ${(parts.join('').length / 1024).toFixed(0)} KB`);
