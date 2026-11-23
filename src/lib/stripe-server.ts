/**
 * Server-only Stripe helpers shared by the API routes in src/pages/api/.
 * Never import this from a client <script>: it reads the secret key.
 */
import Stripe from 'stripe';

let stripe: Stripe | undefined;

/** The Stripe client, or undefined while STRIPE_SECRET_KEY is not set. */
export const getStripe = () => {
  const key = (import.meta.env.STRIPE_SECRET_KEY ?? '').trim();
  if (!key) return undefined;
  stripe ??= new Stripe(key);
  return stripe;
};

export const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
