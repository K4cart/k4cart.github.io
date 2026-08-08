---
title: 3. Set up shipping
description: Enable delivery pricing with flat, per-state, or per-pincode rates and optional free shipping.
---

# 3. Set up shipping

**Where:** **Settings → Shipping** (or **Set up shipping** on Home)

![Shipping settings on mobile](/img/screenshots/settings-shipping.png)

Shipping settings control what customers pay for delivery at checkout.

## Choose a pricing method

k4cart supports three delivery pricing methods. Pick the one that matches how you ship:

| Method | Best for |
|--------|----------|
| **Flat Rate** | Simple setup — one delivery fee for all orders. |
| **By State** | Different rates for different Indian states. |
| **By Pincode** | Fine-grained control — different rates for different pincode ranges. |

## Quick setup (Flat Rate)

1. Open **Settings → Shipping**.  
2. Turn **Charge for delivery** on.  
3. Select **Flat Rate** as the pricing method.  
4. Enter a **flat rate** in ₹ — the delivery fee for orders (use `0` for free delivery always).  
5. Optionally set a **free shipping threshold** — when the cart reaches this amount, delivery becomes free (e.g. free shipping above ₹999).  
6. Save.

## Advanced setup (By State or By Pincode)

### By State

1. Select **By State** as the pricing method.  
2. Add a rate for each state you ship to. Leave a state's rate empty to block deliveries there.  
3. Set an **Other states rate** for states you haven't listed. Leave it empty to block unlisted states.  
4. Optionally set a free shipping threshold.  
5. Save.

### By Pincode

1. Select **By Pincode** as the pricing method.  
2. Add pincode ranges (e.g. `400001`–`400099`) with a rate for each. Ranges cannot overlap.  
3. Set an **Other pincodes rate** for pincodes outside your listed ranges. Leave it empty to block them.  
4. Optionally set a free shipping threshold.  
5. Save.

## Examples

| Goal | Method | Configuration |
|------|--------|---------------|
| Always ₹50 delivery | Flat Rate | Rate: `50`, no threshold |
| Free delivery over ₹1,500 | Flat Rate | Rate: `80`, threshold: `1500` |
| Free delivery for everyone | Flat Rate | Rate: `0` |
| ₹60 in Maharashtra, ₹100 elsewhere | By State | Maharashtra: `60`, Other states: `100` |
| Only ship to Mumbai pincodes | By Pincode | Range `400001`–`400099`: `40`, Other pincodes: empty |

## Checklist complete when

Shipping is **enabled** for the store.

## Next step

[4. Business & legal details →](./business-details.md)
