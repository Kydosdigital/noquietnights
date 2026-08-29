import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://no-quiet-nights.vercel.app";

export const metadata: Metadata = {
  title: "Drinks Marketing Agency UK | Beverage Brand Marketing",
  description: "Drinks marketing agency for UK beverage brands. Brand positioning, launches, social media, paid campaigns, stockist journeys, trade support and repeat-purchase marketing.",
  alternates: { canonical: "/drinks-brands" },
  openGraph: {
    title: "Drinks Marketing Agency UK | No Quiet Nights",
    description: "Build consumer pull, stronger trade stories and clearer journeys from first discovery to first serve and repeat purchase.",
    url: "/drinks-brands",
    type: "website",
  },
};

const faqs = [
  ["What does a drinks marketing agency do?", "A drinks marketing agency can support positioning, launch strategy, social media, paid campaigns, creator activity, stockist journeys, trade marketing, landing pages, email and repeat-purchase activity."],
  ["Is drinks marketing different from restaurant marketing?", "Yes. Venue marketing often focuses on local footfall, bookings and repeat visits. Drinks brands also need consumer demand, trade credibility, stockist discovery and a route from awareness to first serve or purchase."],
  ["How should drinks marketing be measured?", "The right measures depend on distribution and data access, but can include qualified traffic, stockist searches, sampling or trial actions, trade enquiries, creator or paid-media efficiency, email growth, repeat purchase and campaign revenue where available."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: "Drinks Marketing Agency UK", serviceType: "Drinks and beverage brand marketing", description: "Marketing for UK drinks brands across positioning, launches, social media, paid media, trade journeys and retention.", url: `${siteUrl}/drinks-brands`, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "No Quiet Nights" }, areaServed: { "@type": "Country", name: "United Kingdom" }, audience: { "@type": "Audience", audienceType: "Drinks brands, beverage companies and hospitality suppliers" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Drinks Brand Marketing", item: `${siteUrl}/drinks-brands` }] },
    { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export default function DrinksBrandsPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="drinks-hero page-top"><div className="drinks-hero-copy"><p className="eyebrow">Drinks marketing agency UK</p><h1>Drinks marketing that turns a good liquid into <em>consumer and trade demand.</em></h1><p>No Quiet Nights helps UK drinks brands sharpen the story, launch with purpose and make demand easier to act on. We connect positioning, social media, paid campaigns, stockist journeys, trade support and customer follow-up around the route to market.</p><div><Link className="button button-ink" href="/start?type=drinks-brand">Plan a drinks campaign <span>↗</span></Link><Link className="text-link" href="/pricing">See marketing plans →</Link></div></div><div className="bottle-stage"><img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=82" alt="Craft cocktail served in a bar for a drinks brand campaign" /></div></section>

      <section className="three-audiences section-pad"><p className="eyebrow light">One brand. More than one buyer.</p><h2>Build the story for<br/><em>the drinker and the trade.</em></h2><div className="audience-triangle"><article><span>01</span><h3>Consumer demand</h3><p>Why should somebody notice it, try it, ask for it and buy it again?</p></article><article><span>02</span><h3>Trade confidence</h3><p>Why should a buyer, venue or distributor believe it deserves space and attention?</p></article><article><span>03</span><h3>Findability</h3><p>Can interested customers actually find a serve, stockist, retailer or next step?</p></article></div></section>

      <section className="plan-selector section-pad"><div className="selector-head"><p className="eyebrow">Drinks marketing services</p><h2>Connect brand building<br/><em>to a route to action.</em></h2></div><div className="selector-list">
        <Link href="/services/social-media-management"><span>Build a consistent content system around product, serves, occasions, founders, trade moments and launches.</span><b>Drinks brand social media</b><i>↗</i></Link>
        <Link href="/services/paid-ads"><span>Use Meta and Google where paid demand can move people towards discovery, purchase, stockists or campaign pages.</span><b>Paid media for drinks brands</b><i>↗</i></Link>
        <Link href="/services/content-production"><span>Create photography and short-form video for organic, paid, launch and trade use.</span><b>Drinks photography + video</b><i>↗</i></Link>
        <Link href="/services/launch-growth-strategy"><span>Plan positioning, launch sequence, offers, partnerships, paid media, content and measurement around one commercial objective.</span><b>Drinks launch strategy</b><i>↗</i></Link>
      </div></section>

      <section className="playbook-band section-pad"><p className="eyebrow">Drinks buyer guides</p><h2>Compare costs, models and<br/><em>launch choices.</em></h2><p><Link href="/insights/drinks-marketing-agency-cost-uk">Drinks marketing agency cost UK →</Link></p><p><Link href="/insights/how-to-choose-a-drinks-marketing-agency-uk">How to choose a drinks marketing agency in the UK →</Link></p><p><Link href="/insights/is-a-drinks-marketing-agency-worth-it">Is a drinks marketing agency worth it? →</Link></p><p><Link href="/insights/drinks-marketing-agency-vs-freelancer">Drinks marketing agency vs freelancer →</Link></p><p><Link href="/insights/how-much-should-you-spend-launching-a-drinks-brand-uk">How much should you spend launching a drinks brand? →</Link></p></section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Drinks marketing agency FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>

      <section className="pricing-final"><span>Planning a launch, stockist push or growth campaign?</span><h2>Bring us the route-to-market problem.<br/><em>Not just the content brief.</em></h2><p>We will start with the audience, action and commercial job the campaign needs to do.</p><Link className="button button-cream" href="/start?type=drinks-brand">Talk about the drinks brand <span>↗</span></Link></section>
    </main>
  </>;
}
