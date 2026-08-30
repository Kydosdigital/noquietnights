import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const pageUrl = `${siteUrl}/restaurant-seo-agency`;

export const metadata: Metadata = {
  title: "Restaurant SEO Agency UK | Local SEO From £295 | NO QUIET NIGHTS",
  description: "Restaurant SEO and local SEO for UK venues. Google Business Profile, local search, intent tracking and visibility reporting from £295/month.",
  alternates: { canonical: pageUrl },
  openGraph: { title: "Restaurant SEO Agency UK | NO QUIET NIGHTS", description: "Local restaurant SEO built around being found when diners are deciding where to eat. Visibility plans from £295/month.", url: pageUrl, type: "website" },
};

const faqs = [
  ["How much does restaurant SEO cost?", "NO QUIET NIGHTS includes restaurant local SEO inside the £295 per month Visibility plan. It includes Google Business Profile optimisation and updates, local SEO, location and intent keyword tracking and monthly visibility reporting, plus the Starter social scope."],
  ["What does restaurant SEO include?", "For local restaurants, useful SEO work can include Google Business Profile, local landing pages, cuisine and occasion search coverage, technical basics, content improvements and measurement of actions such as calls, directions, website visits and booking clicks where available."],
  ["How long does restaurant SEO take?", "SEO is cumulative and timing varies by competition, current visibility and the work required. We do not guarantee a specific ranking date."],
  ["Do you optimise for AI search as well as Google?", "We structure important pages clearly, use descriptive headings, answer high-intent questions directly and maintain consistent business and service information so the site is easier for search engines and answer systems to interpret."],
  ["Is Google Business Profile part of restaurant SEO?", "Yes. For a local restaurant, Google Business Profile is a core discovery surface and is included in the Visibility plan."],
  ["Should I choose SEO or Google Ads?", "SEO is designed to build organic discovery over time. Google Ads can create immediate paid visibility for relevant searches. The right choice depends on urgency, budget and the commercial opportunity."],
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", "@id": `${pageUrl}#service`, name: "Restaurant SEO Agency UK", serviceType: "Restaurant SEO and local SEO", url: pageUrl, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl }, areaServed: { "@type": "Country", name: "United Kingdom" }, offers: { "@type": "Offer", priceCurrency: "GBP", price: "295", description: "Restaurant local SEO is included in the Visibility plan from £295 per month." } },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Restaurant SEO Agency", item: pageUrl }] },
  { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
]};

export default function RestaurantSeoAgencyPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">Restaurant SEO agency UK · Visibility from £295/month</p>
          <h1>Be there when someone asks, <em>“where should we eat?”</em></h1>
          <strong>Restaurant SEO is demand capture, not a ranking trophy.</strong>
          <p>We help UK restaurants improve local discovery across Google Business Profile, local search and high-intent website pages, then connect visibility to the actions that matter, such as calls, directions, website visits and booking journeys.</p>
          <div className="service-hero-actions"><Link className="button button-ink" href="/start?type=restaurant">Discuss local discovery ↗</Link><Link className="text-link" href="/pricing">See Visibility at £295 →</Link></div>
        </div>
        <figure className="service-detail-image"><img src="/images/stock/restaurant-05-cozy-modern-interior.jpg" alt="Warm modern restaurant interior prepared for local diners" /><figcaption>Stock hospitality image, used for illustrative purposes</figcaption></figure>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>Restaurant SEO should help you get <em>found and chosen.</em></h2>
        <p>Ranking for a phrase is useful only if the search represents real restaurant intent. We prioritise local, cuisine, occasion and service-related discovery, then make sure the page or profile people land on gives them enough confidence to act.</p>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">What we work on</p><h2>Own the searches that can become a <em>cover.</em></h2><p>The exact keyword map should follow the restaurant, its catchment, proposition and occasions rather than a generic SEO checklist.</p></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Google Business Profile</h3><p>Optimisation and ongoing updates so core local information is accurate, useful and aligned with the restaurant proposition.</p></div></article>
          <article><span>02</span><div><h3>Local intent</h3><p>Build relevance around place, cuisine, occasion and restaurant-type searches that reflect how people actually choose where to eat.</p></div></article>
          <article><span>03</span><div><h3>Commercial landing pages</h3><p>Create clear pages for services and buying intent instead of forcing every searcher through a generic homepage.</p></div></article>
          <article><span>04</span><div><h3>Search-friendly content architecture</h3><p>Use direct answers, useful headings, internal links and structured data so search engines and answer systems can interpret the site more easily.</p></div></article>
          <article><span>05</span><div><h3>Measurement</h3><p>Track useful search visibility alongside calls, directions, website visits, booking actions and other measurable conversion signals.</p></div></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Visibility · £295/month</p><h2>What is included?</h2></div>
        <div className="proof-grid">
          <article><span>Google</span><h3>Google Business Profile</h3><p>Optimisation and updates to strengthen one of the most important local discovery surfaces for restaurants.</p></article>
          <article><span>Local SEO</span><h3>Location and intent coverage</h3><p>SEO work focused on commercially relevant discovery rather than raw keyword volume.</p></article>
          <article><span>Reporting</span><h3>Visibility tracking</h3><p>Monthly reporting around the local search work, with context on what the numbers actually mean.</p></article>
        </div>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">When SEO is the right starting point</p>
        <h2>Choose search-first when the restaurant is good, but too easy to miss.</h2>
        <ul>
          <li><span>01</span><p>Competitors appear more consistently for local restaurant searches.</p></li>
          <li><span>02</span><p>Your Google Business Profile is neglected or inconsistent.</p></li>
          <li><span>03</span><p>You have strong reviews and a good venue, but weak organic discovery.</p></li>
          <li><span>04</span><p>You want to build a longer-term discovery asset alongside or before paid search.</p></li>
        </ul>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Restaurant SEO buyer guides</p><h2>Research the decision<br/><em>before you hire.</em></h2>
        <p><Link href="/insights/restaurant-seo-cost-uk">How much does restaurant SEO cost in the UK? →</Link></p>
        <p><Link href="/insights/google-ads-vs-meta-ads-restaurants">Google Ads vs Meta Ads for restaurants →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-specialist-vs-generalist">Restaurant specialist vs generalist agency →</Link></p>
      </section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Restaurant SEO FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>

      <section className="service-next section-pad"><p className="eyebrow">Next step</p><h2>What should Google help make <em>busier?</em></h2><p>Tell us what diners should be finding you for. We will tell you whether local SEO is the right first move.</p><div><Link className="button button-cream" href="/start?type=restaurant">Find my starting point ↗</Link><Link className="text-link" href="/pricing">Compare plans →</Link></div></section>
    </main>
  </>;
}
