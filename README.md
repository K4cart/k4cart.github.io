# k4cart Help Center

Documentation for k4cart merchants.

**Live:** https://k4cart.github.io

## Development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deployment

Automatically deploys to GitHub Pages on push to `main` via GitHub Actions.

## Screenshots

To capture documentation screenshots:

```bash
npx playwright install chromium
npm run screenshots
```

Requires environment variables (set in GitHub Secrets for CI):
- `K4CART_BASE_URL`
- `K4CART_DEMO_EMAIL`
- `K4CART_DEMO_PASSWORD`
- `K4CART_STOREFRONT`
