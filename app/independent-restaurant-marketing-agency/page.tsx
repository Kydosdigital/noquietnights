import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const pageUrl = `${siteUrl}/independent-restaurant-marketing-agency`;

export const metadata: Metadata = {
  title: "Independent Restaurant Marketing Agency UK | From £165 | NO QUIET NIGHTS",
  description: "Marketing for independent UK restaurants, from social and local SEO to paid demand and CRM. Transparent plans from £165/month.",
  alternates: { canonical: pageUrl },
  openGraph: { title: "Independent Restaurant Marketing Agency UK | NO QUIET NIGHTS", description: "Restaurant marketing for independents that starts with the trading problem, not a generic channel bundle.", url: pageUrl, type: "website" },
};

const faqs = [
  ["Do you work with independent restaurants?", "Yes. NO QUIET NIGHTS is structured so independent restaurants can start with a focused plan from £165 per month rather than buying a large full-service retainer immediately."],
  ["How much does marketing for an independent restaurant cost?", "NO QUIET NIGHTS plans are £165 Starter, £295 Visibility, £495 Demand and £1,000 Full House per month. Ad spend and custom on-site production are separate."],
  ["What should an independent restaurant market first?", "Start with the commercial bottleneck. That may be inconsistent social, weak local discovery, a quiet service, poor booking conversion, private dining demand or a lack of repeat-customer activity."],
  ["Can you help a restaurant fill quieter weekdays?", "Marketing can support a defined quieter service by aligning the audience, proposition, creative and conversion journey. It cannot responsibly guarantee a number of covers."],
  ["Do independent restaurants need every marketing channel?", "No. The smallest useful combination is usually better than paying for channels without a clear job."],
  ["Do you work with new restaurant openings?", "Yes. A new opening may need a different mix, such as launch content, local discovery, paid demand, landing pages and customer capture."],
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", "@id": `${pageUrl}#service`, name: "Independent Restaurant Marketing Agency UK", serviceType: "Marketing for independent restaurants", url: pageUrl, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl }, areaServed: { "@type": "Country", name: "United Kingdom" }, audience: { "@type": "Audience", audienceType: "Independent restaurant owners and operators" }, offers: { "@type": "Offer", priceCurrency: "GBP", price: "165", description: "Independent restaurant marketing plans start from £165 per month." } },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Independent Restaurant Marketing Agency", item: pageUrl }] },
  { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
]};

export default function IndependentRestaurantMarketingAgencyPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">Independent restaurant marketing agency UK · From £165/month</p>
          <h1>Big-chain marketing thinking, without the <em>big-chain waste.</em></h1>
          <strong>Independent restaurants do not need every channel. They need the right next move.</strong>
          <p>We help independent UK restaurants improve discovery, choice, bookings and repeat demand with focused marketing plans that start at £165 per month. The strategy starts with the trading problem, not a pre-written agency package.</p>
          <div className="service-hero-actions"><Link className="button button-ink" href="/start?type=restaurant">Talk about my restaurant ↗</Link><Link className="text-link" href="/restaurant-marketing-packages">Compare packages →</Link></div>
        </div>
        <figure className="service-detail-image"><img src="/images/stock/restaurant-01-warm-dining-table.jpg" alt="Warm independent restaurant dining table prepared for guests" /><figcaption>Stock hospitality image, used for illustrative purposes</figcaption></figure>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>Your busiest night is <em>not the brief.</em></h2>
        <p>Independent restaurant marketing should focus on the place where demand is softer than it should be. That might be a Tuesday dinner service, local Google discovery, a private room, a launch, a weak booking journey or the fact that previous guests never hear from you again.</p>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">Common independent restaurant problems</p><h2>Start with the <em>commercial gap.</em></h2><p>Different problems require different tools. That is why we diagnose before recommending channels.</p></div>
        <div className="work-list">
          <article><span>01</span><div><h3>“We are busy at weekends but soft midweek.”</h3><p>Build a reason to choose the quieter service, then put it in front of a realistic local audience.</p></div></article>
          <article><span>02</span><div><h3>“People nearby do not find us on Google.”</h3><p>Prioritise Google Business Profile, local SEO and high-intent location or occasion searches.</p></div></article>
          <article><span>03</span><div><h3>“Our social looks dead whenever we get busy.”</h3><p>Move planning, design, editing and publishing into a repeatable monthly system.</p></div></article>
          <article><span>04</span><div><h3>“We get attention, but not enough bookings.”</h3><p>Look at proposition, landing pages, menu visibility, mobile UX, calls to action and booking friction before buying more traffic.</p></div></article>
          <article><span>05</span><div><h3>“Guests visit once and disappear.”</h3><p>Build customer capture, email, CRM, birthdays, launches, VIP moments and win-back activity.</p></div></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Plans built for different stages</p><h2>Start lean. Add capability when it earns its place.</h2></div>
        <div className="proof-grid">
          <article><span>£165</span><h3>Starter</h3><p>For independent restaurants that need consistent social content and a monthly plan.</p></article>
          <article><span>£295</span><h3>Visibility</h3><p>For restaurants that need stronger local Google discovery alongside social.</p></article>
          <article><span>£495</span><h3>Demand</h3><p>For operators ready to add one paid acquisition channel, landing-page support, tracking and CRM follow-up.</p></article>
        </div>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">Who this is for</p>
        <h2>Independent operators who want marketing connected to the <em>till.</em></h2>
        <ul>
          <li><span>01</span><p>Single-site restaurants that need a focused, affordable starting point.</p></li>
          <li><span>02</span><p>Owner-operated venues where marketing keeps losing to day-to-day service.</p></li>
          <li><span>03</span><p>Small restaurant groups that need more consistency without building a full in-house team.</p></li>
          <li><span>04</span><p>New openings that need launch demand and an owned customer base from day one.</p></li>
          <li><span>05</span><p>Restaurants that care more about covers, enquiries and repeat visits than vanity metrics.</p></li>
        </ul>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Independent restaurant buyer guides</p><h2>Make the buying decision<br/><em>with your eyes open.</em></h2>
        <p><Link href="/insights/best-marketing-agency-independent-restaurants-manchester">Best marketing agency for independent restaurants in Manchester →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-vs-in-house">Restaurant marketing agency vs in-house →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-vs-freelancer">Restaurant marketing agency vs freelancer →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-cost-uk">Restaurant marketing agency cost UK →</Link></p>
      </section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Independent restaurant marketing FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>

      <section className="service-next section-pad"><p className="eyebrow">Next step</p><h2>Where is trade softer than it should be?</h2><p>Bring us the quiet service, weak launch, underused room or disconnected marketing problem. We will point to the smallest sensible starting point.</p><div><Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit ↗</Link><Link className="text-link" href="/restaurant-marketing-packages">Compare packages →</Link></div></section>
    </main>
  </>;
}
