---
title: Payments
description: Connect and manage your Razorpay payment method.
---

# Payments

**Where:** **Settings → Payments**

![Payments on mobile](/img/screenshots/settings-payments.png)

Connect the gateway customers use at checkout. Funds settle to **your** Razorpay account.

## Connection methods

k4cart offers two ways to connect Razorpay:

| Method | How it works | Best for |
|--------|-------------|----------|
| **Razorpay (Connect)** | One-click OAuth connection — no API keys to copy. | Sub-merchants onboarded via a Razorpay Partner. **Recommended.** |
| **Razorpay (API Keys)** | Manually paste Key ID, Key Secret, and Webhook Secret from your Razorpay Dashboard. | Merchants who already have their own Razorpay account and API keys. |

## Connect with Razorpay (Connect) — Recommended

1. Open **Settings → Payments**.  
2. Select **Razorpay (Connect)**.  
3. Tap **Connect with Razorpay**.  
4. You are redirected to Razorpay to authorise the connection.  
5. After authorising, you return to k4cart and the connection is active.

No API keys or webhook configuration needed — k4cart handles this automatically.

## Connect with Razorpay (API Keys)

1. Open **Settings → Payments**.  
2. Select **Razorpay (API Keys)**.  
3. Enter **Key ID**, **Key Secret**, and **Webhook Secret** from your Razorpay Dashboard.  
4. Configure the webhook in Razorpay using the URL displayed in k4cart.  
5. Save and confirm the connection is **active**.

Full first-time walkthrough: [Connect payments](../go-live/connect-payments.md).

## Important points

- k4cart subscription fees are separate from customer order payments.  
- Gateway fees are between you and Razorpay.  
- Keep keys private; never share them in screenshots or with untrusted people.  
- Use **live** keys for real sales.

## If payments stop working

1. Check Razorpay account status and KYC.  
2. If using API keys, confirm keys were not rotated without updating k4cart.  
3. If using API keys, confirm the webhook still points to the URL shown in k4cart.  
4. If using Razorpay (Connect), try disconnecting and reconnecting.  
5. Contact [support@k4cart.com](mailto:support@k4cart.com) if the dashboard and Razorpay both look correct.
