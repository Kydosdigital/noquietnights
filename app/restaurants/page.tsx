import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "../components/lead-form";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency UK",
  description: "Restaurant marketing agency for UK independents and groups. Local SEO, social media, Google Ads, Meta ads, booking journeys and repeat-customer marketing.",
  alternates: { canonical: "/restaurants" },
  openGraph: {
    title: "Restaurant Marketing Agency UK | No Quiet Nights",
    description: "Restaurant marketing built around getting found, getting booked and bringing diners back.",
    url: "/restaurants",
    type: "website",
  },
};

const faqs = [
  ["What does a restaurant marketing agency do?", "A restaurant marketing agency helps more people find you, choose you, book and come back. That can include Google visibility, social media, ads, website improvements and customer follow-up."],
  ["Can restaurant marketing help fill quieter days?", "Yes. The strongest campaigns focus on a specific quiet service, audience and reason to visit instead of trying to make every day busier at once."],
  ["How should restaurant marketing be measured?", "Use measures that match the job, such as Google searches, website visits, bookings, covers on quieter services, private dining enquiries and repeat visits."],
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
          <h1>Restaurant marketing that helps fill <em>quieter services.</em></h1>
          <p>We help restaurants get found, win more bookings and give diners reasons to come back. That can mean Google, social media, ads, website improvements or customer follow-up, depending on where you need help.</p>
          <div><Link className="button button-ink" href="#contact">Talk about my restaurant <span>↗</span></Link><Link className="text-link" href="/pricing">See pricing →</Link></div>
        </div>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">How restaurant marketing works</p>
        <h2>Get found. Get chosen.<br/><em>Get booked. Come back.</em></h2>
        <ol>
          <li><span>01</span><h3>Get found</h3><p>Google, Maps, reviews and social media help local diners discover you.</p></li>
          <li><span>02</span><h3>Get chosen</h3><p>Menus, photos, reviews and offers give people a reason to pick your restaurant.</p></li>
          <li><span>03</span><h3>Get booked</h3><p>A clear mobile website and simple booking route make it easy to reserve a table.</p></li>
          <li><span>04</span><h3>Come back</h3><p>Email, SMS, birthdays, events and new offers give previous diners reasons to return.</p></li>
        </ol>
      </section>

      <section className="plan-selector section-pad">
        <div className="selector-head"><p className="eyebrow">Restaurant marketing services</p><h2>Start with what<br/><em>needs help.</em></h2></div>
        <div className="selector-list">
          <Link href="/services/local-seo"><span>Show up when people nearby search for restaurants like yours.</span><b>Local SEO for restaurants</b><i>↗</i></Link>
          <Link href="/services/social-media-management"><span>Keep your social pages active with food, atmosphere, offers and reasons to visit.</span><b>Restaurant social media</b><i>↗</i></Link>
          <Link href="/services/paid-ads"><span>Use Google and Meta ads for bookings, private dining, launches and quieter services.</span><b>Restaurant ads</b><i>↗</i></Link>
          <Link href="/services/crm-repeat-customers"><span>Keep customer details and run birthday, VIP and win-back campaigns.</span><b>Repeat customers</b><i>↗</i></Link>
        </div>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Restaurant buyer guides</p>
        <h2>Research the decision<br/><em>before you hire.</em></h2>
        <p><Link href="/insights/restaurant-marketing-agency-cost-uk">How much does a restaurant marketing agency cost in the UK? →</Link></p>
        <p><Link href="/insights/is-a-restaurant-marketing-agency-worth-it">Is a restaurant marketing agency worth it? →</Link></p>
        <p><Link href="/insights/how-to-choose-a-restaurant-marketing-agency">How to choose a restaurant marketing agency →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-vs-freelancer">Restaurant marketing agency vs freelancer →</Link></p>
      </section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Restaurant marketing FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>
      <LeadForm eyebrow="Restaurant enquiry" heading="Which service, sitting or revenue line needs help?" />
      <section className="restaurant-final"><span>Next step</span><h2>Which part of the week<br/>needs to be <em>fuller?</em></h2><p>Tell us the problem. We will tell you where we would start.</p><Link className="button button-cream" href="#contact">Find my starting point <span>↗</span></Link></section>
    </main>
  </>;
}
