---
title: Domains
description: Free k4cart subdomain and custom domain setup with DNS verification.
---

# Domains

**Where:** **Settings → Domains**

![Domains on mobile](/img/screenshots/settings-domains.png)

## Default storefront URL

Your store is always accessible at its default URL regardless of domain settings:

```text
https://app.k4cart.com/store/your-store-id
```

## Free subdomain

Every store gets a free address:

```text
https://your-subdomain.k4cart.com
```

You chose this when creating the store. You can change the subdomain later from **Settings → Domains** (subject to availability and naming rules).

### Subdomain rules

- At least 3 characters
- Lowercase letters, numbers, and hyphens only
- Cannot start or end with a hyphen
- Some names are reserved and cannot be used

Availability is checked as you type — wait for confirmation that the name is free before saving.

## Custom domain (Growth and Scale)

On **Growth** or **Scale**, you can use your own domain (e.g. `www.yourbrand.com` or `shop.yourbrand.com`).

### High-level steps

1. Open **Settings → Domains**.
2. Enter your custom domain (e.g. `www.yourbrand.com`).
3. Save. k4cart generates the DNS records you need.
4. Add the DNS records at your domain provider (GoDaddy, Cloudflare, Google Domains, etc.).
5. Tap **Verify** when DNS is ready. Status moves from pending to **Verified** when checks pass.

### DNS verification — two steps

k4cart verifies your domain in two steps:

**Step 1 — Prove ownership (TXT record)**

Add a TXT record to prove you control the domain:

| Type | Name | Value |
|------|------|-------|
| TXT | `_k4cart-verify` | `k4cart-verify=your-token` |

The exact token is shown in your dashboard after you save the custom domain.

**Step 2 — Route traffic (CNAME or A record)**

Add a routing record so visitors reach your store:

- **Subdomain** (e.g. `www.yourbrand.com` or `shop.yourbrand.com`): Add a **CNAME** record pointing to `k4cart.com`.
- **Apex/root domain** (e.g. `yourbrand.com`): Apex domains cannot use CNAME. Add **A records** pointing to the IP addresses shown in your dashboard.

:::tip DNS timing
DNS changes can take from a few minutes to several hours. If verification fails, wait and try again after records have propagated.
:::

### Apex vs www

If you use a root domain (like `yourbrand.com`) versus `www.yourbrand.com`, the DNS record types differ:

| Domain type | Record type | Example |
|-------------|-------------|---------|
| Subdomain (`www.yourbrand.com`) | CNAME | Points to `k4cart.com` |
| Apex (`yourbrand.com`) | A records | Points to k4cart IP addresses |

Follow the exact record types shown in the dashboard — they are tailored to your domain.

### Domain status

| Status | Meaning |
|--------|---------|
| **Pending verification** | Domain saved, DNS records not yet verified. |
| **Verified** | Both ownership and routing confirmed. Your store is live on this domain. |
| **Not verified** | Verification failed. Check DNS records and try again. |

### Removing a custom domain

You can remove a custom domain at any time. Customers will no longer reach your store at that address. Your free `*.k4cart.com` subdomain continues to work.

## Launch plan note

Custom domains require **Growth** or higher. You can still sell on `*.k4cart.com` on Launch. See [Plans & limits](../plans/overview.md).
