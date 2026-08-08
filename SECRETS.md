# GitHub Secrets Setup

The following secrets have been configured in the repository for use with GitHub Actions:

## Current Secrets

- `K4CART_BASE_URL` - Base URL of the k4cart application
- `K4CART_DEMO_EMAIL` - Demo account email for screenshots
- `K4CART_DEMO_PASSWORD` - Demo account password for screenshots
- `K4CART_STOREFRONT` - Demo storefront URL

## Updating Secrets

To update any secret, use the GitHub CLI:

```bash
gh secret set SECRET_NAME --body "new-value" --repo K4cart/k4cart.github.io
```

Or via the GitHub web interface:
1. Go to https://github.com/K4cart/k4cart.github.io/settings/secrets/actions
2. Click on the secret name to update
3. Enter the new value and click "Update secret"

## Using Secrets in Workflows

Secrets are automatically available in GitHub Actions workflows as environment variables:

```yaml
- name: Run screenshots
  env:
    K4CART_BASE_URL: ${{ secrets.K4CART_BASE_URL }}
    K4CART_DEMO_EMAIL: ${{ secrets.K4CART_DEMO_EMAIL }}
    K4CART_DEMO_PASSWORD: ${{ secrets.K4CART_DEMO_PASSWORD }}
    K4CART_STOREFRONT: ${{ secrets.K4CART_STOREFRONT }}
  run: npm run screenshots
```

## Local Development

For local development, create a `.env.local` file (gitignored) with:

```bash
K4CART_BASE_URL=https://k4cart.com
K4CART_DEMO_EMAIL=your-email
K4CART_DEMO_PASSWORD=your-password
K4CART_STOREFRONT=https://your-storefront-url
```
