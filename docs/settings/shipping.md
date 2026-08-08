---
title: Shipping
description: Delivery pricing — flat rate, per-state, or per-pincode rates with free-shipping thresholds.
---

# Shipping

**Where:** **Settings → Shipping**

![Shipping on mobile](/img/screenshots/settings-shipping.png)

Shipping settings control what customers pay for delivery at checkout. You choose **one** pricing method at a time.

## Enable or disable

Turn **Charge for delivery** on to apply delivery pricing. When off, delivery is free on every order.

## Pricing methods

Select one of three methods:

| Method | How it works |
|--------|-------------|
| **Flat Rate** | One delivery fee for every order. |
| **By State** | A different rate per Indian state, with a fallback rate for unlisted states. |
| **By Pincode** | A different rate per pincode range, with a fallback rate for unlisted pincodes. |

### Flat Rate

Enter a single **Flat Rate** in ₹. Use `0` for free delivery on all orders.

### By State

Set a delivery rate for each Indian state you ship to. For each state, you can:

- Enter a rate in ₹
- Leave the rate empty to mark that state as **not serviceable** (customers there cannot check out)

Set an **Other states rate** as a fallback for any state you have not listed individually. Leave it empty to block checkout from unlisted states.

### By Pincode

Define **pincode ranges** (e.g. `400001`–`400099`) with a rate for each range. Pincodes must be exactly 6 digits. Ranges cannot overlap.

Set an **Other pincodes rate** as a fallback for pincodes outside every listed range. Leave it empty to block checkout from those pincodes.

## Free shipping threshold

Optionally set a **Free shipping threshold** — a cart total above which delivery becomes free. This works on top of any pricing method. For example, free shipping above ₹999.

:::tip
The free shipping threshold applies regardless of which pricing method you use. Even if a state or pincode has a rate, orders above the threshold get free delivery.
:::

## What customers see

- **Flat Rate**: The delivery fee is shown at checkout.
- **By State / By Pincode**: The delivery fee is calculated after the customer enters their delivery address. If their state or pincode is not serviceable, checkout is blocked with a message.

Save after changes. Customers see updated rates on the next checkout.

First-time setup: [Set up shipping](../go-live/setup-shipping.md).
