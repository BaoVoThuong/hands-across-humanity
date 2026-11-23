/**
 * POST /api/checkout — turns the donation panel's choices into an embedded
 * Stripe Checkout Session. The panel mounts Stripe's payment form in a dialog
 * on our own page with the returned client secret; card details are typed
 * into Stripe's iframe and never reach this server.
 *
 * Body:  { amount: number (USD), frequency: 'one-time' | 'monthly', focus?: GiftFocus }
 * Reply: 200 { clientSecret } | 200 { mockUrl } (STRIPE_MOCK) | 400/503/502 { error }
 *
 * This and checkout-status are the only routes that run on the server (Vercel
 * functions); every page is still prerendered.
 */
import type { APIRoute } from 'astro';
import type Stripe from 'stripe';
import {
  GIFT_FOCUSES,
  GIFT_FOCUS_NAMES,
  MAX_GIFT_USD,
  MIN_GIFT_USD,
  STRIPE_MOCK,
  type GiftFocus,
} from '../../lib/giving';
import { getStripe, json } from '../../lib/stripe-server';

export const prerender = false;

const ORG_NAME = 'Hands Across Humanity';

export const POST: APIRoute = async ({ request, url }) => {
  const client = getStripe();
  if (!client && !STRIPE_MOCK) return json(503, { error: 'Online giving is not connected yet.' });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'The request could not be read.' });
  }
  const input = (body ?? {}) as Record<string, unknown>;

  const amount = Number(input.amount);
  if (!Number.isFinite(amount) || amount < MIN_GIFT_USD || amount > MAX_GIFT_USD) {
    return json(400, {
      error: `Please choose an amount between $${MIN_GIFT_USD} and $${MAX_GIFT_USD.toLocaleString('en-US')}.`,
    });
  }
  const unitAmount = Math.round(amount * 100);
  const monthly = input.frequency === 'monthly';
  const focus: GiftFocus = GIFT_FOCUSES.includes(input.focus as GiftFocus)
    ? (input.focus as GiftFocus)
    : 'general';

  const metadata = {
    focus,
    focus_name: GIFT_FOCUS_NAMES[focus],
    frequency: monthly ? 'monthly' : 'one-time',
    source: 'website',
  };
  const description = focus === 'general'
    ? `${monthly ? 'Monthly gift' : 'Gift'} to ${ORG_NAME}`
    : `${monthly ? 'Monthly gift' : 'Gift'} to ${ORG_NAME}: ${GIFT_FOCUS_NAMES[focus]}`;

  // Where Stripe sends the donor once the payment completes (and back from
  // redirect-based payment methods). The thank-you page checks the session's
  // real status with this id before saying thank you.
  const returnUrl = `${url.origin}/donate/thank-you/?${monthly ? 'frequency=monthly&' : ''}session_id={CHECKOUT_SESSION_ID}`;

  if (STRIPE_MOCK || !client) {
    const mock = new URL('/api/mock-checkout', url.origin);
    mock.searchParams.set('amount', String(unitAmount / 100));
    mock.searchParams.set('frequency', metadata.frequency);
    mock.searchParams.set('focus', focus);
    mock.searchParams.set('return', returnUrl.replace('{CHECKOUT_SESSION_ID}', 'mock'));
    return json(200, { mockUrl: mock.toString() });
  }

  const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: unitAmount,
      product_data: { name: description },
      ...(monthly ? { recurring: { interval: 'month' as const } } : {}),
    },
  };
  const shared = {
    ui_mode: 'embedded_page' as const,
    return_url: returnUrl,
    line_items: [lineItem],
    metadata,
    // Gifts are in US dollars only. Adaptive Pricing would otherwise offer a
    // visitor abroad their local currency (with Stripe's conversion fee added).
    adaptive_pricing: { enabled: false },
    // Make Stripe's form read as part of this site: Signal Blue pay button,
    // a sans close to Public Sans, and the site's 8px corners.
    branding_settings: {
      button_color: '#0060AE',
      background_color: '#FFFFFF',
      font_family: 'inter' as const,
      border_style: 'rounded' as const,
    },
  };

  try {
    const session = await client.checkout.sessions.create(
      monthly
        ? { ...shared, mode: 'subscription', subscription_data: { description, metadata } }
        : { ...shared, mode: 'payment', submit_type: 'donate', payment_intent_data: { description, metadata } },
    );
    if (!session.client_secret) throw new Error('Stripe returned a session without a client secret.');
    return json(200, { clientSecret: session.client_secret });
  } catch (error) {
    console.error('[checkout] Stripe session failed:', error);
    return json(502, { error: 'Secure checkout could not be opened. Please try again in a moment.' });
  }
};

export const ALL: APIRoute = () => json(405, { error: 'Method not allowed.' });
