---
title: Common questions
description: Answers to frequent merchant questions about k4cart.
---

# Common questions

## Account & access

**I did not get a verification email.**
Check spam and promotions. Use "resend" on the verify screen. Confirm you typed the email correctly at sign-up.

**I forgot my password.**
Go to the sign-in page and tap **Forgot password?**. Enter your email and check your inbox for a reset link. The link expires after a short time — request a new one if needed.

## Store & subdomain

**The subdomain I want is taken.**
Choose another name or add a short word (city, brand initials). Rules: lowercase letters, numbers, hyphens; at least 3 characters. Availability is checked as you type.

**Can I use my own domain?**
Yes on **Growth** and **Scale**. You will need to add DNS records (TXT for ownership verification, CNAME or A records for routing). See [Domains](../settings/domains.md).

## Products & catalogue

**I cannot add more products.**
Launch allows **100 products**. Upgrade to Growth or Scale for unlimited products. See [Plans](../plans/overview.md).

**Customers cannot see my product.**
Check that the product is **Active**, has stock (or in-stock variants), and that you are viewing the correct storefront URL.

**How do I add products with sizes or colours?**
Enable **variants** when creating or editing a product. Define an option (e.g. Size) and its values (e.g. S, M, L). Each variant can have its own price, stock, and image. See [Products](../catalog/products.md).

## Payments

**The payments checklist step will not complete.**
The gateway must be fully connected and **active** under **Settings → Payments**, not only partially filled.

**What is Razorpay (Connect)?**
Razorpay (Connect) is a one-click OAuth connection method — no API keys to copy. It is the recommended way to connect if you were onboarded via a Razorpay Partner. See [Payments](../settings/payments.md).

**A customer paid but I do not see the money.**
Order payment and settlement are handled by **Razorpay**. Check the Razorpay dashboard for captures and settlements, and confirm webhooks are configured.

## Shipping

**Can I charge different rates for different states?**
Yes. Select **By State** as the pricing method under **Settings → Shipping**. You can set a rate per state and a fallback rate for unlisted states. See [Shipping](../settings/shipping.md).

**Can I block delivery to certain areas?**
Yes. When using **By State** or **By Pincode** pricing, leave the rate empty for any state or pincode range you do not serve. Customers from those areas will not be able to check out.

## Orders

**An order is stuck on Confirmed.**
Open the order and advance the status as you pack and ship. See [Order statuses](../orders/statuses.md).

**Can I cancel an order?**
Yes while it is Confirmed or Processing. Handle refunds through Razorpay when needed.

## Billing

**What happens when my trial ends?**
You need an active subscription to keep full access. Check **Settings → Billing**. Stores may become read-only if the subscription lapses.

## Still stuck?

[Contact support →](./contact.md)
