import type { ImageMetadata } from 'astro';
import {
  communityDistributionWide,
  communitySupportWide,
  educationRelief,
  healthSupplies,
  partnerShowcase,
} from '../assets/images/eps';

export interface PastEvent {
  title: string;
  image: ImageMetadata;
  alt: string;
  summary: string;
  date?: string;
  location?: string;
}

export interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
  summary: string;
}

export interface TakePartOption {
  title: string;
  body: string;
  href: string;
  linkText: string;
}

export const eventsPageContent = {
  eyebrow: 'Events',
  sections: [
    { id: 'top', label: 'Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'recent', label: 'Recent events' },
  ],
  title: 'Where the work actually happens.',
  lead: 'Distribution days, school kit handouts, and partner drives. See what is coming up and what the work has looked like so far.',
  description: 'See upcoming community activities and documentary stories of the donation work Hands Across Humanity carries out with volunteers and local partners.',
  image: communitySupportWide,
  imageAlt: 'Volunteers coordinating a community distribution event around donated supplies.',
  caption: 'Volunteers and partners preparing donated goods for community support.',
  secondaryHref: '/who-we-are/',
  secondaryLabel: 'Meet the network',
  heroSignals: [
    {
      title: 'Community distributions',
      text: 'Useful goods shared through welcoming local activities.',
    },
    {
      title: 'School and family support',
      text: 'Prepared essentials help children and families stay ready.',
    },
    {
      title: 'Partner supply drives',
      text: 'Businesses and neighbors turn available goods into support.',
    },
  ],
  upcoming: {
    eyebrow: 'What is next',
    title: 'Take part in the next one.',
    lead: 'No public dates are posted yet. There are still useful ways to help the next community activity take shape.',
    actionLabel: 'Get in touch',
  },
  takePartOptions: [
    {
      title: 'Contribute useful goods',
      body: 'Businesses, neighbors, and community groups can help gather health, hygiene, household, and education supplies.',
      href: '/what-we-do/',
      linkText: 'See what we collect',
    },
    {
      title: 'Help prepare and share',
      body: 'Volunteers help sort, organize, and share donated goods through community activities.',
      href: '/who-we-are/',
      linkText: 'Meet the network',
    },
    {
      title: 'Stay connected',
      body: 'Follow future activity updates as new community dates are confirmed.',
      href: '#footer',
      linkText: 'Get updates',
    },
  ],
  recent: {
    eyebrow: 'Recent activity',
    title: 'Donation work in the community.',
    lead: 'These moments show how useful goods, volunteers, and local relationships come together in practice.',
  },
  quote: '“Every community activity turns shared resources into practical support.”',
  nextHref: '/vision/',
  nextLabel: 'Read our vision',
};

export const upcomingEvents: UpcomingEvent[] = [];

export const pastEvents: PastEvent[] = [
  {
    title: 'Community distribution day',
    image: communityDistributionWide,
    alt: 'Volunteers and community members sharing donated goods at an indoor distribution event.',
    summary: 'Volunteers and local partners prepare useful goods and make them available through a welcoming community distribution.',
  },
  {
    title: 'School and learning kits',
    image: educationRelief,
    alt: 'Children holding prepared school and relief kits with community volunteers.',
    summary: 'School and child-focused supplies help families support learning when everyday life is disrupted.',
  },
  {
    title: 'Health and hygiene supplies',
    image: healthSupplies,
    alt: 'Health, hygiene, and essential supplies arranged for community distribution.',
    summary: 'Practical health, hygiene, and household goods are gathered so people can use what they need most.',
  },
  {
    title: 'Partner supply drive',
    image: partnerShowcase,
    alt: 'Partners and volunteers gathered behind a relief supply table.',
    summary: 'Partners and volunteers bring available goods together and help move them toward a clear community need.',
  },
];
