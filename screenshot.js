const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2];
  const file = process.argv[3];

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({ path: file, fullPage: true });
  await browser.close();
})();
