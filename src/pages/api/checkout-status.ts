/**
 * GET /api/checkout-status?session_id=cs_… — lets the thank-you page confirm
 * that a Checkout Session really completed before it says thank you. Returns
 * only what that page needs, never donor details.
 *
 * Reply: 200 { status: 'complete' | 'open' | 'expired', monthly: boolean } | 400/404/503 { error }
 */
import type { APIRoute } from 'astro';
import { STRIPE_MOCK } from '../../lib/giving';
import { getStripe, json } from '../../lib/stripe-server';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const sessionId = url.searchParams.get('session_id') ?? '';

  if (STRIPE_MOCK && sessionId === 'mock') {
    return json(200, { status: 'complete', monthly: url.searchParams.get('frequency') === 'monthly' });
  }

  const client = getStripe();
  if (!client) return json(503, { error: 'Online giving is not connected yet.' });
  if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(sessionId)) return json(400, { error: 'Unknown session.' });

  try {
    const session = await client.checkout.sessions.retrieve(sessionId);
    return json(200, { status: session.status ?? 'open', monthly: session.mode === 'subscription' });
  } catch (error) {
    console.error('[checkout-status] lookup failed:', error);
    return json(404, { error: 'Unknown session.' });
  }
};
