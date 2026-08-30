import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const pageUrl = `${siteUrl}/restaurant-social-media-marketing-agency`;

export const metadata: Metadata = {
  title: "Restaurant Social Media Marketing Agency UK | From £165 | NO QUIET NIGHTS",
  description: "Restaurant social media management for UK independents and groups. Strategy, Instagram, Facebook, TikTok, editing and campaigns from £165/month.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Restaurant Social Media Marketing Agency UK | NO QUIET NIGHTS",
    description: "Restaurant social media built around reasons to visit, quieter services, launches and measurable demand. Plans from £165/month.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteUrl}/images/stock/restaurant-03-modern-people-dining.jpg`, alt: "Guests dining in a modern restaurant" }],
  },
};

const faqs = [
  ["How much does restaurant social media management cost in the UK?", "NO QUIET NIGHTS Starter costs £165 per month. It includes planned social across Instagram, Facebook and TikTok, three planned posts per week, design and video editing, a monthly content calendar and strategy, plus Stories two to three times per week."],
  ["What does a restaurant social media agency actually do?", "A restaurant social media agency should connect content planning, creative, publishing and campaigns to real restaurant moments such as quieter services, launches, menus, private dining, events and repeat-visit reasons. The job is not simply to keep the grid active."],
  ["Which social media platforms are best for restaurants?", "Instagram, Facebook and TikTok can all be useful, but they do different jobs. The right emphasis depends on the restaurant, audience, location, available assets and objective. We do not recommend treating every platform as an identical distribution channel."],
  ["Do you create restaurant photos and videos?", "Design and video editing are included within Starter using suitable assets supplied or available to the restaurant. Custom on-site photography and videography are separately scoped because original production requires a different level of planning and resource."],
  ["Can social media help fill quiet restaurant days?", "Yes, when the campaign starts with the weak service and builds a relevant reason to visit around it. Social media cannot guarantee covers, but it can create awareness, consideration, retargeting audiences and measurable booking actions around a specific service."],
  ["Should restaurants post every day?", "Not automatically. Publishing more often is not useful if the content is repetitive or has no commercial purpose. We prefer a sustainable plan with enough quality and variety to support discovery, choice, timely demand and brand memory."],
  ["Should a restaurant use offers and discounts on social media?", "Sometimes, but discounting should not be the default. A reason to visit can be a new menu, chef special, event, terrace, set menu, occasion, private dining proposition or limited experience. The offer should protect the restaurant's positioning and economics."],
  ["How do you measure restaurant social media?", "Measurement should follow the content's job. Useful signals can include qualified reach, profile actions, website visits, booking clicks, enquiries, campaign conversions, retargeting audience growth and performance around named services or offers. Likes alone are not a commercial scorecard."],
  ["Is organic social enough for a restaurant?", "Sometimes it is the right starting point, particularly when the immediate problem is inconsistent communication. If the restaurant needs faster reach or targeted demand, Meta Ads, Google Ads, local SEO or CRM may be a better addition than simply increasing organic posting."],
  ["Can you manage social media for independent restaurants and restaurant groups?", "Yes. The £165 Starter plan gives independents a focused entry point, while broader restaurant groups can combine social with local SEO, paid media, landing pages, tracking and CRM when the commercial problem requires more capability."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Restaurant Social Media Marketing Agency UK",
      serviceType: "Restaurant social media management and marketing",
      url: pageUrl,
      provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      audience: { "@type": "Audience", audienceType: "Independent restaurants, restaurant groups and hospitality operators" },
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "165", description: "Restaurant social media management starts from £165 per month. Custom on-site production is separately scoped." },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Restaurant Social Media Marketing Agency", item: pageUrl },
      ],
    },
    { "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

const jobs = [
  ["01", "Discovery", "Show the food, room, people and moments that help a new diner notice the restaurant in the first place."],
  ["02", "Choice", "Give someone comparing restaurants enough evidence to understand the atmosphere, proposition, menu moments and reasons to choose yours."],
  ["03", "Demand", "Build campaigns around a specific commercial need, such as Tuesday dinner, lunch, brunch, a launch, private dining or an event."],
  ["04", "Return", "Keep previous guests aware of new menus, seasonal moments, events and reasons to come back rather than starting from zero every week."],
];

export default function RestaurantSocialMediaAgencyPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">Restaurant social media marketing agency UK · From £165/month</p>
          <h1>Make the feed give people a <em>reason to visit.</em></h1>
          <strong>Restaurant social media should do more than prove you are still open.</strong>
          <p>NO QUIET NIGHTS plans and manages restaurant social media across Instagram, Facebook and TikTok. We connect content to the trading calendar, the customer journey and the service that needs attention, so the brief becomes more useful than “post three times this week”.</p>
          <div className="service-hero-actions">
            <Link className="button button-ink" href="/start?type=restaurant">Tell us the quiet bit ↗</Link>
            <Link className="text-link" href="/pricing">See plans from £165 →</Link>
          </div>
        </div>
        <figure className="service-detail-image">
          <img src="/images/stock/restaurant-03-modern-people-dining.jpg" alt="Guests dining in a modern restaurant, representing the atmosphere restaurant social media should communicate" />
          <figcaption>Stock hospitality image, used for illustrative purposes</figcaption>
        </figure>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">The short answer</p>
        <h2>What should restaurant social media actually <em>do?</em></h2>
        <p>Restaurant social media should help a diner notice you, understand why your venue fits the occasion, see enough evidence to choose you, and find a clear next step. It can also create timely demand for quieter services and give previous guests reasons to return. Posting frequency matters less than whether the content has a clear commercial job.</p>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">Four jobs for the feed</p>
        <h2>Discovery → Choice → Demand → Return.</h2>
        <ol>{jobs.map(([n, title, copy]) => <li key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head">
          <p className="eyebrow">What we manage</p>
          <h2>Content with a <em>trading job.</em></h2>
          <p>The content calendar should follow what is happening in the restaurant, what diners need to see and what the business needs to move.</p>
        </div>
        <div className="work-list">
          <article><span>01</span><div><h3>Content strategy and monthly planning</h3><p>Build themes around the menu, venue, people, proof, occasions, launches, events, quieter services and repeat-visit reasons instead of filling empty calendar boxes.</p></div></article>
          <article><span>02</span><div><h3>Instagram</h3><p>Use Reels, carousels, photography and Stories to communicate food, atmosphere, timely reasons to visit and the details diners look for before choosing.</p></div></article>
          <article><span>03</span><div><h3>TikTok</h3><p>Use short-form video where the restaurant has suitable stories, personality, food moments or behind-the-scenes material, rather than forcing trends that do not fit the brand.</p></div></article>
          <article><span>04</span><div><h3>Facebook</h3><p>Support local awareness, events, offers, community relevance and useful restaurant updates for audiences who still use Facebook as a discovery and decision surface.</p></div></article>
          <article><span>05</span><div><h3>Design and video editing</h3><p>Turn supplied restaurant assets into polished, platform-appropriate content. Original on-site photography and videography can be separately scoped when the asset library needs rebuilding.</p></div></article>
          <article><span>06</span><div><h3>Stories and service-day communication</h3><p>Use Stories for immediacy: today's special, availability, terrace weather, behind-the-scenes moments, event reminders and reasons to visit that do not need a permanent grid post.</p></div></article>
          <article><span>07</span><div><h3>Campaign concepts</h3><p>Create a coherent message around brunch, lunch, new menus, private dining, Christmas, Valentine's, Mother's Day, launches and other commercially relevant moments.</p></div></article>
          <article><span>08</span><div><h3>Measurement and learning</h3><p>Review the signals that match the objective, then use them to improve the next month rather than reporting likes without context.</p></div></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Starter · £165/month</p><h2>What does restaurant social media management include?</h2></div>
        <div className="proof-grid">
          <article><span>3 platforms</span><h3>Instagram, Facebook, TikTok</h3><p>Planned management across the three channels, with emphasis adjusted to the restaurant and the content available.</p></article>
          <article><span>3 posts / week</span><h3>Planned publishing</h3><p>Three planned posts each week, supported by a monthly content calendar and strategy.</p></article>
          <article><span>2–3 sessions / week</span><h3>Stories</h3><p>More immediate communication around services, offers, launches, availability and restaurant moments.</p></article>
          <article><span>Included</span><h3>Design and editing</h3><p>Design and video editing using suitable supplied or existing restaurant assets.</p></article>
          <article><span>Separate</span><h3>On-site production</h3><p>Custom photography and videography are separately scoped, so a content-management retainer does not quietly hide production costs.</p></article>
          <article><span>Rule</span><h3>Start with the job</h3><p>Three posts about Friday night do not solve a Tuesday problem. The calendar should reflect the commercial brief.</p></article>
        </div>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">The content mix</p><h2>What should a restaurant actually <em>post?</em></h2></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Food worth choosing</h3><p>Signature dishes, new menu items, preparation, ingredients and details that help the food feel specific rather than interchangeable.</p></div></article>
          <article><span>02</span><div><h3>Atmosphere and occasion</h3><p>Show what it feels like to be there, and which occasions the room naturally fits: date night, family lunch, cocktails, celebrations, business dining or a quick midweek meal.</p></div></article>
          <article><span>03</span><div><h3>People and personality</h3><p>Chef, team, founder and behind-the-scenes stories can make an independent restaurant more memorable when they are authentic to the venue.</p></div></article>
          <article><span>04</span><div><h3>Proof</h3><p>Reviews, press, guest reactions and real restaurant moments can reduce uncertainty, provided permissions and context are handled properly.</p></div></article>
          <article><span>05</span><div><h3>Reasons to come now</h3><p>Events, seasonal menus, new openings, private dining, limited dishes and service-specific propositions give passive followers a reason to act.</p></div></article>
          <article><span>06</span><div><h3>Useful information</h3><p>Opening hours, menus, location, booking routes, accessibility, group information and service details can be content too when they remove decision friction.</p></div></article>
        </div>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">Quiet-service marketing</p>
        <h2>A reason to book is not always a <em>discount.</em></h2>
        <p>If Tuesday dinner is soft, the first question is why somebody would choose Tuesday. That answer might be a set menu, a neighbourhood ritual, a chef special, an event, an occasion, a terrace moment or simply clearer communication of an existing strength. Discounting is one tool, not the strategy.</p>
        <p><Link href="/restaurant-marketing-for-quiet-weekdays">See restaurant marketing for quiet weekdays →</Link></p>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">Is social the right first move?</p>
        <h2>Choose social-first when communication is the bottleneck.</h2>
        <ul>
          <li><span>01</span><p>Your restaurant looks and feels better in real life than it does online.</p></li>
          <li><span>02</span><p>Posting disappears whenever the operational team gets busy.</p></li>
          <li><span>03</span><p>You already have useful photo or video assets but no coherent monthly plan.</p></li>
          <li><span>04</span><p>Your social channels show food, but give diners very few reasons to visit now.</p></li>
          <li><span>05</span><p>You need a focused, affordable starting point before adding SEO or paid acquisition.</p></li>
        </ul>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">When social is not enough</p>
        <h2>Do not ask organic posting to solve the wrong problem.</h2>
        <ul>
          <li><span>01</span><p>If diners cannot find you on Google, <Link href="/restaurant-seo-agency">restaurant SEO</Link> may be the bigger gap.</p></li>
          <li><span>02</span><p>If you need targeted paid reach quickly, <Link href="/restaurant-meta-ads-agency">Meta Ads</Link> may be more appropriate.</p></li>
          <li><span>03</span><p>If people are actively searching for what you sell, <Link href="/restaurant-google-ads-agency">Google Ads</Link> can capture that intent.</p></li>
          <li><span>04</span><p>If guests visit once and disappear, <Link href="/restaurant-email-marketing-agency">email and CRM</Link> may deserve priority.</p></li>
          <li><span>05</span><p>If people click but do not book, fix the website, landing page or booking journey before simply generating more traffic.</p></li>
        </ul>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">How we work</p>
        <h2>Diagnose → Prioritise → Launch → Learn.</h2>
        <ol>
          <li><span>01</span><h3>Diagnose</h3><p>Understand the restaurant, trading calendar, audience, existing channels, available assets and the service or outcome that needs attention.</p></li>
          <li><span>02</span><h3>Prioritise</h3><p>Choose the content themes and platforms that have a reason to exist instead of trying to communicate everything at once.</p></li>
          <li><span>03</span><h3>Launch</h3><p>Publish the planned content, maintain Stories and activate named campaigns around the restaurant calendar.</p></li>
          <li><span>04</span><h3>Learn</h3><p>Review useful performance signals, creative patterns and campaign actions, then improve the next cycle.</p></li>
        </ol>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Measurement</p><h2>Likes are a signal. They are not the <em>till.</em></h2></div>
        <div className="proof-grid">
          <article><span>Attention</span><h3>Are the right people seeing it?</h3><p>Reach, views and audience signals can show whether the content is travelling, but volume without relevance can mislead.</p></article>
          <article><span>Intent</span><h3>Are people moving closer?</h3><p>Profile visits, saves, shares, menu views, website visits and booking-link clicks can indicate stronger consideration.</p></article>
          <article><span>Action</span><h3>Did the campaign create useful behaviour?</h3><p>Where tracking allows, look at bookings, enquiries, calls, paid conversions and named campaign actions rather than claiming every cover came from one post.</p></article>
        </div>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Before you hire</p>
        <h2>Ask a restaurant social media agency these questions.</h2>
        <p>What exactly is included each month? Who supplies original photography and video? Is editing included? Which platforms are actually managed? How often are Stories handled? How does the agency learn the restaurant calendar? What happens when there is a launch or quiet-service brief? Which numbers will be reported? How are approvals handled? And when would they recommend something other than social media?</p>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Restaurant social media buyer guides</p>
        <h2>Research the decision<br/><em>before you hire.</em></h2>
        <p><Link href="/insights/restaurant-social-media-management-cost-uk">Restaurant social media management cost UK →</Link></p>
        <p><Link href="/insights/restaurant-marketing-agency-vs-freelancer">Restaurant marketing agency vs freelancer →</Link></p>
        <p><Link href="/insights/how-much-should-a-restaurant-spend-on-marketing">How much should a restaurant spend on marketing? →</Link></p>
        <p><Link href="/restaurant-marketing-packages">Compare restaurant marketing packages →</Link></p>
      </section>

      <section className="section-pad">
        <p className="eyebrow">Frequently asked questions</p>
        <h2>Restaurant social media marketing FAQs</h2>
        {faqs.map(([q, a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}
      </section>

      <section className="service-next section-pad">
        <p className="eyebrow">Next step</p>
        <h2>What should the feed help make <em>busier?</em></h2>
        <p>Tell us the restaurant, the quiet bit and what content you already have. We will point to the smallest sensible starting point, even when that is not social media.</p>
        <div><Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit ↗</Link><Link className="text-link" href="/pricing">Compare plans →</Link></div>
      </section>
    </main>
  </>;
}
