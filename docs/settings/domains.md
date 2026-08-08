---
title: Domains
description: Free k4cart subdomain and custom domain setup.
---

# Domains

**Where:** **Settings → Domains**

![Domains on mobile](/img/screenshots/settings-domains.png)

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

## Custom domain (Growth and Scale)

On **Growth** or **Scale**, you can use your own domain (e.g. `www.yourbrand.com` or `shop.yourbrand.com`).

### High-level steps

1. Open **Settings → Domains**.  
2. Enter your custom domain.  
3. Follow the on-screen DNS instructions (you will add records at your domain provider, such as GoDaddy, Cloudflare, or Google Domains).  
4. Tap **Verify** when DNS is ready. Status moves from pending to **Verified** when checks pass.

:::tip DNS timing
DNS changes can take from a few minutes to several hours. If verification fails, wait and try again after records have propagated.
:::

### Apex vs www

If you use a root domain (like `yourbrand.com`) versus `www.yourbrand.com`, follow the exact record types shown in the dashboard — they can differ.

## Launch plan note

Custom domains require **Growth** or higher. You can still sell on `*.k4cart.com` on Launch. See [Plans & limits](../plans/overview.md).
