import { chromium } from 'playwright-core';
const [out, ...jobs] = process.argv.slice(2); // jobs: path@scrollY
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, hasTouch: true, isMobile: true });
await ctx.addInitScript(() => { try { localStorage.setItem('foxkey-cookie-notice', '1'); } catch {} });
const page = await ctx.newPage();
for (const j of jobs) {
  const [p, y = '0', action] = j.split('@');
  await page.goto('http://127.0.0.1:4321' + p, { waitUntil: 'networkidle' });
  if (action === 'submit') {
    await page.evaluate(() => { const b = document.querySelector('form button[type=submit]'); b.disabled = false; });
    await page.click('form button[type=submit]');
  }
  if (y.startsWith('#')) await page.evaluate((sel) => document.querySelector(sel).scrollIntoView(), y);
  else await page.evaluate((v) => scrollTo(0, +v), y);
  await page.waitForTimeout(300);
  const name = `${p === '/' ? 'home' : p.slice(1).replace(/\//g, '_')}-${y.replace('#', '')}${action ? '-' + action : ''}`;
  await page.screenshot({ path: `${out}/m-${name}.png` });
  console.log(name);
}
await browser.close();
