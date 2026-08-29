import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://no-quiet-nights.vercel.app";

export const metadata: Metadata = {
  title: "Hospitality Marketing Insights | No Quiet Nights",
  description: "Practical UK hospitality marketing buyer guides covering restaurant, pub, bar, drinks brand, SEO, paid media, CRM, websites and agency costs.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Hospitality Marketing Insights | No Quiet Nights",
    description: "Commercial buyer guides for UK restaurants, pubs, bars and drinks brands.",
    url: "/insights",
    type: "website",
  },
};

const groups = [
  {
    title: "Restaurant marketing",
    href: "/restaurants",
    guides: [
      ["Restaurant marketing agency cost UK", "/insights/restaurant-marketing-agency-cost-uk"],
      ["Is a restaurant marketing agency worth it?", "/insights/is-a-restaurant-marketing-agency-worth-it"],
      ["How to choose a restaurant marketing agency", "/insights/how-to-choose-a-restaurant-marketing-agency"],
      ["Restaurant agency vs freelancer", "/insights/restaurant-marketing-agency-vs-freelancer"],
      ["Restaurant agency vs in-house", "/insights/restaurant-marketing-agency-vs-in-house"],
      ["Restaurant specialist vs generalist agency", "/insights/restaurant-marketing-agency-specialist-vs-generalist"],
      ["Restaurant SEO cost UK", "/insights/restaurant-seo-cost-uk"],
      ["Restaurant social media management cost UK", "/insights/restaurant-social-media-management-cost-uk"],
      ["How much should a restaurant spend on marketing?", "/insights/how-much-should-restaurant-spend-on-marketing-uk"],
      ["Google Ads vs Meta Ads for restaurants", "/insights/google-ads-vs-meta-ads-restaurants"],
    ],
  },
  {
    title: "Pub and bar marketing",
    href: "/pubs-bars",
    guides: [
      ["Pub marketing agency cost UK", "/insights/pub-marketing-agency-cost-uk"],
      ["Bar marketing agency cost UK", "/insights/bar-marketing-agency-cost-uk"],
      ["Best pub marketing agency UK", "/insights/best-pub-marketing-agency-uk"],
      ["Is a pub marketing agency worth it?", "/insights/pub-marketing-agency-worth-it"],
      ["Pub agency vs freelancer", "/insights/pub-marketing-agency-vs-freelancer"],
      ["Pub agency vs in-house", "/insights/pub-marketing-agency-vs-in-house"],
      ["Pub specialist vs generalist agency", "/insights/pub-marketing-agency-specialist-vs-generalist"],
      ["Pub SEO cost UK", "/insights/pub-seo-cost-uk"],
      ["Pub social media management cost UK", "/insights/pub-social-media-management-cost-uk"],
      ["Pub private hire marketing cost", "/insights/pub-private-hire-marketing-agency-cost"],
      ["How much should a pub spend on marketing?", "/insights/how-much-should-pub-spend-marketing-uk"],
      ["Google Ads vs Meta Ads for pubs", "/insights/google-ads-vs-meta-ads-pubs"],
    ],
  },
  {
    title: "Drinks brand marketing",
    href: "/drinks-brands",
    guides: [
      ["Drinks marketing agency cost UK", "/insights/drinks-marketing-agency-cost-uk"],
      ["How to choose a drinks marketing agency", "/insights/how-to-choose-a-drinks-marketing-agency-uk"],
      ["Is a drinks marketing agency worth it?", "/insights/is-a-drinks-marketing-agency-worth-it"],
      ["Drinks agency vs freelancer", "/insights/drinks-marketing-agency-vs-freelancer"],
      ["Drinks agency vs in-house", "/insights/drinks-marketing-agency-vs-in-house"],
      ["Drinks agency vs PR agency", "/insights/drinks-marketing-agency-vs-pr-agency"],
      ["Drinks brand marketing budget UK", "/insights/drinks-brand-marketing-budget-uk"],
      ["Drinks brand social media management cost", "/insights/drinks-brand-social-media-management-cost-uk"],
      ["Drinks brand website cost UK", "/insights/drinks-brand-website-cost-uk"],
      ["How much should you spend launching a drinks brand?", "/insights/how-much-should-you-spend-launching-a-drinks-brand-uk"],
      ["Influencer marketing vs paid social for drinks brands", "/insights/influencer-marketing-vs-paid-social-drinks-brands"],
      ["PR vs paid social for a drinks launch", "/insights/drinks-brand-launch-pr-vs-paid-social"],
    ],
  },
  {
    title: "Hospitality service costs",
    href: "/services",
    guides: [
      ["Hospitality local SEO cost UK", "/insights/hospitality-local-seo-cost-uk"],
      ["Hospitality paid media management cost UK", "/insights/hospitality-paid-media-management-cost-uk"],
      ["Hospitality email marketing and CRM cost UK", "/insights/hospitality-email-marketing-crm-cost-uk"],
      ["Hospitality website cost UK", "/insights/hospitality-website-cost-uk"],
      ["Hospitality SEO vs Google Ads", "/insights/hospitality-seo-vs-google-ads"],
    ],
  },
];

const allGuides = groups.flatMap((group) => group.guides);
const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Hospitality Marketing Insights",
  url: `${siteUrl}/insights`,
  description: "UK hospitality marketing buyer guides for restaurants, pubs, bars and drinks brands.",
  hasPart: allGuides.map(([name, path]) => ({ "@type": "Article", name, url: `${siteUrl}${path}` })),
};

export default function InsightsPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pricing-hero page-top"><p className="eyebrow">Hospitality marketing insights</p><h1>Buyer guides for people making<br/><em>real hospitality marketing decisions.</em></h1><div className="pricing-hero-aside"><p>Use these guides to compare agency costs, channels, suppliers and investment choices before you speak to us. Each guide has its own search intent so the content library supports the money pages rather than competing with them.</p><Link className="button button-ink" href="/pricing">See No Quiet Nights pricing <span>↗</span></Link></div></section>
      {groups.map((group) => <section className="plan-selector section-pad" key={group.title}><div className="selector-head"><p className="eyebrow">{group.title}</p><h2>Research the decision.<br/><em>Then visit the service page.</em></h2><p><Link href={group.href}>Go to the {group.title.toLowerCase()} money page →</Link></p></div><div className="selector-list">{group.guides.map(([name, path]) => <Link href={path} key={path}><span>BOFU buyer guide</span><b>{name}</b><i>↗</i></Link>)}</div></section>)}
      <section className="pricing-final"><span>Know enough to make a decision?</span><h2>Bring us the commercial problem.<br/><em>We will start from there.</em></h2><Link className="button button-cream" href="/start">Start a project <span>↗</span></Link></section>
    </main>
  </>;
}
