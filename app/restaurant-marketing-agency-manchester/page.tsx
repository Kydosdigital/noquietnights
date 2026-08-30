import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const url = `${siteUrl}/restaurant-marketing-agency-manchester`;

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency Manchester | From £165 | NO QUIET NIGHTS",
  description: "Restaurant marketing agency for Manchester independents and groups. Social, local SEO, Google Ads, Meta Ads, booking conversion and CRM, with plans from £165/month.",
  alternates: { canonical: url },
  openGraph: {
    title: "Restaurant Marketing Agency Manchester | NO QUIET NIGHTS",
    description: "Manchester restaurant marketing built around the service, booking journey or commercial gap that needs to move.",
    url,
    type: "website",
    images: [{ url: `${siteUrl}/images/stock/restaurant-03-modern-people-dining.jpg`, alt: "Guests dining in a modern restaurant" }],
  },
};

const faqs = [
  ["What does a restaurant marketing agency in Manchester actually do?", "A restaurant marketing agency should help a venue get found, get chosen, convert demand into bookings or enquiries, and bring guests back. In Manchester that can include social content, local SEO, Google Business Profile work, Google Ads, Meta Ads, private dining landing pages, conversion tracking, email and CRM."],
  ["How much does restaurant marketing cost in Manchester?", "NO QUIET NIGHTS restaurant marketing plans start at £165/month. Visibility is £295, Demand is £495 and Full House is £1,000. Advertising media spend and custom on-site production are separate."],
  ["Do you only work with restaurants in Manchester city centre?", "No. Strategy can be built around the actual catchment and customer journey of the restaurant, including city-centre and neighbourhood demand where relevant. We do not pretend every Manchester venue has the same audience or search behaviour."],
  ["Can you help a Manchester restaurant fill quiet weekdays?", "We can build marketing around a defined softer service, such as Tuesday dinner, weekday lunch or an early evening sitting. That can involve a stronger proposition, local campaigns, CRM, search demand and better conversion. We do not guarantee a particular number of covers."],
  ["Can you help with private dining and group bookings?", "Yes. Private dining is a distinct buying journey, so we can help create dedicated pages, search visibility, paid campaigns, enquiry tracking and follow-up for corporate dinners, birthdays, celebrations and group occasions."],
  ["What Manchester restaurant searches can you target?", "Relevant intent can include cuisine, neighbourhood, occasion and service searches, such as restaurant Manchester, brunch Northern Quarter, private dining Manchester, romantic restaurant Manchester or restaurant Didsbury, when those terms genuinely fit the venue."],
  ["Do you manage Google Ads and Meta Ads for Manchester restaurants?", "Yes. Demand includes one managed paid channel, either Google Ads or Meta Ads. Full House includes both. Media budget is paid separately from the management fee."],
  ["What is the difference between restaurant SEO and restaurant local SEO?", "Restaurant SEO can cover the wider organic search journey, including commercial pages, technical structure and content. Local SEO focuses more tightly on Google Business Profile, Maps, location and neighbourhood intent, reviews, local landing pages and near-me discovery."],
  ["How should restaurant marketing be measured?", "The metric should follow the commercial job. Useful evidence can include local search visibility, Google Business Profile actions, calls, directions, booking actions, private dining enquiries, paid conversion data, database growth, repeat-customer activity and trading performance where reliable data exists."],
  ["Do you guarantee restaurant bookings or Google rankings?", "No. We do not guarantee covers, revenue, ROI or rankings. We define the commercial objective, choose the smallest sensible marketing system, track the evidence available and adjust based on what the numbers show."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Restaurant Marketing Agency Manchester",
      serviceType: "Restaurant marketing services",
      description: "Manchester restaurant marketing across social media, local SEO, Google Ads, Meta Ads, booking conversion, private dining, email and CRM.",
      url,
      provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl },
      areaServed: { "@type": "City", name: "Manchester" },
      audience: { "@type": "Audience", audienceType: "Independent restaurants, restaurant groups and hospitality operators in Manchester" },
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "165", description: "Restaurant marketing plans start from £165 per month." },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Restaurant Marketing Agency Manchester", item: url },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

export default function Page() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">Restaurant marketing agency Manchester · From £165/month</p>
          <h1>Manchester has plenty of places to eat. Give diners a reason to choose yours.</h1>
          <strong>NO QUIET NIGHTS helps Manchester restaurants connect local discovery, social attention, paid demand, booking journeys and repeat visits to a specific commercial problem.</strong>
          <p>We do not begin with “you need more content”. We begin with the gap: a soft Tuesday, weak lunch, underused private room, poor local visibility, a launch that needs momentum, a booking journey that leaks intent or first-time diners who never return.</p>
          <div className="service-hero-actions"><Link className="button button-ink" href="/start?type=restaurant">Find my starting point ↗</Link><Link className="text-link" href="/pricing">Plans from £165 →</Link></div>
        </div>
        <figure className="service-detail-image"><img src="/images/stock/restaurant-03-modern-people-dining.jpg" alt="Guests dining together in a modern restaurant"/><figcaption>Stock hospitality image</figcaption></figure>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>Manchester restaurant marketing should connect visibility to a <em>trading job.</em></h2>
        <p>Manchester diners can compare enormous choice across the city centre and neighbourhoods such as the Northern Quarter, Ancoats, Didsbury and Chorlton. A restaurant marketing agency should help the venue become discoverable for relevant searches, persuasive when compared, easy to book and capable of bringing previous guests back. The right channel depends on which part of that journey is weak.</p>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">The demand journey</p>
        <h2>Found → Chosen →<br/><em>Booked → Brought back.</em></h2>
        <ol>
          <li><span>01</span><h3>Found</h3><p>Maps, local SEO, cuisine searches, neighbourhood searches, social discovery and Google Ads put the restaurant into consideration.</p></li>
          <li><span>02</span><h3>Chosen</h3><p>Menus, atmosphere, reviews, creative, occasion fit and a strong proposition answer the question: why this restaurant instead of the next tab?</p></li>
          <li><span>03</span><h3>Booked</h3><p>Fast mobile pages, obvious calls to action and a clean booking or enquiry path reduce friction between intent and action.</p></li>
          <li><span>04</span><h3>Brought back</h3><p>Email, CRM, events, new menus, birthdays and win-back campaigns give previous guests another reason to choose you again.</p></li>
        </ol>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">Manchester demand problems</p><h2>Start with what should be <em>busier.</em></h2><p>Hospitality inventory expires. A table that stays empty on Tuesday evening cannot be sold again on Wednesday. That is why the problem should come before the channel.</p></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Weak local discovery</h3><p>If diners are searching by cuisine, neighbourhood or occasion and the restaurant does not appear in the consideration set, the first job is visibility. That can mean Google Business Profile work, local SEO, Maps, dedicated landing pages and reputation signals.</p></div></article>
          <article><span>02</span><div><h3>Quiet weekday services</h3><p>A soft Tuesday is not the same problem as a weak Saturday. We define the service, audience, proposition and economics first, then decide whether social, CRM, Google, Meta or a combination is justified.</p></div></article>
          <article><span>03</span><div><h3>Private dining and group bookings</h3><p>Corporate dinners, birthdays, celebrations and group occasions have a different research process from a standard table booking. The room, capacity, menu, atmosphere and enquiry journey need to be discoverable and easy to understand.</p></div></article>
          <article><span>04</span><div><h3>Attention that does not convert</h3><p>More reach does not fix a weak proposition or clumsy booking journey. If people visit the site but fail to act, the work should move downstream into landing pages, menus, calls to action, mobile friction and conversion tracking.</p></div></article>
          <article><span>05</span><div><h3>One-and-done guests</h3><p>Restaurants often keep paying to reacquire attention they have already earned. Permission-based CRM, event messaging, menu launches, birthdays and win-back campaigns can turn a first visit into a customer relationship.</p></div></article>
          <article><span>06</span><div><h3>A new opening with no runway</h3><p>Opening night should not be the start of marketing. Pre-opening discovery, Google readiness, social proof, launch content, paid demand and database capture should create momentum before the doors open and give the venue a plan after the first rush.</p></div></article>
        </div>
      </section>

      <section className="plan-selector section-pad">
        <div className="selector-head"><p className="eyebrow">Which channel fits which Manchester restaurant problem?</p><h2>Channels are tools.<br/><em>The job is demand.</em></h2></div>
        <div className="selector-list">
          <Link href="/restaurant-social-media-marketing-agency"><span>Best when the issue is weak ongoing visibility, poor creative consistency or a lack of reasons to visit in the feed.</span><b>Restaurant social media</b><i>↗</i></Link>
          <Link href="/restaurant-local-seo-agency"><span>Best when relevant local, cuisine, Maps or neighbourhood searches are not turning into enough discovery.</span><b>Restaurant local SEO</b><i>↗</i></Link>
          <Link href="/restaurant-google-ads-agency"><span>Best when you want to capture people already searching with high intent for a place, cuisine, occasion or private dining option.</span><b>Restaurant Google Ads</b><i>↗</i></Link>
          <Link href="/restaurant-meta-ads-agency"><span>Best when you need to create or shape demand for a launch, quieter service, event, menu or retargeting audience.</span><b>Restaurant Meta Ads</b><i>↗</i></Link>
          <Link href="/restaurant-email-crm-agency"><span>Best when the restaurant has past guests but little structured follow-up, database growth or win-back activity.</span><b>Restaurant email & CRM</b><i>↗</i></Link>
          <Link href="/restaurant-website-conversion-agency"><span>Best when interest exists but too much of it leaks before a booking, enquiry or useful action.</span><b>Restaurant website & conversion</b><i>↗</i></Link>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Transparent pricing</p><h2>Choose the smallest plan that solves today's problem.</h2><p>Manchester restaurants do not all need a full-service retainer. The scope should match the current bottleneck.</p></div>
        <div className="proof-grid">
          <article><span>£165 / month</span><h3>Starter</h3><p>For restaurants that need consistent social across Instagram, Facebook and TikTok, with three planned posts a week, design/video editing, content calendar and strategy, plus Stories.</p></article>
          <article><span>£295 / month</span><h3>Visibility</h3><p>Starter plus Google Business Profile optimisation and updates, local SEO, keyword tracking and monthly visibility reporting.</p></article>
          <article><span>£495 / month</span><h3>Demand</h3><p>Visibility plus one managed paid channel, a landing page, conversion tracking, email/CRM and monthly performance review. Ad spend is separate.</p></article>
        </div>
        <div className="proof-grid">
          <article><span>£1,000 / month</span><h3>Full House</h3><p>Meta and Google, SEO growth, CRM automation, database growth, retargeting, win-back, offer planning, website optimisation and advanced reporting. Ad spend and on-site production are separate.</p></article>
          <article><span>Commercial rule</span><h3>Do not overbuy</h3><p>If Visibility solves the real problem, start there. Scale when a new bottleneck or opportunity makes the next level commercially sensible.</p></article>
          <article><span>Separate</span><h3>Media and production</h3><p>Advertising spend and custom on-site photography or videography are separately scoped so the management fee remains clear.</p></article>
        </div>
        <p><Link className="button button-ink" href="/restaurant-marketing-packages">Compare restaurant marketing packages →</Link></p>
      </section>

      <section className="service-outcomes section-pad">
        <div className="service-section-head"><p className="eyebrow">Manchester search is not one market</p><h2>Neighbourhood and occasion intent matter.</h2><p>A city-centre restaurant competing for visitor demand does not have the same search landscape as an established neighbourhood venue. Strategy should reflect the real catchment, offer and occasion.</p></div>
        <div className="outcome-grid">
          <article><span>01</span><h2>City centre and Northern Quarter: high choice, strong discovery competition and heavy comparison behaviour.</h2></article>
          <article><span>02</span><h2>Ancoats and neighbourhood dining: reputation, local intent and repeat demand can matter as much as broad city terms.</h2></article>
          <article><span>03</span><h2>Didsbury and Chorlton: strong neighbourhood intent means local relevance and loyalty can outperform generic Manchester targeting.</h2></article>
          <article><span>04</span><h2>Occasion searches: birthdays, romantic dining, private dining and celebrations can be commercially more valuable than broad “restaurant Manchester” visibility.</h2></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">What could the gap be worth?</p><h2>Calculate the opportunity before choosing the channel.</h2><p>This is not a forecast. It is a simple way to decide whether a marketing problem is commercially meaningful.</p></div>
        <div className="proof-grid">
          <article><span>Step 1</span><h3>Define the empty capacity</h3><p>Example: 18 empty covers on a Tuesday dinner service.</p></article>
          <article><span>Step 2</span><h3>Use your own average guest spend</h3><p>Example: £42 average spend per guest. Use your actual number, not ours.</p></article>
          <article><span>Step 3</span><h3>Estimate the monthly gap</h3><p>18 covers × £42 × 4 Tuesdays = £3,024 of theoretical monthly capacity. This is illustrative, not a revenue promise.</p></article>
        </div>
        <p>The point is not to pretend marketing can recover all of that capacity. The point is to compare the size of the commercial gap with the cost and complexity of trying to influence it.</p>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">How we work</p>
        <h2>Diagnose → Prioritise →<br/><em>Launch → Learn.</em></h2>
        <ol>
          <li><span>01</span><h3>Diagnose</h3><p>Identify the service, audience, search journey, booking path or retention problem that is actually costing opportunity.</p></li>
          <li><span>02</span><h3>Prioritise</h3><p>Choose the smallest set of changes and channels that can realistically influence that problem.</p></li>
          <li><span>03</span><h3>Launch</h3><p>Build the content, local search work, campaign, landing page, CRM journey or conversion fix with tracking attached where possible.</p></li>
          <li><span>04</span><h3>Learn</h3><p>Review the available evidence, keep what is working, challenge what is not and scale only when the numbers justify it.</p></li>
        </ol>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">Who this is for</p><h2>Built for Manchester restaurants that want marketing connected to trading.</h2>
        <ul>
          <li><span>01</span>Independent restaurants that need a commercially sensible starting point rather than a large default retainer.</li>
          <li><span>02</span>Small restaurant groups that need stronger local discovery, acquisition and retention across more than one venue.</li>
          <li><span>03</span>New openings that need demand before launch and a repeatable system after the opening rush.</li>
          <li><span>04</span>Fine-dining and occasion-led venues where trust, presentation, private dining and booking lead time matter.</li>
          <li><span>05</span>Operators who care about covers, enquiries, local discovery and return visits more than follower counts.</li>
        </ul>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">Who this is not for</p><h2>We are probably not the right fit if...</h2>
        <p>You want a guarantee of being number one on Google, a guaranteed number of bookings, guaranteed ROAS or an agency that will prescribe every channel before understanding the trading problem. We also do not claim a physical Manchester office or invent local presence we do not have.</p>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">How to compare Manchester restaurant marketing agencies</p><h2>Ask better questions than “how many posts do we get?”</h2></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Do they understand hospitality economics?</h3><p>They should understand covers, sittings, capacity, private dining, repeat visits and the fact that empty inventory expires.</p></div></article>
          <article><span>02</span><div><h3>Can they explain which problem each channel solves?</h3><p>If every diagnosis leads to the same package, the strategy may be built around the agency rather than the restaurant.</p></div></article>
          <article><span>03</span><div><h3>Do they separate management fees from media spend?</h3><p>You should understand what the agency fee covers and what is paid directly to Google, Meta or another platform.</p></div></article>
          <article><span>04</span><div><h3>What do they measure?</h3><p>Ask how they connect activity to local discovery, booking actions, enquiries, database growth or the specific service being supported.</p></div></article>
          <article><span>05</span><div><h3>Are the promises believable?</h3><p>Be cautious with guaranteed rankings, guaranteed revenue and guaranteed booking volumes. Good marketing improves the odds; it does not remove commercial uncertainty.</p></div></article>
        </div>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Manchester buyer guides</p><h2>Do the homework<br/><em>before you hire.</em></h2>
        <p><Link href="/insights/best-restaurant-marketing-agency-manchester">Best restaurant marketing agency Manchester →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-manchester-prices">Manchester restaurant marketing agency prices →</Link></p>
        <p><Link href="/insights/restaurant-seo-agency-manchester">Restaurant SEO agency Manchester →</Link></p>
        <p><Link href="/restaurant-private-dining-marketing">Restaurant private dining marketing →</Link></p>
        <p><Link href="/restaurant-marketing-quiet-weekdays">Restaurant marketing for quiet weekdays →</Link></p>
        <p><Link href="/restaurants">Restaurant Marketing Agency UK →</Link></p>
      </section>

      <section className="section-pad">
        <p className="eyebrow">Frequently asked questions</p><h2>Manchester restaurant marketing FAQs</h2>
        {faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}
      </section>

      <section className="service-next section-pad">
        <p className="eyebrow">Your turn</p><h2>Which Manchester service should be <em>fuller?</em></h2><p>Bring us the quiet service, weak launch, underused room, poor local visibility or disconnected marketing problem. We will point to the smallest sensible starting point.</p>
        <div><Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit ↗</Link><Link className="text-link" href="/pricing">Compare plans →</Link></div>
      </section>
    </main>
  </>;
}
