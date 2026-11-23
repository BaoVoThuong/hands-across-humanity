/**
 * GET /api/mock-checkout — a stand-in for Stripe's embedded payment form, used
 * only when STRIPE_MOCK=1 on the dev server (see src/lib/giving.ts). The
 * donation dialog loads it in an iframe where the real form would mount, so
 * the whole flow can be clicked through before a Stripe account exists.
 * "Pay" sends the top window to the return URL, as Stripe does on completion;
 * closing the dialog is the cancel path, as with the real form.
 *
 * Anywhere else (production, or the flag off) it is a 404.
 */
import type { APIRoute } from 'astro';
import { GIFT_FOCUS_NAMES, STRIPE_MOCK, type GiftFocus } from '../../lib/giving';

export const prerender = false;

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const GET: APIRoute = ({ url }) => {
  if (!STRIPE_MOCK) return new Response('Not found', { status: 404 });

  // Only ever send the visitor back to this same site.
  let returnTo = '/donate/thank-you/?session_id=mock';
  try {
    const target = new URL(url.searchParams.get('return') ?? '', url.origin);
    if (url.searchParams.get('return') && target.origin === url.origin) returnTo = target.toString();
  } catch {
    /* keep the default */
  }

  const amount = Number(url.searchParams.get('amount')) || 0;
  const monthly = url.searchParams.get('frequency') === 'monthly';
  const focusName = GIFT_FOCUS_NAMES[url.searchParams.get('focus') as GiftFocus] ?? GIFT_FOCUS_NAMES.general;
  const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Mock checkout (test mode)</title>
<style>
  body { margin: 0; padding: 20px; color: #1a1f36; background: #fff; font: 15px/1.5 system-ui, -apple-system, sans-serif; }
  .badge { display: inline-block; background: #ffde92; color: #5c3b00; font-size: 11px; font-weight: 700;
           letter-spacing: .06em; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; }
  .amount { font-size: 30px; font-weight: 700; margin: 12px 0 2px; }
  .amount small { font-size: 15px; font-weight: 500; color: #697386; }
  .meta { color: #697386; font-size: 13px; margin: 0 0 18px; }
  label { display: block; font-size: 13px; color: #30313d; margin: 10px 0 4px; }
  .field { border: 1px solid #e0e0e6; border-radius: 6px; padding: 10px 12px; color: #a3acb9; background: #fafafb; }
  .row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  a { display: block; margin-top: 20px; text-align: center; padding: 12px; border-radius: 6px; font-weight: 600;
      text-decoration: none; background: #635bff; color: #fff; }
  p.note { font-size: 12px; color: #697386; margin: 14px 0 0; }
</style>
</head>
<body>
  <span class="badge">Test mode · mock form</span>
  <p class="amount">${escape(money)}${monthly ? ' <small>per month</small>' : ''}</p>
  <p class="meta">${escape(focusName)} · ${monthly ? 'subscription' : 'one-time payment'}</p>
  <label>Email</label><div class="field">donor@example.com</div>
  <label>Card information</label><div class="field">4242 4242 4242 4242</div>
  <div class="row"><div class="field">MM / YY</div><div class="field">CVC</div></div>
  <a href="${escape(returnTo)}" target="_top">${monthly ? 'Simulate subscribe' : 'Simulate donate'}</a>
  <p class="note">Placeholder for Stripe's embedded form (STRIPE_MOCK=1). Nothing here is typed, sent or charged. Close the dialog to test cancelling.</p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });
};
