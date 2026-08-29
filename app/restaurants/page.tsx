import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://no-quiet-nights.vercel.app";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency UK",
  description: "Restaurant marketing agency for UK independents and groups. Local SEO, social media, Google Ads, Meta ads, booking journeys and repeat-customer marketing built around fuller services.",
  alternates: { canonical: "/restaurants" },
  openGraph: {
    title: "Restaurant Marketing Agency UK | No Quiet Nights",
    description: "Restaurant marketing built around local discovery, direct bookings, quieter services and repeat visits.",
    url: "/restaurants",
    type: "website",
  },
};

const faqs = [
  ["What does a restaurant marketing agency do?", "A restaurant marketing agency helps a venue get discovered, chosen, booked and remembered. The mix can include local SEO, Google Business Profile work, social media, paid advertising, landing pages, CRM and repeat-customer campaigns."],
  ["Can restaurant marketing help fill quieter days?", "Yes, when the campaign is built around a specific service, audience and reason to visit. Marketing should target the underused capacity rather than simply generating more attention for already-busy periods."],
  ["How should restaurant marketing be measured?", "Use measures that fit the commercial brief, such as local search visibility, qualified website visits, direct bookings, target-service covers, private dining enquiries, customer acquisition cost, database growth and repeat visits."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: "Restaurant Marketing Agency UK", serviceType: "Restaurant marketing", description: "Restaurant marketing for UK venues across local SEO, social media, paid media, booking journeys and retention.", url: `${siteUrl}/restaurants`, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "No Quiet Nights" }, areaServed: { "@type": "Country", name: "United Kingdom" }, audience: { "@type": "Audience", audienceType: "Restaurants, restaurant groups and hospitality operators" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Restaurant Marketing", item: `${siteUrl}/restaurants` }] },
    { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export default function RestaurantsPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="restaurant-hero page-top">
        <div className="restaurant-hero-photo"><img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=82" alt="Chef preparing restaurant dishes during service" /></div>
        <div className="restaurant-hero-copy">
          <p className="eyebrow">Restaurant marketing agency UK</p>
          <h1>Restaurant marketing that turns local demand into <em>fuller services.</em></h1>
          <p>No Quiet Nights helps UK restaurants get found locally, win the booking decision and bring first-time diners back. We connect local SEO, social media, Google and Meta ads, booking journeys and customer retention around the services that actually need more covers.</p>
          <div><Link className="button button-ink" href="/start?type=restaurant">Talk about my restaurant <span>↗</span></Link><Link className="text-link" href="/pricing">See restaurant marketing pricing →</Link></div>
        </div>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">How restaurant demand moves</p>
        <h2>Get found. Get chosen.<br/><em>Get booked. Get remembered.</em></h2>
        <ol>
          <li><span>01</span><h3>Local discovery</h3><p>Google Search, Maps, reviews and social discovery put the restaurant into consideration.</p></li>
          <li><span>02</span><h3>Choice</h3><p>Menus, imagery, offers, proof and positioning give the guest a reason to choose you.</p></li>
          <li><span>03</span><h3>Booking</h3><p>Fast mobile journeys and clear reservation routes reduce friction between interest and a table.</p></li>
          <li><span>04</span><h3>Return</h3><p>Email, SMS, birthdays, events and new reasons to visit turn one booking into a customer relationship.</p></li>
        </ol>
      </section>

      <section className="plan-selector section-pad">
        <div className="selector-head"><p className="eyebrow">Restaurant marketing services</p><h2>Use the service that matches<br/><em>the leak.</em></h2></div>
        <div className="selector-list">
          <Link href="/services/local-seo"><span>Google Business Profile, Maps, reviews and website relevance for high-intent local searches.</span><b>Local SEO for restaurants</b><i>↗</i></Link>
          <Link href="/services/social-media-management"><span>Content around food, atmosphere, offers, openings and the moments people choose restaurants for.</span><b>Restaurant social media management</b><i>↗</i></Link>
          <Link href="/services/paid-ads"><span>Google and Meta campaigns for bookings, private dining, launches, events and quieter services.</span><b>Restaurant Google Ads + paid social</b><i>↗</i></Link>
          <Link href="/services/crm-repeat-customers"><span>Customer capture, birthdays, VIPs, win-back and repeat-visit campaigns.</span><b>Restaurant CRM + retention</b><i>↗</i></Link>
        </div>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Restaurant buyer guides</p>
        <h2>Research the agency decision<br/><em>without the sales call.</em></h2>
        <p><Link href="/insights/restaurant-marketing-agency-cost-uk">How much does a restaurant marketing agency cost in the UK? →</Link></p>
        <p><Link href="/insights/is-a-restaurant-marketing-agency-worth-it">Is a restaurant marketing agency worth it? →</Link></p>
        <p><Link href="/insights/how-to-choose-a-restaurant-marketing-agency">How to choose a restaurant marketing agency →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-vs-freelancer">Restaurant marketing agency vs freelancer →</Link></p>
      </section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Restaurant marketing agency FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>

      <section className="restaurant-final"><span>Next service</span><h2>Which part of the week<br/>needs to be <em>fuller?</em></h2><p>Bring us the trading problem, not a channel wish list.</p><Link className="button button-cream" href="/start?type=restaurant">Find my restaurant starting point <span>↗</span></Link></section>
    </main>
  </>;
}
