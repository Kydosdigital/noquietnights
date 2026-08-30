import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const pageUrl = `${siteUrl}/restaurant-marketing-packages`;

export const metadata: Metadata = {
  title: "Restaurant Marketing Packages UK | From £165/Month | NO QUIET NIGHTS",
  description: "Compare restaurant marketing packages from £165 to £1,000/month for social media, local SEO, paid demand, CRM and connected growth.",
  alternates: { canonical: pageUrl },
  openGraph: { title: "Restaurant Marketing Packages UK | NO QUIET NIGHTS", description: "Choose the smallest restaurant marketing package that solves today's problem. Plans from £165/month.", url: pageUrl, type: "website" },
};

const packages = [
  ["Starter", "£165", "Social consistency", "Instagram, Facebook and TikTok planning, three posts a week, design/video editing, monthly calendar and strategy, plus Stories."],
  ["Visibility", "£295", "Local discovery", "Starter plus Google Business Profile optimisation and updates, local SEO, location-intent tracking and monthly visibility reporting."],
  ["Demand", "£495", "Paid acquisition and conversion", "Visibility plus one managed paid channel, landing-page support, conversion tracking, email/CRM and a monthly growth review. Ad spend separate."],
  ["Full House", "£1,000", "Connected growth", "Demand plus Meta and Google management, SEO growth, CRM automation, retargeting, win-back, repeat-visit campaigns, offer planning and advanced reporting. Ad spend and on-site production separate."],
];

const faqs = [
  ["What is the cheapest restaurant marketing package?", "NO QUIET NIGHTS Starter is £165 per month."],
  ["Which package includes restaurant SEO?", "Visibility at £295 per month includes local SEO, Google Business Profile optimisation and location-intent keyword tracking."],
  ["Which package includes paid ads?", "Demand at £495 includes one managed paid channel, either Meta Ads or Google Ads. Full House at £1,000 includes both. Advertising spend is separate."],
  ["Which package includes CRM and repeat-customer marketing?", "Demand includes email/CRM support. Full House adds deeper automation, retargeting, win-back and repeat-visit campaigns."],
  ["Is photography included in the monthly packages?", "Custom on-site photography and videography are separately scoped."],
  ["Can I start small and upgrade?", "Yes. The pricing philosophy is to choose the smallest plan that solves today's problem and add capability when the commercial need justifies it."],
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", "@id": `${pageUrl}#service`, name: "Restaurant Marketing Packages UK", serviceType: "Restaurant marketing packages", url: pageUrl, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl }, areaServed: { "@type": "Country", name: "United Kingdom" }, offers: packages.map(([name,price,,description]) => ({ "@type": "Offer", name, priceCurrency: "GBP", price: price.replace("£", "").replace(",", ""), description })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Restaurant Marketing Packages", item: pageUrl }] },
  { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
]};

export default function RestaurantMarketingPackagesPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">Restaurant marketing packages UK · From £165/month</p>
          <h1>Buy the smallest package that solves the <em>actual problem.</em></h1>
          <strong>Four levels. Clear scope. No mystery retainer.</strong>
          <p>Restaurant marketing can mean anything from consistent social content to a connected acquisition and retention system. Our packages separate those jobs so you can see exactly what capability you are buying and when it makes sense to move up.</p>
          <div className="service-hero-actions"><Link className="button button-ink" href="/start?type=restaurant">Find my starting point ↗</Link><Link className="text-link" href="/pricing">See full pricing →</Link></div>
        </div>
        <figure className="service-detail-image"><img src="/images/stock/restaurant-12-table-setting-menu.jpg" alt="Restaurant table setting and menu ready for service" /><figcaption>Stock hospitality image, used for illustrative purposes</figcaption></figure>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>Restaurant marketing packages start at <em>£165/month.</em></h2>
        <p>Starter is £165, Visibility £295, Demand £495 and Full House £1,000 per month. Advertising media spend is separate, and custom on-site production is separately scoped. The right package depends on whether the restaurant needs consistency, discovery, active demand or a connected growth system.</p>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Compare restaurant marketing packages</p><h2>Four levels. Four different jobs.</h2></div>
        <div className="proof-grid">
          {packages.slice(0,3).map(([name,price,job,description]) => <article key={name}><span>{price} / month</span><h3>{name}</h3><p><strong>{job}.</strong> {description}</p></article>)}
        </div>
        <div className="proof-grid" style={{marginTop:1}}>
          <article><span>£1,000 / month</span><h3>Full House</h3><p><strong>Connected growth.</strong> Demand plus Meta and Google management, SEO growth, CRM automation, retargeting, win-back, repeat-visit campaigns, offer planning and advanced reporting.</p></article>
          <article><span>Separate</span><h3>Advertising spend</h3><p>Media budget goes to the advertising platforms and is not hidden inside the management fee.</p></article>
          <article><span>Custom</span><h3>On-site production</h3><p>Photography, videography and bespoke content days are scoped separately so the monthly package stays clear.</p></article>
        </div>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">How to choose</p><h2>Match the plan to the <em>bottleneck.</em></h2><p>The wrong package can create more activity without fixing the problem.</p></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Choose Starter when consistency is the gap</h3><p>You already have enough visibility and a working booking journey, but social disappears whenever operations get busy.</p></div></article>
          <article><span>02</span><div><h3>Choose Visibility when people are not finding you</h3><p>Local Google discovery, your Business Profile or location-intent search coverage needs work.</p></div></article>
          <article><span>03</span><div><h3>Choose Demand when you need active acquisition</h3><p>You want one managed paid channel, a conversion route, tracking and follow-up around a defined commercial objective.</p></div></article>
          <article><span>04</span><div><h3>Choose Full House when the system is fragmented</h3><p>You need paid search, paid social, SEO, CRM, retargeting and repeat-visit activity working together rather than as isolated channels.</p></div></article>
        </div>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">The NO QUIET NIGHTS pricing principle</p>
        <h2>Scale when the numbers do.</h2>
        <ul>
          <li><span>01</span><p>Do not buy a £1,000 package for a £165 problem.</p></li>
          <li><span>02</span><p>Do not expect a £165 package to solve a full-funnel growth problem.</p></li>
          <li><span>03</span><p>Ask what is included, what is separate and what the package is meant to make more likely.</p></li>
          <li><span>04</span><p>Marketing should finish at the till, not at the reporting dashboard.</p></li>
        </ul>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Pricing buyer guides</p><h2>Compare the market<br/><em>before you buy.</em></h2>
        <p><Link href="/insights/restaurant-marketing-agency-cost-uk">Restaurant marketing agency cost UK →</Link></p>
        <p><Link href="/insights/how-much-should-a-restaurant-spend-on-marketing">How much should a restaurant spend on marketing? →</Link></p>
        <p><Link href="/insights/is-a-restaurant-marketing-agency-worth-it">Is a restaurant marketing agency worth it? →</Link></p>
      </section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Restaurant marketing package FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>

      <section className="service-next section-pad"><p className="eyebrow">Next step</p><h2>What is the smallest sensible <em>starting point?</em></h2><p>Tell us where trade is softer than it should be. We will point to the package that matches the problem.</p><div><Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit ↗</Link><Link className="text-link" href="/pricing">See full pricing →</Link></div></section>
    </main>
  </>;
}
