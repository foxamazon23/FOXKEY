import { chromium } from 'playwright-core';
const out = process.argv[2];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const shots = [
  ['desktop_home2', '/', { width: 1366, height: 900 }, false],
  ['desktop_makes', '/makes', { width: 1366, height: 900 }, false],
  ['mobile_home_vp', '/', { width: 390, height: 844 }, false],
  ['mobile_hgv_vp', '/hgv', { width: 390, height: 844 }, false],
  ['mobile_quote_vp', '/quote', { width: 390, height: 844 }, false],
];
for (const [name, path, vp] of shots) {
  const ctx = await browser.newContext({ viewport: vp });
  const page = await ctx.newPage();
  await page.goto('http://127.0.0.1:4321' + path, { waitUntil: 'networkidle' });
  await page.evaluate(() => { try { localStorage.setItem('foxkey-cookie-notice','1'); } catch {} });
  await page.reload({ waitUntil: 'networkidle' });
  if (name === 'mobile_home_vp') { await page.click('#nav-toggle'); }
  await page.screenshot({ path: `${out}/${name}.png` });
  await ctx.close();
}
await browser.close();
