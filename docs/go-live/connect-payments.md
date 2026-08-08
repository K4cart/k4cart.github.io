---
title: 2. Connect payments
description: Connect your Razorpay account so customer payments settle to you.
---

# 2. Connect payments

**Where:** **Settings → Payments** (or **Connect a payment method** on Home)

![Payments settings on mobile](/img/screenshots/settings-payments.png)

Customer payments settle **directly to your own Razorpay account**. k4cart does not take a cut of order value as a platform fee; Razorpay’s normal gateway charges still apply under your Razorpay agreement.

## What you need

- A **Razorpay** business account (k4cart can assist with account creation and KYC if you are new to Razorpay)  
- From the Razorpay Dashboard: **Key ID**, **Key Secret**, and a **Webhook Secret**  

:::tip Live vs test keys
For real customers, use **live** keys from Razorpay. Test keys are only for practice and will not take real money.
:::

## Connect Razorpay in k4cart

1. Open **Settings → Payments**.  
2. Choose **Razorpay**.  
3. Enter:
   - **Key ID** (starts like `rzp_live_…` for live mode)  
   - **Key Secret**  
   - **Webhook Secret**  
4. In Razorpay, create a webhook that points to the **webhook URL shown on this k4cart page**, and use the same secret you entered.  
5. Save / activate the connection in k4cart.

When the connection is active, the Home checklist marks this step complete.

## What customers can pay with

Through Razorpay, customers typically use UPI, cards, net banking, and wallets (depending on your Razorpay settings).

## Troubleshooting

| Issue | What to try |
|-------|-------------|
| Step still incomplete on Home | Confirm the gateway is **active**, not only partially filled. |
| Payment fails at checkout | Check live keys, webhook URL, and that Razorpay account KYC is complete. |
| Money not arriving | Confirm settlements in the **Razorpay** dashboard (not only k4cart). |

## Next step

[3. Set up shipping →](./setup-shipping.md)
