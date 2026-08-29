import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "../components/lead-form";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";

export const metadata: Metadata = {
  title: "Pub Marketing Agency UK | Bar Marketing Agency",
  description: "Pub and bar marketing agency for UK venues. Local SEO, social media, Google and Meta ads, events, private hire and repeat-customer campaigns.",
  alternates: { canonical: "/pubs-bars" },
  openGraph: {
    title: "Pub & Bar Marketing Agency UK | No Quiet Nights",
    description: "Marketing for UK pubs and bars built around quieter nights, events, private hire, food trade and repeat visits.",
    url: "/pubs-bars",
    type: "website",
  },
};

const faqs = [
  ["What does a pub marketing agency do?", "A pub marketing agency helps more local people find you and gives them reasons to visit. That can include Google visibility, social media, ads, event promotion, private hire and customer follow-up."],
  ["How can marketing help a quiet pub night?", "Start with the exact night and reason to visit. A quiz, Sunday roast, live sport, cocktail night or private-hire offer needs a clear message and the right local audience."],
  ["What should pubs measure from marketing?", "Useful measures include Google searches, bookings, event responses, food covers, private-hire enquiries, customer-list growth and repeat visits."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: "Pub and Bar Marketing Agency UK", serviceType: "Pub and bar marketing", description: "Marketing for UK pubs and bars across local SEO, social media, paid media, events, private hire and retention.", url: `${siteUrl}/pubs-bars`, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "No Quiet Nights" }, areaServed: { "@type": "Country", name: "United Kingdom" }, audience: { "@type": "Audience", audienceType: "Pubs, bars, gastropubs and hospitality operators" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Pub and Bar Marketing", item: `${siteUrl}/pubs-bars` }] },
    { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export default function PubsBarsPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pub-hero page-top">
        <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=82" alt="Guests socialising in a busy pub and bar setting" />
        <div className="pub-hero-overlay"></div>
        <div className="pub-hero-copy"><p className="eyebrow light">Pub marketing agency UK</p><h1>Make quieter nights <em>worth leaving home for.</em></h1><p>We help pubs and bars bring more people in for food, drinks, live sport, events and private hire. We use Google, social media, ads and customer follow-up depending on which night or offer needs help.</p><Link className="button button-cream" href="#contact">Talk about my quiet night <span>↗</span></Link></div>
      </section>

      <section className="weekly-board section-pad"><div className="weekly-board-head"><p className="eyebrow light">Pub and bar marketing</p><h2>Market the week<br/><em>night by night.</em></h2><span>UK PUB + BAR MARKETING</span></div><div className="week-rows"><article><b>MON</b><h3>REGULARS</h3><p>Give local customers a reason to come back.</p></article><article><b>TUE</b><h3>EVENTS</h3><p>Quiz, tasting, community night or live entertainment.</p></article><article><b>WED</b><h3>FOOD + SPORT</h3><p>Build a clear reason for a midweek visit.</p></article><article><b>THU</b><h3>WEEKEND START</h3><p>Drinks, groups and after-work plans.</p></article><article><b>SUN</b><h3>ROAST + FAMILIES</h3><p>Drive bookings and repeat Sunday visits.</p></article></div></section>

      <section className="plan-selector section-pad"><div className="selector-head"><p className="eyebrow">Pub marketing services</p><h2>Start with what<br/><em>needs help.</em></h2></div><div className="selector-list">
        <Link href="/services/local-seo"><span>Show up when people nearby search for pubs, Sunday roasts, live sport and bars.</span><b>Local SEO for pubs and bars</b><i>↗</i></Link>
        <Link href="/services/social-media-management"><span>Plan social content around events, food, drinks, fixtures and offers.</span><b>Pub social media</b><i>↗</i></Link>
        <Link href="/services/paid-ads"><span>Use Google and Meta ads for events, private hire, food trade and local offers.</span><b>Pub and bar ads</b><i>↗</i></Link>
        <Link href="/services/crm-repeat-customers"><span>Keep customer details and give people reasons to come back.</span><b>Repeat customers</b><i>↗</i></Link>
      </div></section>

      <section className="playbook-band section-pad"><p className="eyebrow">Pub + bar buyer guides</p><h2>Know the costs<br/><em>before you hire.</em></h2><p><Link href="/insights/pub-marketing-agency-cost-uk">Pub marketing agency cost UK →</Link></p><p><Link href="/insights/bar-marketing-agency-cost-uk">Bar marketing agency cost UK →</Link></p><p><Link href="/insights/pub-marketing-agency-vs-freelancer">Pub marketing agency vs freelancer →</Link></p><p><Link href="/insights/pub-marketing-agency-specialist-vs-generalist">Hospitality specialist vs generalist agency for pubs →</Link></p><p><Link href="/insights/how-much-should-pub-spend-marketing-uk">How much should a UK pub spend on marketing? →</Link></p></section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Pub marketing FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>
      <LeadForm eyebrow="Pub + bar enquiry" heading="Which night, event or offer needs more people in the room?" />
      <section className="pub-final"><p>LAST ORDERS FOR QUIET NIGHTS</p><h2>Which night needs<br/><em>more people in the room?</em></h2><Link className="button button-cream" href="#contact">Find my starting point <span>↗</span></Link></section>
    </main>
  </>;
}
