import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://no-quiet-nights.vercel.app";

export const metadata: Metadata = {
  title: "Pub Marketing Agency UK | Bar Marketing Agency",
  description: "Pub and bar marketing agency for UK venues. Local SEO, social media, Google and Meta ads, events, private hire and repeat-customer campaigns built around quieter sessions.",
  alternates: { canonical: "/pubs-bars" },
  openGraph: {
    title: "Pub & Bar Marketing Agency UK | No Quiet Nights",
    description: "Marketing for UK pubs and bars built around footfall, events, private hire, food trade and repeat visits.",
    url: "/pubs-bars",
    type: "website",
  },
};

const faqs = [
  ["What does a pub marketing agency do?", "A pub marketing agency helps create demand around specific sessions, events and revenue lines. That can include local SEO, social media, paid advertising, food and drink campaigns, event promotion, private hire lead generation and customer retention."],
  ["How can marketing help a quiet pub night?", "Start with the specific session and audience. A Tuesday quiz, Sunday roast, live sport fixture, cocktail night or private-hire offer needs a clear reason to visit, local distribution and a measurable booking or attendance path."],
  ["What should pubs measure from marketing?", "Useful measures include Maps and local search visibility, event responses, food covers, bookings, private hire enquiries, ticket sales, campaign cost, customer-list growth and repeat attendance."],
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
        <div className="pub-hero-copy"><p className="eyebrow light">Pub marketing agency UK</p><h1>Pub and bar marketing that makes quieter nights <em>worth leaving home for.</em></h1><p>No Quiet Nights helps UK pubs and bars build local demand around food, live sport, events, cocktails, private hire and the ordinary visits that become habits. We connect local SEO, social media, paid ads and customer retention around the sessions that need movement.</p><Link className="button button-cream" href="/start?type=pub-bar">Talk about my quiet session <span>↗</span></Link></div>
      </section>

      <section className="weekly-board section-pad"><div className="weekly-board-head"><p className="eyebrow light">Pub and bar demand</p><h2>Market the week<br/><em>session by session.</em></h2><span>UK PUB + BAR GROWTH</span></div><div className="week-rows"><article><b>MON</b><h3>LOCAL HABIT</h3><p>Reasons for regulars to return.</p></article><article><b>TUE</b><h3>EVENT DEMAND</h3><p>Quiz, tasting, community or live programme.</p></article><article><b>WED</b><h3>FOOD + SPORT</h3><p>Midweek trade with a clear occasion.</p></article><article><b>THU</b><h3>WEEKEND START</h3><p>Drinks occasions, groups and social plans.</p></article><article><b>SUN</b><h3>ROAST + FAMILIES</h3><p>Advance bookings and repeat Sunday trade.</p></article></div></section>

      <section className="plan-selector section-pad"><div className="selector-head"><p className="eyebrow">Pub marketing services</p><h2>Use the channel that matches<br/><em>the trading problem.</em></h2></div><div className="selector-list">
        <Link href="/services/local-seo"><span>Improve Google Business Profile, Maps, reviews and local relevance for searches such as pubs, Sunday roast, live sport and bars nearby.</span><b>Local SEO for pubs and bars</b><i>↗</i></Link>
        <Link href="/services/social-media-management"><span>Plan social content around events, food, drinks, fixtures, offers and the atmosphere people come for.</span><b>Pub social media management</b><i>↗</i></Link>
        <Link href="/services/paid-ads"><span>Use Google and Meta campaigns for events, private hire, launches, food trade and local demand.</span><b>Pub PPC + paid social</b><i>↗</i></Link>
        <Link href="/services/crm-repeat-customers"><span>Capture permission, follow up after events and give existing customers a reason to return.</span><b>Pub CRM + repeat customers</b><i>↗</i></Link>
      </div></section>

      <section className="playbook-band section-pad"><p className="eyebrow">Pub + bar buyer guides</p><h2>Research costs and suppliers<br/><em>before you commit.</em></h2><p><Link href="/insights/pub-marketing-agency-cost-uk">Pub marketing agency cost UK →</Link></p><p><Link href="/insights/bar-marketing-agency-cost-uk">Bar marketing agency cost UK →</Link></p><p><Link href="/insights/pub-marketing-agency-vs-freelancer">Pub marketing agency vs freelancer →</Link></p><p><Link href="/insights/pub-marketing-agency-specialist-vs-generalist">Hospitality specialist vs generalist agency for pubs →</Link></p><p><Link href="/insights/how-much-should-pub-spend-marketing-uk">How much should a UK pub spend on marketing? →</Link></p></section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Pub marketing agency FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>

      <section className="pub-final"><p>LAST ORDERS FOR QUIET NIGHTS</p><h2>Which session needs<br/><em>more people in the room?</em></h2><Link className="button button-cream" href="/start?type=pub-bar">Find my pub marketing starting point <span>↗</span></Link></section>
    </main>
  </>;
}
