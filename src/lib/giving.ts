/**
 * How someone can help, and whether online giving is actually connected.
 *
 * Online gifts go through embedded Stripe Checkout (src/pages/api/checkout.ts).
 * Until both Stripe keys are set in the build environment, the donate button opens
 * an email instead and the label says "Ways to give": a button that promises a
 * checkout the site cannot complete spends the trust the rest of the site is
 * building. Setting the key and redeploying brings "Donate now" back
 * everywhere with no other change.
 *
 * This module is read only in page frontmatter at build time. Never import it
 * from a client <script>: the key check must stay on the server side.
 *
 * Money is also one of four ways to take part, not the only one: the network
 * runs on donated goods, volunteers and partners.
 */
import { CONTACT_EMAIL } from './pages';

/**
 * STRIPE_MOCK=1 (dev server only) swaps Stripe for a local fake checkout page
 * (src/pages/api/mock-checkout.ts) so the whole flow can be clicked through
 * before a Stripe account exists. A production build ignores it.
 */
export const STRIPE_MOCK = import.meta.env.DEV && (import.meta.env.STRIPE_MOCK ?? '').trim() === '1';
/** Publishable key (pk_test_… / pk_live_…). Public by design: Stripe.js needs it in the browser. */
export const STRIPE_PUBLISHABLE_KEY = (import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '').trim();
/** The embedded form needs both halves of the key pair. */
export const GIVING_IS_LIVE = STRIPE_MOCK
  || ((import.meta.env.STRIPE_SECRET_KEY ?? '').trim().length > 0 && STRIPE_PUBLISHABLE_KEY.length > 0);
export const GIVE_LABEL = GIVING_IS_LIVE ? 'Donate now' : 'Ways to give';

/**
 * Optional Stripe customer-portal login link (Stripe Dashboard → Settings →
 * Billing → Customer portal). When set, monthly donors get a self-serve link to
 * update their card or cancel; otherwise they are pointed to email.
 */
export const DONOR_PORTAL_URL = (import.meta.env.PUBLIC_STRIPE_PORTAL_URL ?? '').trim();

/** Gift bounds in whole US dollars, shared by the form and the checkout API. */
export const MIN_GIFT_USD = 1;
export const MAX_GIFT_USD = 10_000;

export const GIFT_FOCUSES = ['general', 'education', 'health', 'community'] as const;
export type GiftFocus = (typeof GIFT_FOCUSES)[number];
export const GIFT_FOCUS_NAMES: Record<GiftFocus, string> = {
  general: 'Community support',
  education: 'Education & family',
  health: 'Health & household',
  community: 'Community care',
};

const email = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export type WayKey = 'goods' | 'volunteer' | 'partner' | 'money';

export interface WayToHelp {
  key: WayKey;
  title: string;
  text: string;
  href: string;
  action: string;
}

export const WAYS_TO_HELP: WayToHelp[] = [
  {
    key: 'goods',
    title: 'Give goods',
    text: 'Businesses and neighbors can pass on useful products instead of leaving them unused.',
    href: email('Giving goods'),
    action: 'Email us about goods',
  },
  {
    key: 'volunteer',
    title: 'Volunteer',
    text: 'Help sort, prepare, and share goods at community events.',
    href: '/events/#upcoming',
    action: 'Choose an upcoming event',
  },
  {
    key: 'partner',
    title: 'Partner with us',
    text: 'Businesses, faith communities, nonprofits, and local leaders bring goods, space, and trust.',
    href: email('Partnership'),
    action: 'Email us to partner',
  },
  {
    key: 'money',
    title: 'Give money',
    text: 'A financial gift supports the work of gathering, preparing, and sharing goods.',
    href: '/donate/',
    action: GIVE_LABEL,
  },
];
