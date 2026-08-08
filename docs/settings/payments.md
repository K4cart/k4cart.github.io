---
title: Payments
description: Connect and manage your Razorpay payment method.
---

# Payments

**Where:** **Settings → Payments**

![Payments on mobile](/img/screenshots/settings-payments.png)

Connect the gateway customers use at checkout. Funds settle to **your** Razorpay account.

## Connect or update Razorpay

1. Open **Settings → Payments**.  
2. Select **Razorpay**.  
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
2. Confirm keys were not rotated without updating k4cart.  
3. Confirm the webhook still points to the URL shown in k4cart.  
4. Contact [support@k4cart.com](mailto:support@k4cart.com) if the dashboard and Razorpay both look correct.
