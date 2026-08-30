import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency UK | Plans From £165 | NO QUIET NIGHTS",
  description: "UK restaurant marketing agency for independents and groups. Social, local SEO, Google Ads, Meta ads, booking conversion and CRM, with plans from £165/month.",
  alternates: { canonical: `${siteUrl}/restaurants` },
  openGraph: { title: "Restaurant Marketing Agency UK | NO QUIET NIGHTS", description: "Restaurant marketing built around fuller services, direct bookings and repeat demand. Plans from £165/month.", url: `${siteUrl}/restaurants`, type: "website" },
};

const faqs = [
  ["What does a restaurant marketing agency do?", "A restaurant marketing agency helps a restaurant get found, get chosen, convert interest into bookings and bring guests back. The work can include social media, local SEO, Google Business Profile, Google Ads, Meta ads, landing pages, email and CRM."],
  ["How much does a restaurant marketing agency cost in the UK?", "NO QUIET NIGHTS restaurant marketing plans start at £165 per month. Visibility is £295, Demand is £495 and Full House is £1,000 per month. Advertising spend and custom on-site production are separate."],
  ["Can restaurant marketing help fill quiet weekdays?", "It can support quieter services when the campaign is built around a specific service, audience, proposition and measurable booking journey. Marketing cannot guarantee covers, but it can improve discovery, persuasion and demand capture."],
  ["Do you work with independent restaurants?", "Yes. The pricing structure is deliberately designed so independent restaurants can start with a focused problem instead of buying every marketing channel at once."],
  ["What is included in restaurant local SEO?", "The Visibility plan includes Google Business Profile optimisation and updates, local SEO, location and intent keyword tracking and monthly visibility reporting, alongside Starter social support."],
  ["Do you manage restaurant Google Ads and Meta Ads?", "Yes. Demand includes management of one paid channel, Google Ads or Meta Ads. Full House includes both. Media spend is separate from the management fee."],
  ["How should restaurant marketing be measured?", "Measurement should follow the job. Useful signals can include local search visibility, calls, directions, website visits, booking actions, enquiries, paid conversion data, database growth and repeat-customer activity where tracking is available."],
  ["Do you guarantee bookings or Google rankings?", "No. Marketing agencies cannot responsibly guarantee a particular ranking, number of covers or revenue outcome. We define the commercial objective, implement the work and measure the evidence available."],
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", "@id": `${siteUrl}/restaurants#service`, name: "Restaurant Marketing Agency UK", serviceType: "Restaurant marketing services", description: "UK restaurant marketing across social media, local SEO, Google Ads, Meta ads, booking conversion, email and CRM.", url: `${siteUrl}/restaurants`, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl }, areaServed: { "@type": "Country", name: "United Kingdom" }, audience: { "@type": "Audience", audienceType: "Independent restaurants, restaurant groups and hospitality operators" }, offers: { "@type": "Offer", priceCurrency: "GBP", price: "165", description: "Restaurant marketing plans start from £165 per month." } },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Restaurant Marketing Agency UK", item: `${siteUrl}/restaurants` }] },
  { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
]};

export default function RestaurantsPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="restaurant-hero page-top">
        <div className="restaurant-hero-photo"><img src="/images/stock/chef-24-team-plating-kitchen.jpg" alt="Chefs plating dishes during restaurant service" /></div>
        <div className="restaurant-hero-copy">
          <p className="eyebrow">Restaurant marketing agency UK · Plans from £165/month</p>
          <h1>Fill the week.<br/><em>Not just Saturday.</em></h1>
          <p>NO QUIET NIGHTS is a UK restaurant marketing agency for operators who want marketing connected to the thing that matters: more useful demand. We help restaurants get found, get chosen, get booked and give guests a reason to come back.</p>
          <div><Link className="button button-ink" href="/start?type=restaurant">Find my starting point <span>↗</span></Link><Link className="text-link" href="/pricing">Compare plans from £165 →</Link></div>
        </div>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>Restaurant marketing should make the right thing <em>busier.</em></h2>
        <p>A restaurant marketing agency should not begin with “you need more posts”. It should begin with the commercial gap. Maybe Tuesday dinner is soft. Maybe people find you on Google but do not book. Maybe private dining enquiries are weak. Maybe first-time diners never hear from you again. The channel comes after the diagnosis.</p>
        <Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit ↗</Link>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">The restaurant demand journey</p>
        <h2>Found → Chosen →<br/><em>Booked → Brought back.</em></h2>
        <ol>
          <li><span>01</span><h3>Be found</h3><p>Google, Maps, local SEO, reviews, social discovery and paid search put the restaurant in the consideration set.</p></li>
          <li><span>02</span><h3>Be chosen</h3><p>Food, atmosphere, menus, reviews, offers and a clear reason to visit help the diner choose you over the next tab.</p></li>
          <li><span>03</span><h3>Get booked</h3><p>Fast pages, clear calls to action, good mobile UX and a simple reservation path reduce friction between interest and action.</p></li>
          <li><span>04</span><h3>Bring them back</h3><p>Email, CRM, birthdays, events, menu launches and win-back campaigns turn the first visit into an owned customer relationship.</p></li>
        </ol>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">What we actually solve</p><h2>Start with the <em>empty seat.</em></h2><p>Restaurant inventory is perishable. An empty table at 7pm on Tuesday cannot be sold on Wednesday. That changes how we think about marketing.</p></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Quiet weekday services</h3><p>Build a specific reason for the right local audience to choose a softer lunch, early week or evening service.</p></div></article>
          <article><span>02</span><div><h3>Weak local discovery</h3><p>Improve Google Business Profile, local search coverage and the pages people meet when they search by cuisine, place or occasion.</p></div></article>
          <article><span>03</span><div><h3>Attention that does not convert</h3><p>Strengthen the proposition, landing page, menu visibility and booking path instead of buying more traffic into a leak.</p></div></article>
          <article><span>04</span><div><h3>Private dining and group bookings</h3><p>Package the occasion clearly, build dedicated conversion journeys and put demand in front of people planning higher-value visits.</p></div></article>
          <article><span>05</span><div><h3>One-and-done customers</h3><p>Build database capture, useful follow-up, birthdays, VIP moments and win-back activity so the relationship does not end at the till.</p></div></article>
        </div>
      </section>

      <section className="plan-selector section-pad">
        <div className="selector-head"><p className="eyebrow">Restaurant marketing services</p><h2>Channels are tools.<br/><em>The job is demand.</em></h2></div>
        <div className="selector-list">
          <Link href="/services/social-media-management"><span>Instagram, Facebook and TikTok planning, design, editing and ongoing content.</span><b>Restaurant social media</b><i>↗</i></Link>
          <Link href="/services/local-seo"><span>Google Business Profile, local SEO and intent-led visibility for people deciding where to eat.</span><b>Restaurant local SEO</b><i>↗</i></Link>
          <Link href="/services/paid-ads"><span>Google Ads and Meta campaigns for bookings, launches, private dining and softer trading moments.</span><b>Restaurant paid media</b><i>↗</i></Link>
          <Link href="/services/crm-repeat-customers"><span>Email, customer databases, win-back activity and reasons for previous diners to return.</span><b>Restaurant CRM & retention</b><i>↗</i></Link>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Choose the smallest plan that solves today's problem</p><h2>Restaurant marketing packages from £165/month.</h2></div>
        <div className="proof-grid">
          <article><span>£165 / month</span><h3>Starter</h3><p>For restaurants that need consistent social across Instagram, Facebook and TikTok, with three planned posts a week, design/video editing, calendar and strategy, plus Stories.</p></article>
          <article><span>£295 / month</span><h3>Visibility</h3><p>Starter plus Google Business Profile optimisation and updates, local SEO, location-intent keyword tracking and monthly visibility reporting.</p></article>
          <article><span>£495 / month</span><h3>Demand</h3><p>Visibility plus one managed paid channel, a landing page, conversion tracking, email/CRM and a monthly performance review. Ad spend is separate.</p></article>
        </div>
        <div className="proof-grid">
          <article><span>£1,000 / month</span><h3>Full House</h3><p>Meta and Google, SEO growth, CRM automation, database growth, retargeting, win-back, offer planning, website optimisation and advanced reporting. Ad spend and on-site production are separate.</p></article>
          <article><span>Commercial rule</span><h3>Do not overbuy</h3><p>If Starter solves the current problem, start there. Scale when the numbers, opportunity or next bottleneck justify more capability.</p></article>
          <article><span>What is separate</span><h3>No hidden assumptions</h3><p>Advertising media budgets and custom on-site photography or videography are separately scoped, so the management fee stays understandable.</p></article>
        </div>
        <p><Link className="button button-ink" href="/pricing">See full pricing →</Link></p>
      </section>

      <section className="service-outcomes section-pad">
        <div className="service-section-head"><p className="eyebrow">What should we measure?</p><h2>The metric follows the job.</h2></div>
        <div className="outcome-grid">
          <article><span>01</span><h2>Local discovery: relevant rankings, profile actions, calls, directions and qualified website visits.</h2></article>
          <article><span>02</span><h2>Demand: paid conversion data, booking actions, enquiries and the economics of the campaign where tracking allows.</h2></article>
          <article><span>03</span><h2>Retention: database growth, email response, repeat-customer campaigns and win-back activity.</h2></article>
          <article><span>04</span><h2>Trading: the service, occasion or revenue opportunity the marketing was actually asked to support.</h2></article>
        </div>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">Who this is for</p><h2>Built for restaurants that want marketing connected to trading.</h2>
        <ul>
          <li><span>01</span>Independent restaurants that need a sensible starting point, not an oversized retainer.</li>
          <li><span>02</span>Restaurant groups that need clearer local discovery, acquisition and retention across the customer journey.</li>
          <li><span>03</span>New openings that need launch demand before and after opening night.</li>
          <li><span>04</span>Fine-dining and occasion-led venues where choice, trust and presentation matter before the booking.</li>
          <li><span>05</span>Operators who care more about covers, enquiries and repeat demand than follower counts.</li>
        </ul>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Restaurant buyer guides</p><h2>Do the homework<br/><em>before you hire.</em></h2>
        <p><Link href="/insights/restaurant-marketing-agency-cost-uk">Restaurant marketing agency cost UK: what should you pay? →</Link></p>
        <p><Link href="/insights/is-a-restaurant-marketing-agency-worth-it">Is a restaurant marketing agency worth it? →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-vs-freelancer">Restaurant marketing agency vs freelancer →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-vs-in-house">Restaurant marketing agency vs in-house team →</Link></p>
        <p><Link href="/insights/restaurant-seo-cost-uk">How much does restaurant SEO cost in the UK? →</Link></p>
        <p><Link href="/insights/how-much-should-a-restaurant-spend-on-marketing">How much should a restaurant spend on marketing? →</Link></p>
      </section>

      <section className="section-pad">
        <p className="eyebrow">Frequently asked questions</p><h2>Restaurant marketing agency FAQs</h2>
        {faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}
      </section>

      <section className="restaurant-final"><span>Next step</span><h2>Where is trade softer<br/>than it should be?</h2><p>Bring us the quiet service, weak launch, underused room or disconnected marketing problem. We will point to the smallest sensible starting point.</p><Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit <span>↗</span></Link></section>
    </main>
  </>;
}
