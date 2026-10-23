import { chromium } from 'playwright-core';
const [out, w = '1366', ...paths] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await browser.newContext({ viewport: { width: +w, height: 900 } });
await ctx.addInitScript(() => { try { localStorage.setItem('foxkey-cookie-notice', '1'); } catch {} });
const page = await ctx.newPage();
const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
for (const p of paths) {
  await page.goto('http://127.0.0.1:4321' + p, { waitUntil: 'networkidle' });
  const name = (p === '/' ? 'home' : p.slice(1).replace(/\//g, '_')) + '-' + w;
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
  const h = await page.evaluate(() => [document.documentElement.scrollWidth, innerWidth, document.body.scrollHeight]);
  console.log(name, 'scrollW/innerW/height', h.join('/'));
}
console.log('console errors:', errors.length ? errors : 'none');
await browser.close();
