---
title: 2. Connect payments
description: Connect your Razorpay account so customer payments settle to you.
---

# 2. Connect payments

**Where:** **Settings → Payments** (or **Connect a payment method** on Home)

![Payments settings on mobile](/img/screenshots/settings-payments.png)

Customer payments settle **directly to your own Razorpay account**. k4cart does not take a cut of order value as a platform fee; Razorpay's normal gateway charges still apply under your Razorpay agreement.

## What you need

- A **Razorpay** business account (k4cart can assist with account creation and KYC if you are new to Razorpay)

## Connection methods

k4cart offers two ways to connect:

### Razorpay (Connect) — Recommended

One-click connection with no API keys to copy. Best for sub-merchants onboarded via a Razorpay Partner.

1. Open **Settings → Payments**.
2. Select **Razorpay (Connect)**.
3. Tap **Connect with Razorpay**.
4. Authorise the connection on Razorpay's page.
5. You return to k4cart with the connection active.

### Razorpay (API Keys)

Manual setup for merchants who already have their own Razorpay account and API keys.

1. Open **Settings → Payments**.
2. Select **Razorpay (API Keys)**.
3. Enter:
   - **Key ID** (starts like `rzp_live_…` for live mode)
   - **Key Secret**
   - **Webhook Secret**
4. In Razorpay, create a webhook that points to the **webhook URL shown on this k4cart page**, and use the same secret you entered.
5. Save / activate the connection in k4cart.

:::tip Live vs test keys
For real customers, use **live** keys from Razorpay. Test keys are only for practice and will not take real money.
:::

When the connection is active, the Home checklist marks this step complete.

## What customers can pay with

Through Razorpay, customers typically use UPI, cards, net banking, and wallets (depending on your Razorpay settings).

## Troubleshooting

| Issue | What to try |
|-------|-------------|
| Step still incomplete on Home | Confirm the gateway is **active**, not only partially filled. |
| Payment fails at checkout | Check live keys, webhook URL, and that Razorpay account KYC is complete. |
| Money not arriving | Confirm settlements in the **Razorpay** dashboard (not only k4cart). |
| OAuth connection expired | Disconnect and reconnect via **Settings → Payments**. |

## Next step

[3. Set up shipping →](./setup-shipping.md)
