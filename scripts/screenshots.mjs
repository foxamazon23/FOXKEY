import { chromium } from 'playwright-core';
const out = process.argv[2] ?? 'shots';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const pages = ['/', '/hgv', '/prices', '/quote', '/areas/goole', '/contact', '/faq'];
for (const [name, vp] of Object.entries({ desktop: { width: 1366, height: 900 }, mobile: { width: 390, height: 844 } })) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto('http://127.0.0.1:4321' + p, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${out}/${name}${p.replace(/\//g, '_') || '_home'}.png`, fullPage: name === 'desktop' ? false : true });
  }
  await ctx.close();
}
await browser.close();
