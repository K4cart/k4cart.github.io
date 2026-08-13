/**
 * Capture mobile screenshots from demo account.
 * Usage: npm run screenshots
 *
 * Requires environment variables:
 * - K4CART_BASE_URL
 * - K4CART_DEMO_EMAIL
 * - K4CART_DEMO_PASSWORD
 * - K4CART_STOREFRONT
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'static', 'img', 'screenshots');

const BASE = process.env.K4CART_BASE_URL;
const EMAIL = process.env.K4CART_DEMO_EMAIL;
const PASSWORD = process.env.K4CART_DEMO_PASSWORD;
const STOREFRONT = process.env.K4CART_STOREFRONT;

if (!BASE || !EMAIL || !PASSWORD || !STOREFRONT) {
  console.error('Error: Missing required environment variables');
  console.error('Required: K4CART_BASE_URL, K4CART_DEMO_EMAIL, K4CART_DEMO_PASSWORD, K4CART_STOREFRONT');
  process.exit(1);
}

const VIEWPORT = { width: 390, height: 844 };

async function shot(page, name) {
  const file = path.join(OUT, `${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log('saved', name);
}

async function main() {
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  page.setDefaultTimeout(45000);

  // ── Marketing / auth ─────────────────────────────────────────────
  await page.goto(`${BASE}/#pricing`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const pricing = page.locator('#pricing');
  if (await pricing.count()) {
    await pricing.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await pricing.screenshot({
      path: path.join(OUT, 'marketing-pricing.png'),
    });
    console.log('saved', 'marketing-pricing');
  } else {
    await shot(page, 'marketing-pricing');
  }

  await page.goto(`${BASE}/sign-in`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await shot(page, 'sign-in');

  await page.goto(`${BASE}/sign-up`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await shot(page, 'sign-up');

  // ── Sign in ──────────────────────────────────────────────────────
  await page.goto(`${BASE}/sign-in`, { waitUntil: 'networkidle' });
  // Better Auth / form fields — try common selectors
  const emailSel =
    'input[type="email"], input[name="email"], input[autocomplete="email"]';
  const passSel =
    'input[type="password"], input[name="password"], input[autocomplete="current-password"]';
  await page.locator(emailSel).first().fill(EMAIL);
  await page.locator(passSel).first().fill(PASSWORD);
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => null),
    page.locator('button[type="submit"]').first().click(),
  ]);
  await page.waitForTimeout(2000);

  // Land on manage-store
  const url = page.url();
  console.log('after login:', url);

  // All stores / pick first store
  if (url.includes('/manage-store/all') || url.endsWith('/manage-store')) {
    await shot(page, 'all-stores');
    // Click first store card/link into a store
    const storeLink = page.locator('a[href*="/manage-store/"]').filter({ hasNotText: /all/i }).first();
    if (await storeLink.count()) {
      await storeLink.click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1500);
    }
  }

  // Store overview
  await page.waitForTimeout(1000);
  await shot(page, 'overview-home');

  // Detect store id from URL
  const m = page.url().match(/\/manage-store\/([^/]+)/);
  const storeId = m?.[1];
  if (!storeId || storeId === 'all') {
    console.warn('Could not resolve store id; capturing storefront only.');
  } else {
    const root = `${BASE}/manage-store/${storeId}`;

    await page.goto(`${root}/products`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await shot(page, 'products-list');

    await page.goto(`${root}/products/new`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await shot(page, 'products-new');

    await page.goto(`${root}/orders`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await shot(page, 'orders-list');

    // First order detail if any
    const orderLink = page.locator(`a[href*="/manage-store/${storeId}/orders/"]`).first();
    if (await orderLink.count()) {
      await orderLink.click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(800);
      await shot(page, 'order-detail');
    }

    await page.goto(`${root}/categories`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'categories');

    await page.goto(`${root}/collections`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'collections');

    await page.goto(`${root}/settings`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'settings-general');

    await page.goto(`${root}/settings/appearance`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'settings-appearance');

    await page.goto(`${root}/settings/domains`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'settings-domains');

    await page.goto(`${root}/settings/payment`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'settings-payments');

    await page.goto(`${root}/settings/shipping`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'settings-shipping');

    await page.goto(`${root}/settings/policies`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'settings-policies');

    await page.goto(`${root}/settings/billing`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await shot(page, 'settings-billing');
  }

  // Storefront customer view
  await page.goto(STOREFRONT, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await shot(page, 'storefront-home');

  await browser.close();
  console.log('Done. Screenshots in', OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
