/**
 * How someone can help, and whether online giving is actually connected.
 *
 * Every page used to say "Donate now", and every one of those buttons ended
 * at an email draft, because no giving platform is configured
 * (PUBLIC_DONATION_URL is empty). A button that promises a checkout the site
 * cannot complete spends the trust the rest of the site is building. Until the
 * URL is set, the label says what the page actually offers; setting it brings
 * "Donate now" back everywhere with no other change.
 *
 * Money is also one of four ways to take part, not the only one: the network
 * runs on donated goods, volunteers and partners.
 */
import { CONTACT_EMAIL } from './pages';

export const DONATION_URL = (import.meta.env.PUBLIC_DONATION_URL ?? '').trim();
export const DONATION_PLATFORM =
  (import.meta.env.PUBLIC_DONATION_PLATFORM ?? '').trim() || 'our secure giving partner';
export const GIVING_IS_LIVE = DONATION_URL.length > 0;
export const GIVE_LABEL = GIVING_IS_LIVE ? 'Donate now' : 'Ways to give';

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
