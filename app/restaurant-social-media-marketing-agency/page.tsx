import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const pageUrl = `${siteUrl}/restaurant-social-media-marketing-agency`;

export const metadata: Metadata = {
  title: "Restaurant Social Media Marketing Agency UK | From £165 | NO QUIET NIGHTS",
  description: "Restaurant social media management for UK independents and groups. Instagram, Facebook and TikTok planning, editing and posting from £165/month.",
  alternates: { canonical: pageUrl },
  openGraph: { title: "Restaurant Social Media Marketing Agency UK | NO QUIET NIGHTS", description: "Restaurant social media built around reasons to visit, quieter services and measurable demand. Plans from £165/month.", url: pageUrl, type: "website" },
};

const faqs = [
  ["How much does restaurant social media management cost?", "NO QUIET NIGHTS Starter costs £165 per month and includes planned social across Instagram, Facebook and TikTok, three planned posts per week, design and video editing, a monthly content calendar and strategy, plus Stories two to three times per week."],
  ["Do you create restaurant content?", "We provide design and video editing within the Starter scope. Custom on-site photography and videography can be scoped separately when the restaurant needs original production."],
  ["Which platforms do you manage for restaurants?", "Starter is designed around Instagram, Facebook and TikTok. The exact emphasis depends on the restaurant, audience and content available."],
  ["Can social media fill quieter restaurant days?", "It can support a specific quieter service when the proposition, audience, creative and call to action are aligned. Social media cannot guarantee covers, but it can improve awareness, consideration and demand capture."],
  ["Do you use stock images?", "Stock imagery can support certain marketing pages or concepts, but restaurant social content should primarily reflect the real food, venue, team and atmosphere whenever suitable original assets are available."],
  ["How should restaurant social media be measured?", "Measure the job the content is meant to do. Useful signals can include reach among the right audience, profile actions, website visits, booking clicks, enquiries, paid conversion data and performance around named campaigns or quieter services."],
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", "@id": `${pageUrl}#service`, name: "Restaurant Social Media Marketing Agency UK", serviceType: "Restaurant social media management", url: pageUrl, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl }, areaServed: { "@type": "Country", name: "United Kingdom" }, offers: { "@type": "Offer", priceCurrency: "GBP", price: "165", description: "Restaurant social media management starts from £165 per month." } },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Restaurant social media marketing agency", item: pageUrl }] },
  { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
]};

export default function RestaurantSocialMediaAgencyPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">Restaurant social media agency UK · From £165/month</p>
          <h1>Make the feed give people a <em>reason to visit.</em></h1>
          <strong>Restaurant social media should do more than prove you are still open.</strong>
          <p>We plan, design, edit and manage social content for UK restaurants across Instagram, Facebook and TikTok. The job is to turn food, atmosphere, offers and occasions into reasons to choose your venue, especially when a quieter service needs help.</p>
          <div className="service-hero-actions"><Link className="button button-ink" href="/start?type=restaurant">Talk about my restaurant ↗</Link><Link className="text-link" href="/pricing">See plans from £165 →</Link></div>
        </div>
        <figure className="service-detail-image"><img src="/images/stock/restaurant-03-modern-people-dining.jpg" alt="Diners enjoying a modern restaurant setting" /><figcaption>Stock hospitality image, used for illustrative purposes</figcaption></figure>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>Social should make the restaurant <em>easier to choose.</em></h2>
        <p>Good restaurant social media combines consistent publishing with commercial intent. It should show what the food looks like, what the room feels like, why someone should come now, and what to do next. When the problem is quiet Tuesday dinner, the answer is not another generic Friday cocktail post.</p>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">What we manage</p><h2>Content with a <em>job.</em></h2><p>Every content stream should support discovery, choice, conversion or return visits.</p></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Monthly content planning</h3><p>Build the calendar around menus, launches, quieter services, occasions, offers and the moments that actually matter commercially.</p></div></article>
          <article><span>02</span><div><h3>Instagram, Facebook and TikTok</h3><p>Adapt the content to the platform rather than duplicating the same post everywhere without context.</p></div></article>
          <article><span>03</span><div><h3>Design and video editing</h3><p>Turn available restaurant assets into polished social content that feels intentional rather than improvised.</p></div></article>
          <article><span>04</span><div><h3>Stories and timely reasons to visit</h3><p>Use Stories for immediacy, service reminders, availability, behind-the-scenes moments and offers that do not need to live forever on the grid.</p></div></article>
          <article><span>05</span><div><h3>Campaign hooks</h3><p>Create specific content around brunch, private dining, launches, set menus, events, seasonal moments and quieter dayparts.</p></div></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Starter · £165/month</p><h2>What is included?</h2></div>
        <div className="proof-grid">
          <article><span>3 platforms</span><h3>Instagram, Facebook, TikTok</h3><p>Planned presence across the three main social channels in the Starter scope.</p></article>
          <article><span>3 posts / week</span><h3>Consistent publishing</h3><p>Three planned posts each week, supported by a monthly content calendar and strategy.</p></article>
          <article><span>2–3 story sessions / week</span><h3>More immediate content</h3><p>Stories help the restaurant stay timely around services, offers, launches and day-to-day moments.</p></article>
        </div>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">When this is the right starting point</p>
        <h2>Choose social-first when the restaurant is good, but the communication is inconsistent.</h2>
        <ul>
          <li><span>01</span><p>Your food and venue look better in real life than online.</p></li>
          <li><span>02</span><p>Posting disappears whenever service gets busy.</p></li>
          <li><span>03</span><p>You have assets, but no clear monthly plan.</p></li>
          <li><span>04</span><p>You need a focused entry point before adding SEO or paid media.</p></li>
        </ul>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Buyer guides</p><h2>Check the numbers<br/><em>before you hire.</em></h2>
        <p><Link href="/insights/restaurant-social-media-management-cost-uk">Restaurant social media management cost UK →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-vs-freelancer">Agency vs freelancer for restaurant marketing →</Link></p>
        <p><Link href="/insights/how-much-should-a-restaurant-spend-on-marketing">How much should a restaurant spend on marketing? →</Link></p>
      </section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Restaurant social media FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>

      <section className="service-next section-pad"><p className="eyebrow">Next step</p><h2>What should the feed help make <em>busier?</em></h2><p>Tell us the restaurant, the quiet bit and what content you already have. We will point to the smallest sensible starting point.</p><div><Link className="button button-cream" href="/start?type=restaurant">Find my starting point ↗</Link><Link className="text-link" href="/pricing">Compare plans →</Link></div></section>
    </main>
  </>;
}
