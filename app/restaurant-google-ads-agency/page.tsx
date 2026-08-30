import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const pageUrl = `${siteUrl}/restaurant-google-ads-agency`;

export const metadata: Metadata = {
  title: "Restaurant Google Ads Agency UK | From £495 | NO QUIET NIGHTS",
  description: "Google Ads management for UK restaurants, focused on high-intent search, bookings, private dining, launches and measurable demand. Demand plans from £495/month, ad spend separate.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Restaurant Google Ads Agency UK | NO QUIET NIGHTS",
    description: "Restaurant Google Ads built around high-intent search, cleaner booking journeys and measurable commercial demand.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteUrl}/images/stock/restaurant-12-table-setting-menu.jpg`, alt: "Restaurant table setting and menu ready for guests" }],
  },
};

const faqs = [
  ["Do Google Ads work for restaurants?", "They can work when there is enough relevant search demand, the restaurant has a clear reason to be chosen, and the booking or enquiry journey is strong enough to convert paid traffic. Google Ads are best treated as demand capture, not a guarantee of covers."],
  ["How much does restaurant Google Ads management cost?", "NO QUIET NIGHTS Demand is £495 per month and includes one managed paid channel, Google Ads or Meta Ads, alongside local visibility, landing-page support, conversion tracking, email or CRM and a monthly growth review. Advertising media spend is separate."],
  ["How much should a restaurant spend on Google Ads?", "There is no sensible universal budget. The right media budget depends on location, search volume, average booking or enquiry value, competition, conversion rate and how tightly the campaign can be targeted. We prefer a controlled test with a clear commercial hypothesis rather than spending broadly without evidence."],
  ["What searches can restaurants advertise against?", "Useful themes can include cuisine and location searches, private dining, group bookings, events, occasions, branded demand and selected high-value service searches. The campaign should follow the commercial opportunity rather than chase every keyword with restaurant intent."],
  ["Can Google Ads help with private dining?", "Yes, when people are actively searching for private rooms, group dining, corporate dinners or celebration venues. These searches often need a dedicated landing page that explains capacity, format, menus, location and the enquiry process."],
  ["Should a restaurant use Google Ads or Meta Ads?", "Google Ads are stronger when people are already searching with clear intent. Meta Ads are stronger when the restaurant needs to create, shape or retarget demand. The right choice depends on whether the problem is demand capture or demand creation."],
  ["What should restaurant Google Ads track?", "Useful tracking can include calls, reservation-platform clicks, booking actions, private dining forms, event enquiries and other measurable commercial actions. Where the restaurant's systems allow, stronger attribution can connect paid traffic to completed bookings or revenue."],
  ["Do you optimise restaurant Google Ads by day or location?", "Where the data and search volume justify it, campaigns can use geographical targeting, dayparting, device data and service-specific intent to reduce waste. These controls should be based on evidence rather than arbitrary assumptions."],
  ["Can you guarantee a return on Google Ads?", "No. We do not guarantee bookings, revenue, ROAS or a fixed cost per acquisition. We build the campaign around measurable intent, improve the conversion journey and optimise according to the evidence available."],
  ["When should a restaurant not run Google Ads?", "Google Ads may be the wrong first move when search demand is too weak, the website or booking journey is broken, the restaurant has no clear proposition, or the economics cannot support paid acquisition. In those cases the leak should be fixed before buying more traffic."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Restaurant Google Ads Agency UK",
      serviceType: "Restaurant Google Ads and paid search management",
      description: "Google Ads management for UK restaurants, including high-intent local search, private dining, event and launch campaigns, landing-page support and conversion tracking.",
      url: pageUrl,
      provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      audience: { "@type": "Audience", audienceType: "Independent restaurants, restaurant groups and hospitality operators" },
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "495", description: "Demand plan from £495 per month. Advertising media spend is separate." },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Restaurant Google Ads Agency UK", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

export default function RestaurantGoogleAdsAgencyPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">Restaurant Google Ads agency UK · Demand from £495/month</p>
          <h1>Capture demand when diners are already searching.</h1>
          <strong>Restaurant Google Ads should buy high-intent opportunities, not expensive clicks with nowhere useful to go.</strong>
          <p>NO QUIET NIGHTS plans and manages Google Ads for UK restaurants around specific commercial jobs: local dining demand, private dining, launches, events, occasions and other searches where someone is already showing intent. We connect keyword, ad, landing page, booking journey and tracking so the campaign can be judged on useful actions rather than impressions alone.</p>
          <div className="service-hero-actions">
            <Link className="button button-ink" href="/start?type=restaurant">Discuss Google Ads ↗</Link>
            <Link className="text-link" href="/pricing">See Demand from £495 →</Link>
          </div>
        </div>
        <figure className="service-detail-image">
          <img src="/images/stock/restaurant-12-table-setting-menu.jpg" alt="Restaurant table setting and menu ready for guests" />
          <figcaption>Stock hospitality image, used for illustrative purposes</figcaption>
        </figure>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>Buy the search only if the <em>journey can convert it.</em></h2>
        <p>Google Ads can place a restaurant in front of people already searching for somewhere to eat, a private room, a group dinner or a specific occasion. But paid visibility does not fix a weak proposition, confusing menu, slow website or broken booking route. The commercial job is to connect high-intent search with a persuasive destination and measurable next action.</p>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">The paid-search journey</p>
        <h2>Search → Ad → Landing page → <em>Booking action.</em></h2>
        <ol>
          <li><span>01</span><h3>Search</h3><p>Start with the actual intent: cuisine, location, occasion, private dining, event or another commercially useful query.</p></li>
          <li><span>02</span><h3>Ad</h3><p>Match the search with a credible reason to click instead of generic claims that could belong to any restaurant.</p></li>
          <li><span>03</span><h3>Landing page</h3><p>Send the diner to the information that answers the query quickly: menu, room, offer, event, opening details or booking proposition.</p></li>
          <li><span>04</span><h3>Action</h3><p>Track the next step where possible, whether that is a call, booking click, reservation action, group enquiry or private dining form.</p></li>
        </ol>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head">
          <p className="eyebrow">What we manage</p>
          <h2>Paid search with a <em>commercial job.</em></h2>
          <p>A restaurant account should not be one large campaign bidding on everything. We structure the work around the demand worth paying to capture.</p>
        </div>
        <div className="work-list">
          <article><span>01</span><div><h3>Keyword and intent mapping</h3><p>Separate useful buying intent from research, irrelevant traffic and broad searches unlikely to become a visit.</p></div></article>
          <article><span>02</span><div><h3>Local dining demand</h3><p>Compete for cuisine, area and occasion searches where the restaurant has a genuine proposition and realistic catchment.</p></div></article>
          <article><span>03</span><div><h3>Private dining and groups</h3><p>Capture higher-value searches with dedicated ads and landing pages for rooms, celebrations, corporate dinners and group occasions.</p></div></article>
          <article><span>04</span><div><h3>Launches, events and seasonal demand</h3><p>Use paid search when people are already looking for openings, event formats, festive dining, special menus or relevant seasonal occasions.</p></div></article>
          <article><span>05</span><div><h3>Ad copy and proposition testing</h3><p>Test which messages earn attention from the right searcher without promising what the restaurant cannot deliver.</p></div></article>
          <article><span>06</span><div><h3>Landing-page alignment</h3><p>Reduce the gap between what the search promised and what the visitor sees after the click.</p></div></article>
          <article><span>07</span><div><h3>Conversion tracking</h3><p>Implement available tracking for calls, booking clicks, forms and other useful actions so optimisation has evidence behind it.</p></div></article>
          <article><span>08</span><div><h3>Waste control and optimisation</h3><p>Review search terms, locations, devices, timing and campaign performance, then cut spend that is not earning its place.</p></div></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head">
          <p className="eyebrow">Google Ads vs Meta Ads</p>
          <h2>Capture demand or create it?</h2>
        </div>
        <div className="proof-grid">
          <article><span>Google Ads</span><h3>High-intent demand capture</h3><p>Best when people are already searching for a restaurant, cuisine, location, private dining room, event or occasion.</p></article>
          <article><span>Meta Ads</span><h3>Demand creation and retargeting</h3><p>Best when the restaurant needs to put an idea, offer, event or occasion in front of people who were not actively searching for it.</p></article>
          <article><span>Decision rule</span><h3>Start with the bottleneck</h3><p>If useful search demand already exists, Google may be the first move. If awareness is the problem, Meta may make more sense.</p></article>
        </div>
        <p><Link className="text-link" href="/restaurant-meta-ads-agency">Compare the Restaurant Meta Ads service →</Link></p>
      </section>

      <section className="service-outcomes section-pad">
        <div className="service-section-head">
          <p className="eyebrow">Measurement</p>
          <h2>Clicks are a cost. What happened <em>after?</em></h2>
        </div>
        <div className="outcome-grid">
          <article><span>01</span><h2>Search quality: are we paying for terms that match genuine restaurant intent?</h2></article>
          <article><span>02</span><h2>Conversion actions: calls, booking clicks, reservation actions and enquiries where tracking allows.</h2></article>
          <article><span>03</span><h2>Cost efficiency: cost per useful action and which campaigns absorb spend without enough evidence.</h2></article>
          <article><span>04</span><h2>Commercial fit: which services, occasions or booking types appear strong enough to justify continued spend.</h2></article>
        </div>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">A simple budget test</p>
        <h2>Can the opportunity support <em>paid acquisition?</em></h2>
        <p>Before increasing spend, work backwards. What is the booking, enquiry or occasion worth? How many qualified actions could reasonably be needed to create one? How much margin is available to acquire that demand? This is not a forecast and it does not create a guaranteed ROAS. It is a discipline for deciding whether the campaign economics are even worth testing.</p>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head">
          <p className="eyebrow">Pricing</p>
          <h2>Restaurant Google Ads management sits inside Demand from £495/month.</h2>
        </div>
        <div className="proof-grid">
          <article><span>£495 / month</span><h3>Demand</h3><p>Visibility plus one managed paid channel, Google Ads or Meta Ads, landing-page support, conversion tracking, email or CRM and a monthly performance review.</p></article>
          <article><span>£1,000 / month</span><h3>Full House</h3><p>Includes Google and Meta together, plus SEO growth, CRM automation, database growth, retargeting, win-back, website optimisation and advanced reporting.</p></article>
          <article><span>Separate</span><h3>Advertising media spend</h3><p>The budget paid to Google is separate from the management fee, so campaign economics stay visible instead of being buried inside one number.</p></article>
        </div>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">When Google Ads is the right starting point</p>
        <h2>Use paid search when there is demand worth <em>capturing now.</em></h2>
        <ul>
          <li><span>01</span><p>People already search for your cuisine, location or occasion and organic visibility is not capturing enough of that demand.</p></li>
          <li><span>02</span><p>Private dining, events or group bookings have enough value to justify a dedicated acquisition campaign.</p></li>
          <li><span>03</span><p>A launch or time-sensitive service needs faster search visibility than SEO can provide alone.</p></li>
          <li><span>04</span><p>You have a clear proposition and a booking or enquiry journey that can be measured and improved.</p></li>
        </ul>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">When it is not the first move</p>
        <h2>Do not pay to send more people into a <em>leak.</em></h2>
        <ul>
          <li><span>01</span><p>The website is slow, confusing or hides the information needed to choose the restaurant.</p></li>
          <li><span>02</span><p>The booking route is difficult enough that high-intent visitors are likely to abandon it.</p></li>
          <li><span>03</span><p>The restaurant has no clear reason to choose it over nearby alternatives.</p></li>
          <li><span>04</span><p>The available budget is too thin for the location and search opportunity to generate useful learning.</p></li>
        </ul>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">How we work</p>
        <h2>Diagnose → Prioritise → Launch → <em>Learn.</em></h2>
        <ol>
          <li><span>01</span><h3>Diagnose</h3><p>Define the service, booking type or demand problem the campaign needs to support.</p></li>
          <li><span>02</span><h3>Prioritise</h3><p>Choose the highest-value intent, sensible geography and conversion route rather than spreading budget everywhere.</p></li>
          <li><span>03</span><h3>Launch</h3><p>Build campaigns, ads, destinations and tracking around the agreed commercial hypothesis.</p></li>
          <li><span>04</span><h3>Learn</h3><p>Use actual search terms and conversion evidence to cut waste, improve the journey and decide where more spend is justified.</p></li>
        </ol>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Before you hire a restaurant PPC agency</p>
        <h2>Ask how the money will be <em>accounted for.</em></h2>
        <p>Ask what counts as a conversion, which booking actions can actually be tracked, who owns the Google Ads account, whether media spend is separate from management fees, how search terms are reviewed, what happens when the landing page is the problem, and whether reported revenue is truly attributable or merely estimated.</p>
        <p><Link href="/insights/google-ads-vs-meta-ads-restaurants">Google Ads vs Meta Ads for restaurants →</Link></p>
        <p><Link href="/insights/how-much-should-a-restaurant-spend-on-marketing">How much should a restaurant spend on marketing? →</Link></p>
        <p><Link href="/restaurant-marketing-increase-bookings">Restaurant marketing to increase bookings →</Link></p>
        <p><Link href="/restaurant-private-dining-marketing">Restaurant private dining marketing →</Link></p>
        <p><Link href="/restaurant-marketing-packages">Restaurant marketing packages →</Link></p>
      </section>

      <section className="section-pad">
        <p className="eyebrow">Frequently asked questions</p>
        <h2>Restaurant Google Ads FAQs</h2>
        {faqs.map(([q, a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}
      </section>

      <section className="service-next section-pad">
        <p className="eyebrow">Next step</p>
        <h2>What are people already searching for that should end at <em>your table?</em></h2>
        <p>Bring us the search opportunity, location, booking journey and commercial goal. We will tell you whether Google Ads is actually the sensible first move.</p>
        <div>
          <Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit ↗</Link>
          <Link className="text-link" href="/pricing">Compare plans →</Link>
        </div>
      </section>
    </main>
  </>;
}
