import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const pageUrl = `${siteUrl}/restaurant-seo-agency`;

export const metadata: Metadata = {
  title: "Restaurant SEO Agency UK | SEO From £295 | NO QUIET NIGHTS",
  description: "Restaurant SEO for UK independents and groups. Technical SEO, local search, Google Business Profile, cuisine and occasion pages, AI visibility and conversion thinking from £295/month.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Restaurant SEO Agency UK | NO QUIET NIGHTS",
    description: "Restaurant SEO built around useful discovery, direct bookings and the searches that matter commercially. Plans from £295/month.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteUrl}/images/stock/restaurant-05-cozy-modern-interior.jpg`, alt: "Warm modern restaurant interior prepared for diners" }],
  },
};

const faqs = [
  ["What does a restaurant SEO agency do?", "A restaurant SEO agency improves how a venue is discovered across Google and other search systems, then strengthens the website journey that turns that discovery into useful action. Work can include technical SEO, Google Business Profile, local search, cuisine and occasion pages, internal linking, structured data, content architecture, AI-search visibility and conversion measurement."],
  ["How much does restaurant SEO cost in the UK?", "NO QUIET NIGHTS includes restaurant SEO within the £295/month Visibility plan. It includes Starter social support, Google Business Profile optimisation and updates, local SEO, location and intent keyword tracking and monthly visibility reporting. Larger scopes can sit inside Demand at £495 or Full House at £1,000 when paid acquisition, CRM and broader conversion work are also needed."],
  ["How is restaurant SEO different from restaurant local SEO?", "Local SEO is the narrower part of the job focused on Maps, Google Business Profile, near-me, neighbourhood and location-intent searches. Restaurant SEO is broader. It also covers technical SEO, site architecture, menu and occasion pages, internal linking, organic content, structured data and the ability of the whole website to be understood and surfaced by search engines and answer systems."],
  ["How long does restaurant SEO take?", "SEO is cumulative and timing varies by competition, the current condition of the site, local authority, technical issues and the strength of the restaurant proposition. We do not promise a ranking date. We prioritise the work, track visibility and useful actions, and adjust from evidence."],
  ["Can restaurant SEO increase bookings?", "SEO can improve the number and quality of diners who discover a restaurant organically and can reduce friction between discovery and booking. That can support bookings, but we do not guarantee a specific number of covers or revenue from SEO."],
  ["What restaurant searches should SEO target?", "The useful search set usually includes a mix of brand, cuisine, location, neighbourhood, occasion, private dining, menu, dietary, seasonal and high-intent comparison searches. The exact map should follow the restaurant's catchment, proposition, service pattern and commercial priorities rather than generic search volume."],
  ["Do menu pages matter for restaurant SEO?", "Yes, when they are useful to diners and crawlable by search engines. Important menu information should not be trapped only inside an image or inaccessible PDF. Clear HTML content, descriptive page structure and strong internal linking can help both people and search systems understand what the restaurant offers."],
  ["Do you optimise restaurants for AI Overviews and ChatGPT?", "We structure important facts, services, locations and high-intent answers clearly, use consistent entities and structured data, and build pages that can stand alone as useful answers. No agency can guarantee inclusion in an AI answer, but clear, trustworthy and extractable content improves the site's ability to be understood."],
  ["Should a restaurant choose SEO or Google Ads?", "SEO builds organic discovery over time. Google Ads buys immediate visibility for selected searches. If there is urgent, high-value demand to capture, paid search can make sense alongside SEO. If the core issue is weak long-term discovery, poor site architecture or an underdeveloped local presence, SEO may be the more sensible first move."],
  ["Can you guarantee page-one rankings?", "No. We do not guarantee page-one rankings, a fixed Map Pack position, covers or revenue. Search results are competitive and controlled by third-party platforms. We improve the parts we can control and measure the evidence available."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Restaurant SEO Agency UK",
      serviceType: "Restaurant search engine optimisation",
      description: "Restaurant SEO across technical SEO, local search, Google Business Profile, cuisine and occasion pages, internal linking, structured data and AI-search visibility.",
      url: pageUrl,
      provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      audience: { "@type": "Audience", audienceType: "Independent restaurants, restaurant groups and hospitality operators" },
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "295", description: "Restaurant SEO is included in the Visibility plan from £295 per month." },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Restaurant SEO Agency UK", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

export default function RestaurantSeoAgencyPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">Restaurant SEO agency UK · From £295/month</p>
          <h1>Own more of the searches that can become a <em>table.</em></h1>
          <strong>Restaurant SEO is not about collecting rankings. It is about earning useful visibility when diners are deciding where, what and why to book.</strong>
          <p>NO QUIET NIGHTS helps UK restaurants strengthen organic discovery across Google, Maps and search-led website journeys. That can include technical SEO, Google Business Profile, cuisine and occasion pages, internal linking, structured data and clearer content for AI search, all tied back to the commercial job.</p>
          <div className="service-hero-actions">
            <Link className="button button-ink" href="/start?type=restaurant">Find the search gap ↗</Link>
            <Link className="text-link" href="/pricing">Visibility from £295 →</Link>
          </div>
        </div>
        <figure className="service-detail-image">
          <img src="/images/stock/restaurant-05-cozy-modern-interior.jpg" alt="Warm modern restaurant interior prepared for diners" />
          <figcaption>Stock hospitality image, used for illustrative purposes</figcaption>
        </figure>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>A restaurant SEO agency should make you easier to find for the searches that <em>matter commercially.</em></h2>
        <p>For a restaurant, SEO should connect search demand to a real trading opportunity. That might mean appearing for cuisine and neighbourhood searches, private dining, date-night or celebration intent, seasonal menus, dietary needs, branded searches or questions about what the venue offers. The job is not to rank for everything. It is to earn visibility where the searcher could plausibly become a guest, then make the next step easy.</p>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">How restaurant search becomes demand</p>
        <h2>Search → consideration → confidence → <em>action.</em></h2>
        <ol>
          <li><span>01</span><h3>Search</h3><p>The diner asks Google or an answer engine about a cuisine, place, occasion, menu, dietary need or restaurant recommendation.</p></li>
          <li><span>02</span><h3>Consideration</h3><p>Your profile or page needs enough relevance to earn the click, map action or comparison.</p></li>
          <li><span>03</span><h3>Confidence</h3><p>Menu clarity, reviews, photography, proposition, location and useful answers help the diner decide whether you fit the moment.</p></li>
          <li><span>04</span><h3>Action</h3><p>A fast, obvious route to reserve, call, get directions or enquire gives the search demand somewhere to go.</p></li>
        </ol>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head">
          <p className="eyebrow">What restaurant SEO actually includes</p>
          <h2>Fix the search system, not just the <em>keywords.</em></h2>
          <p>Current restaurant SEO competitors increasingly talk about Maps, occasion searches, menu SEO, technical performance and AI visibility. That is directionally right. The important part is deciding which of those jobs your restaurant genuinely needs.</p>
        </div>
        <div className="work-list">
          <article><span>01</span><div><h3>Technical SEO</h3><p>Check crawlability, indexation, page speed, mobile usability, metadata, canonicals, structured data and obvious technical blockers that can prevent useful pages from competing.</p></div></article>
          <article><span>02</span><div><h3>Site and content architecture</h3><p>Give important restaurant intent its own useful destination instead of forcing every search through the homepage. That can include cuisine, menu, occasion, private dining, launch, location and service pages where justified.</p></div></article>
          <article><span>03</span><div><h3>Google Business Profile and local discovery</h3><p>Keep core business information accurate and strengthen the profile as a discovery surface. For deeper Maps and neighbourhood work, see our dedicated <Link href="/restaurant-local-seo-agency">restaurant local SEO service</Link>.</p></div></article>
          <article><span>04</span><div><h3>Cuisine, occasion and seasonal intent</h3><p>Target the searches that reflect real dining decisions, such as cuisine plus location, birthday dinner, private dining, pre-theatre, Sunday lunch, Valentine's, Christmas and other moments that genuinely fit the venue.</p></div></article>
          <article><span>05</span><div><h3>Menu and offer discoverability</h3><p>Make important menu information understandable in HTML, use descriptive headings and support it with internal links so both diners and search systems can understand what is actually available.</p></div></article>
          <article><span>06</span><div><h3>Internal linking and authority</h3><p>Connect relevant pages deliberately so search engines can understand the relationship between the restaurant, its location, cuisine, occasions, services and commercial landing pages.</p></div></article>
          <article><span>07</span><div><h3>AI search readability</h3><p>Use direct answers, clear entities, consistent business information and structured data so important pages are easier for Google AI Overviews, ChatGPT and other answer systems to interpret. Inclusion is never guaranteed.</p></div></article>
          <article><span>08</span><div><h3>Conversion and measurement</h3><p>Track useful visibility alongside calls, directions, organic landing-page visits, booking clicks and enquiries where available. Traffic without commercial context is incomplete reporting.</p></div></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head">
          <p className="eyebrow">Restaurant SEO vs local SEO</p>
          <h2>They overlap, but they are not the same job.</h2>
        </div>
        <div className="proof-grid">
          <article><span>Broad organic search</span><h3>Restaurant SEO</h3><p>Technical SEO, website architecture, cuisine and occasion pages, menus, internal linking, structured data, organic content, AI readability and site-wide search performance.</p></article>
          <article><span>Local discovery</span><h3>Restaurant local SEO</h3><p>Google Business Profile, Maps, near-me searches, neighbourhood relevance, local citations and location-intent visibility. This is the narrower local layer.</p></article>
          <article><span>Commercial rule</span><h3>Do not create pages just because a keyword exists</h3><p>A new landing page should have a distinct search intent and buyer job. If two pages would answer the same question in the same way, they should not both exist.</p></article>
        </div>
      </section>

      <section className="plan-selector section-pad">
        <div className="selector-head"><p className="eyebrow">Which SEO problem do you actually have?</p><h2>Start with the bottleneck.</h2></div>
        <div className="selector-list">
          <Link href="/restaurant-local-seo-agency"><span>You are weak in Maps, neighbourhood and near-me discovery.</span><b>Local visibility problem</b><i>↗</i></Link>
          <Link href="/restaurant-private-dining-marketing"><span>Your private dining or group-booking proposition is hard to find organically.</span><b>Occasion-search problem</b><i>↗</i></Link>
          <Link href="/restaurant-website-conversion-agency"><span>People reach the site but the menu, mobile experience or booking journey leaks demand.</span><b>Conversion problem</b><i>↗</i></Link>
          <Link href="/restaurant-google-ads-agency"><span>You need immediate paid visibility while organic search builds or for selected high-intent terms.</span><b>Urgency problem</b><i>↗</i></Link>
        </div>
      </section>

      <section className="service-outcomes section-pad">
        <div className="service-section-head"><p className="eyebrow">What should restaurant SEO measure?</p><h2>The metric should follow the search job.</h2></div>
        <div className="outcome-grid">
          <article><span>01</span><h2>Visibility: relevant organic and local search coverage, not a vanity list of unrelated keywords.</h2></article>
          <article><span>02</span><h2>Discovery: profile actions, organic landing-page visits, calls and directions where available.</h2></article>
          <article><span>03</span><h2>Conversion: booking clicks, enquiries and other meaningful actions from organic journeys where tracking allows.</h2></article>
          <article><span>04</span><h2>Coverage: whether the site is becoming a stronger answer for the cuisines, occasions, locations and services the restaurant actually wants to own.</h2></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Pricing</p><h2>Restaurant SEO begins inside Visibility at £295/month.</h2></div>
        <div className="proof-grid">
          <article><span>£295 / month</span><h3>Visibility</h3><p>Starter social plus Google Business Profile optimisation and updates, local SEO, location and intent keyword tracking and monthly visibility reporting.</p></article>
          <article><span>£495 / month</span><h3>Demand</h3><p>Visibility plus one managed paid channel, landing-page support, conversion tracking, email/CRM and monthly performance review when SEO is only one part of the acquisition problem. Ad spend is separate.</p></article>
          <article><span>£1,000 / month</span><h3>Full House</h3><p>For a connected system across SEO growth, Meta, Google, CRM automation, database growth, retargeting, win-back and ongoing website optimisation. Ad spend and custom production are separate.</p></article>
        </div>
        <p><Link className="button button-ink" href="/restaurant-marketing-packages">Compare restaurant packages →</Link></p>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">When SEO is the right first move</p>
        <h2>Choose SEO when the restaurant is too easy to miss, or the website is too weak to deserve more traffic.</h2>
        <ul>
          <li><span>01</span><p>Competitors consistently outrank you for cuisine, location or occasion searches that fit your offer.</p></li>
          <li><span>02</span><p>Your website has one generic page trying to answer every dining intent.</p></li>
          <li><span>03</span><p>Your menu or key restaurant information is difficult for search engines or mobile users to understand.</p></li>
          <li><span>04</span><p>You rely heavily on paid acquisition or aggregators and want a stronger owned discovery channel over time.</p></li>
          <li><span>05</span><p>You have a strong venue and reviews, but your organic search footprint does not reflect the actual proposition.</p></li>
        </ul>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">When SEO is not the whole answer</p>
        <h2>More organic traffic will not repair a weak restaurant proposition.</h2>
        <ul>
          <li><span>01</span><p>If reviews, service, menu clarity or the booking journey are badly broken, those issues may need attention before more visibility.</p></li>
          <li><span>02</span><p>If you need demand for a specific event next week, SEO alone may be too slow. Paid media may be the more appropriate short-term tool.</p></li>
          <li><span>03</span><p>If people already find you but do not book, the bottleneck may be conversion rather than discovery.</p></li>
          <li><span>04</span><p>If the real problem is one quiet service, the answer may be a stronger proposition and campaign, not a broad SEO programme.</p></li>
        </ul>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">How we approach restaurant SEO</p>
        <h2>Diagnose → Prioritise → Launch → <em>Learn.</em></h2>
        <ol>
          <li><span>01</span><h3>Diagnose</h3><p>Map the restaurant's commercial priorities, current search footprint, technical issues, content gaps, local presence and conversion journey.</p></li>
          <li><span>02</span><h3>Prioritise</h3><p>Separate high-value fixes from SEO theatre. A broken booking path can matter more than another blog post.</p></li>
          <li><span>03</span><h3>Launch</h3><p>Implement the agreed technical, local, content, page and structured-data work in a sensible order.</p></li>
          <li><span>04</span><h3>Learn</h3><p>Review visibility and useful actions, then refine around what is becoming more discoverable and what still blocks demand.</p></li>
        </ol>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">A simple commercial test</p>
        <h2>Before chasing a keyword, ask what happens if you <em>win it.</em></h2>
        <p>Imagine a restaurant identifies a search theme around private dining or a high-value occasion. The useful question is not simply “how many searches does this get?” It is: how relevant is that demand, how many suitable enquiries could the venue actually handle, what is the likely value of a booking, and does the site give that searcher a convincing destination? Search volume is context. Commercial fit is the decision.</p>
        <p><strong>This is a decision framework, not a forecast or revenue guarantee.</strong></p>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Restaurant SEO buyer guides</p>
        <h2>Do the homework<br/><em>before you hire.</em></h2>
        <p><Link href="/insights/restaurant-seo-cost-uk">How much does restaurant SEO cost in the UK? →</Link></p>
        <p><Link href="/insights/hospitality-local-seo-cost-uk">Hospitality local SEO cost UK →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-specialist-vs-generalist">Restaurant specialist vs generalist agency →</Link></p>
        <p><Link href="/restaurant-local-seo-agency">Restaurant local SEO agency UK →</Link></p>
        <p><Link href="/restaurant-google-ads-agency">Restaurant Google Ads agency UK →</Link></p>
      </section>

      <section className="section-pad">
        <p className="eyebrow">Before you hire a restaurant SEO agency</p>
        <h2>Ask questions that expose whether the work is commercial or cosmetic.</h2>
        <div className="work-list">
          <article><span>01</span><div><h3>What search intents are you prioritising, and why?</h3><p>The answer should connect keywords to actual dining behaviour, not only search volume.</p></div></article>
          <article><span>02</span><div><h3>How will you separate local SEO from broader organic SEO?</h3><p>You should know what is happening in Maps and GBP versus the website itself.</p></div></article>
          <article><span>03</span><div><h3>What happens after the click?</h3><p>An agency focused only on rankings may miss the menu, mobile, booking and enquiry friction that wastes the visibility.</p></div></article>
          <article><span>04</span><div><h3>What will you report?</h3><p>Expect context around useful visibility and actions, not a spreadsheet of keyword movement with no trading relevance.</p></div></article>
          <article><span>05</span><div><h3>What do you refuse to guarantee?</h3><p>A credible agency should be able to explain why it cannot promise fixed rankings, AI citations, covers or revenue.</p></div></article>
        </div>
      </section>

      <section className="section-pad">
        <p className="eyebrow">Frequently asked questions</p>
        <h2>Restaurant SEO agency FAQs</h2>
        {faqs.map(([q, a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}
      </section>

      <section className="service-next section-pad">
        <p className="eyebrow">Next step</p>
        <h2>Which search should end with a table at <em>yours?</em></h2>
        <p>Bring us the cuisine, location, occasion or search gap you think matters. We will tell you whether the problem is local SEO, broader organic search, conversion, paid demand or something else.</p>
        <div><Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit ↗</Link><Link className="text-link" href="/pricing">Compare plans →</Link></div>
      </section>
    </main>
  </>;
}
