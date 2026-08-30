import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";
const pageUrl = `${siteUrl}/restaurants`;

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency UK | Plans From £165 | NO QUIET NIGHTS",
  description: "UK restaurant marketing agency for independents and groups. Social, local SEO, Google Ads, Meta ads, booking conversion and CRM, with plans from £165/month.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Restaurant Marketing Agency UK | NO QUIET NIGHTS",
    description: "Restaurant marketing built around fuller services, direct bookings and repeat demand. Plans from £165/month.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteUrl}/images/stock/restaurant-03-modern-people-dining.jpg`, alt: "Guests dining in a modern restaurant" }],
  },
};

const faqs = [
  ["What does a restaurant marketing agency do?", "A restaurant marketing agency helps restaurants attract, convert and retain useful demand. Depending on the problem, that can include social media, Google Business Profile and local SEO, Google Ads, Meta Ads, landing pages, booking conversion, email and CRM. The useful question is not how many channels the agency offers, but which commercial problem each channel is meant to solve."],
  ["How much does a restaurant marketing agency cost in the UK?", "NO QUIET NIGHTS restaurant marketing plans start at £165 per month. Visibility is £295, Demand is £495 and Full House is £1,000 per month. Advertising media spend and custom on-site photography or videography are separate. Market pricing varies widely, so compare scope, exclusions and measurement rather than headline retainers alone."],
  ["Which restaurant marketing service should I start with?", "Start with the bottleneck. If consistency is the problem, social may be enough. If people cannot find you locally, prioritise Google Business Profile and local SEO. If you need active acquisition, consider paid media. If guests visit once and disappear, CRM and retention may deserve attention before more acquisition."],
  ["Can restaurant marketing help fill quiet weekdays?", "It can support quieter services when the campaign is built around a named service, audience, proposition and booking journey. A vague awareness campaign is different from a Tuesday dinner campaign with a clear reason to visit. Marketing cannot guarantee covers, but it can improve discovery, persuasion and demand capture."],
  ["Do you work with independent restaurants?", "Yes. Our package structure is deliberately designed so independent restaurants can start with a focused scope instead of automatically buying a large full-service retainer."],
  ["What is included in restaurant local SEO?", "The Visibility plan includes Google Business Profile optimisation and updates, local SEO, location and intent keyword tracking and monthly visibility reporting, alongside Starter social support."],
  ["Do you manage restaurant Google Ads and Meta Ads?", "Yes. Demand includes management of one paid channel, Google Ads or Meta Ads. Full House includes both. Advertising media spend is separate from the management fee."],
  ["How should restaurant marketing be measured?", "Measurement should follow the job. Useful signals can include local search visibility, calls, directions, qualified website visits, booking actions, enquiries, paid conversion data, database growth and repeat-customer activity where tracking is available. A follower count is not a substitute for a commercial objective."],
  ["How quickly does restaurant marketing work?", "Different channels move at different speeds. Paid campaigns can generate useful data quickly, while local SEO and organic visibility usually need longer. CRM can create value quickly when a healthy permission-based database already exists. We set expectations around the chosen job and channel rather than promising a universal timeline."],
  ["Do you guarantee bookings, revenue or Google rankings?", "No. We do not guarantee a particular ranking, number of covers or revenue outcome. We define the commercial objective, implement the agreed work and measure the evidence available."],
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", "@id": `${pageUrl}#service`, name: "Restaurant Marketing Agency UK", serviceType: "Restaurant marketing services", description: "UK restaurant marketing across social media, local SEO, Google Ads, Meta Ads, booking conversion, email and CRM.", url: pageUrl, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "NO QUIET NIGHTS", url: siteUrl }, areaServed: { "@type": "Country", name: "United Kingdom" }, audience: { "@type": "Audience", audienceType: "Independent restaurants, restaurant groups and hospitality operators" }, offers: { "@type": "Offer", priceCurrency: "GBP", price: "165", description: "Restaurant marketing plans start from £165 per month. Advertising media spend and custom on-site production are separate." } },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Restaurant Marketing Agency UK", item: pageUrl }] },
  { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
]};

export default function RestaurantsPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="restaurant-hero page-top">
        <div className="restaurant-hero-photo"><img src="/images/stock/restaurant-03-modern-people-dining.jpg" alt="Guests dining together in a modern restaurant" /></div>
        <div className="restaurant-hero-copy">
          <p className="eyebrow">Restaurant marketing agency UK · Plans from £165/month</p>
          <h1>Fill the week.<br/><em>Not just Saturday.</em></h1>
          <p>NO QUIET NIGHTS is a UK restaurant marketing agency for operators who want marketing connected to trading, not a monthly pile of activity. We help restaurants get found, get chosen, get booked and give previous guests a reason to come back.</p>
          <div><Link className="button button-ink" href="/start?type=restaurant">Find my starting point <span>↗</span></Link><Link className="text-link" href="/pricing">Compare plans from £165 →</Link></div>
        </div>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">Restaurant marketing agency UK: the short answer</p>
        <h2>Start with the <em>empty seat</em>, not the marketing channel.</h2>
        <p>A restaurant marketing agency should identify the commercial gap first, then choose the smallest useful mix of channels. That gap might be weak Tuesday dinner trade, poor Google visibility, an underused private room, expensive acquisition, a booking journey that leaks demand, or first-time guests who never return. Social, SEO, ads and CRM are tools. The job is demand.</p>
        <Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit ↗</Link>
      </section>

      <section className="booking-journey section-pad">
        <p className="eyebrow">How diners move</p>
        <h2>Found → Chosen →<br/><em>Booked → Brought back.</em></h2>
        <ol>
          <li><span>01</span><h3>Found</h3><p>Google, Maps, local SEO, reviews, social discovery and paid search put your restaurant into the right consideration set.</p></li>
          <li><span>02</span><h3>Chosen</h3><p>Food, atmosphere, menus, reviews, price signals and a clear reason to visit answer the diner’s real question: “why this one?”</p></li>
          <li><span>03</span><h3>Booked</h3><p>Fast mobile pages, visible availability, clear calls to action and a low-friction reservation or enquiry path protect the demand you already paid or worked to create.</p></li>
          <li><span>04</span><h3>Brought back</h3><p>Email, CRM, birthdays, events, menu launches and win-back campaigns help turn the first visit into an owned customer relationship.</p></li>
        </ol>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">What should be busier?</p><h2>Five restaurant problems that need different answers.</h2><p>Restaurant inventory is perishable. An empty table during tonight’s service cannot be stored and sold tomorrow, so the marketing plan should reflect the trading problem in front of you.</p></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Quiet weekday services</h3><p>Do not market “the restaurant” in the abstract. Identify the soft service, the audience most likely to move and a reason that makes that service worth choosing. That may mean an occasion, menu, event, format or value proposition, not automatically a discount.</p><p><Link href="/restaurant-marketing-quiet-weekdays">See quiet-weekday restaurant marketing →</Link></p></div></article>
          <article><span>02</span><div><h3>Weak local discovery</h3><p>If people are already searching for your cuisine, neighbourhood or occasion but you are absent from the consideration set, the first job is visibility. Google Business Profile, local SEO, useful location pages and review confidence matter before adding more awareness spend.</p><p><Link href="/restaurant-local-seo-agency">See restaurant local SEO →</Link></p></div></article>
          <article><span>03</span><div><h3>Attention that does not convert</h3><p>Traffic is not the same as demand captured. Menus hidden in PDFs, slow mobile pages, unclear booking buttons, weak private-dining information and generic landing pages can waste good traffic. Fix the leak before buying more visitors.</p><p><Link href="/restaurant-website-conversion-agency">See restaurant website and conversion work →</Link></p></div></article>
          <article><span>04</span><div><h3>Private dining and group bookings</h3><p>A private room is a different product from a two-person dinner. It needs capacity, occasion, atmosphere, menu and enquiry information that lets a planner qualify the venue before contacting you.</p><p><Link href="/restaurant-private-dining-marketing">See private dining marketing →</Link></p></div></article>
          <article><span>05</span><div><h3>One-and-done customers</h3><p>If every week starts from zero, acquisition is doing too much work. Permission-based database growth, useful follow-up, birthdays, launches, events and win-back campaigns can give previous guests a reason to choose you again.</p><p><Link href="/restaurant-email-crm-agency">See restaurant email and CRM →</Link></p></div></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">What does a restaurant marketing agency actually do?</p><h2>One commercial system, several possible tools.</h2><p>The right scope depends on where demand is breaking. We do not recommend every channel simply because we sell it.</p></div>
        <div className="proof-grid">
          <article><span>Discovery</span><h3>Local SEO + Google Business Profile</h3><p>For restaurants that need to appear more convincingly when diners search by location, cuisine, occasion or intent.</p><p><Link href="/restaurant-seo-agency">Restaurant SEO agency →</Link></p></article>
          <article><span>Attention</span><h3>Social media + content</h3><p>For restaurants that need consistent reasons to notice, remember and consider the venue across Instagram, Facebook and TikTok.</p><p><Link href="/restaurant-social-media-marketing-agency">Restaurant social media agency →</Link></p></article>
          <article><span>Acquisition</span><h3>Google Ads + Meta Ads</h3><p>Google can capture existing intent. Meta can create and retarget demand. Neither fixes a weak proposition or broken booking journey.</p><p><Link href="/restaurant-google-ads-agency">Google Ads →</Link> · <Link href="/restaurant-meta-ads-agency">Meta Ads →</Link></p></article>
        </div>
        <div className="proof-grid">
          <article><span>Conversion</span><h3>Landing pages + booking journeys</h3><p>For restaurants getting attention but losing people between interest and reservation, enquiry or visit.</p></article>
          <article><span>Retention</span><h3>Email + CRM</h3><p>For restaurants with previous guests, enquiries or subscribers who could become future demand instead of dormant data.</p></article>
          <article><span>Strategy</span><h3>Trading problem first</h3><p>We connect the channel to a named commercial job so the work can be judged against something more useful than impressions.</p></article>
        </div>
      </section>

      <section className="service-outcomes section-pad">
        <div className="service-section-head"><p className="eyebrow">Which channel fits which restaurant problem?</p><h2>Do not buy a full-service retainer to solve a one-channel bottleneck.</h2></div>
        <div className="outcome-grid">
          <article><span>If...</span><h2>Posting is inconsistent but local discovery is already strong.</h2><p>Start with social consistency. You may not need SEO or paid media yet.</p></article>
          <article><span>If...</span><h2>You are invisible for valuable local searches.</h2><p>Start with Visibility: Google Business Profile and local SEO deserve attention before broad acquisition.</p></article>
          <article><span>If...</span><h2>You have a strong offer and need demand now.</h2><p>Paid media may make sense, but only with tracking and a landing or booking journey capable of converting it.</p></article>
          <article><span>If...</span><h2>You have a healthy guest base but weak repeat communication.</h2><p>CRM and retention may be more efficient than continually paying to reacquire people who already know you.</p></article>
        </div>
      </section>

      <section className="service-proof section-pad">
        <div className="service-section-head"><p className="eyebrow">Restaurant marketing agency cost UK</p><h2>Our plans start at £165. The wider market can cost much more.</h2><p>Published UK restaurant-agency pricing varies substantially by scope. Current competitor and industry pages show everything from low-cost specialist packages to retainers in the high hundreds or thousands per month. That makes like-for-like comparison essential: check what is actually managed, how much content is included, whether paid-media management is included, what sits outside the fee and how performance is measured.</p></div>
        <div className="proof-grid">
          <article><span>£165 / month</span><h3>Starter: Be consistent</h3><p>Instagram, Facebook and TikTok, three planned posts a week, design/video editing, monthly content calendar and strategy, plus Stories 2–3 times a week.</p><p><strong>Best fit:</strong> the restaurant mainly needs consistent social execution.</p></article>
          <article><span>£295 / month</span><h3>Visibility: Be found</h3><p>Starter plus Google Business Profile optimisation and updates, local SEO, keyword tracking and monthly visibility reporting.</p><p><strong>Best fit:</strong> local discovery is the bottleneck.</p></article>
          <article><span>£495 / month</span><h3>Demand: Create demand</h3><p>Visibility plus one managed paid channel, landing-page support, conversion tracking, email/CRM and a monthly performance and growth review.</p><p><strong>Best fit:</strong> the restaurant is ready for active acquisition. Ad spend is separate.</p></article>
        </div>
        <div className="proof-grid">
          <article><span>£1,000 / month</span><h3>Full House: Connect the journey</h3><p>Meta + Google, SEO growth, CRM automation, database growth, retargeting, win-back, offer planning, monthly website optimisation, advanced tracking and strategy.</p><p><strong>Best fit:</strong> several parts of the demand journey need coordinated work. Ad spend and on-site production are separate.</p></article>
          <article><span>Commercial rule</span><h3>Choose the smallest plan that solves today’s problem.</h3><p>More channels create more work, not automatically more growth. Start where the bottleneck is clearest. Scale when the numbers, opportunity or next constraint justify it.</p></article>
          <article><span>Compare properly</span><h3>Ask what is outside the retainer.</h3><p>Advertising media budgets and custom on-site photography or videography are separately scoped with us. When comparing agencies, also check setup fees, software, production, contract length and whether media spend is included or additional.</p></article>
        </div>
        <p><Link className="button button-ink" href="/restaurant-marketing-packages">Compare restaurant packages →</Link> <Link className="text-link" href="/insights/restaurant-marketing-agency-cost-uk">Read the UK cost guide →</Link></p>
      </section>

      <section className="proof-principle section-pad">
        <p className="eyebrow">A simple commercial test</p>
        <h2>What would the marketing need to influence to <em>earn its place?</em></h2>
        <p>Do not begin with a fantasy ROI number. Begin with your own economics. If a quieter service has 20 genuinely sellable covers, decide what a filled cover is worth to the business after food, labour and other variable costs. Then compare the realistic opportunity with the cost of the campaign. The same logic applies to a private-dining enquiry, a repeat visit or a direct booking. Every number needs a receipt.</p>
        <p><strong>Illustrative method:</strong> available covers × realistic improvement × contribution per cover = an opportunity estimate. It is a planning tool, not a revenue promise.</p>
      </section>

      <section className="service-work section-pad">
        <div className="service-section-head"><p className="eyebrow">How we work</p><h2>Diagnose → Prioritise → Launch → Learn.</h2></div>
        <div className="work-list">
          <article><span>01</span><div><h3>Diagnose</h3><p>Name the trading problem, current evidence, customer journey and constraints. “We need marketing” is not yet a useful brief.</p></div></article>
          <article><span>02</span><div><h3>Prioritise</h3><p>Choose the smallest set of actions with a credible relationship to the problem. This is where we deliberately leave unnecessary channels out.</p></div></article>
          <article><span>03</span><div><h3>Launch</h3><p>Build the content, visibility, campaign, landing page or CRM activity and connect the available tracking.</p></div></article>
          <article><span>04</span><div><h3>Learn</h3><p>Review what moved, what did not, what the data can genuinely tell us and what deserves the next pound or hour of effort.</p></div></article>
        </div>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">Who this is for</p><h2>A good fit when the restaurant wants marketing connected to trading.</h2>
        <ul>
          <li><span>01</span>Independent restaurants that need a sensible starting point rather than an oversized retainer.</li>
          <li><span>02</span>Restaurant groups that need clearer local discovery, acquisition and retention across the customer journey.</li>
          <li><span>03</span>New openings that need useful demand before opening and a plan for what happens after launch week.</li>
          <li><span>04</span>Fine-dining and occasion-led venues where trust, presentation, reviews and the booking journey carry extra weight.</li>
          <li><span>05</span>Operators willing to define the service, occasion, enquiry type or customer behaviour they actually want marketing to influence.</li>
        </ul>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow">Who this is not for</p><h2>We may not be the right answer if...</h2>
        <ul>
          <li><span>01</span>You only want follower growth and do not want the work connected to a commercial objective.</li>
          <li><span>02</span>The underlying product, service, reviews, availability or operations are the main problem and marketing is being asked to hide it.</li>
          <li><span>03</span>You want guaranteed rankings, guaranteed covers or guaranteed revenue. We do not sell certainty we cannot responsibly provide.</li>
          <li><span>04</span>You need a large on-site production programme included inside a £165 management plan. Custom production is separately scoped.</li>
        </ul>
      </section>

      <section className="restaurant-hero page-top">
        <div className="restaurant-hero-photo"><img src="/images/stock/chef-35-busy-kitchen-pass.jpg" alt="Busy restaurant kitchen pass during service" /></div>
        <div className="restaurant-hero-copy"><p className="eyebrow">Hospitality changes the brief</p><h2>Your busiest night is not the brief.</h2><p>A restaurant can look busy on Instagram and still have a weak Monday, unused terrace, empty private room or expensive acquisition problem. That is why we organise the work around services, occasions, local intent, conversion and return visits rather than treating the venue like a generic ecommerce brand.</p><p>Marketing should finish at the till, but measurement has to stay honest. We use the best available evidence and label what can and cannot be attributed.</p></div>
      </section>

      <section className="service-outcomes section-pad">
        <div className="service-section-head"><p className="eyebrow">What should a restaurant agency report?</p><h2>The metric follows the job.</h2></div>
        <div className="outcome-grid">
          <article><span>Discovery</span><h2>Relevant rankings, profile actions, calls, directions and qualified website visits.</h2><p>Useful when the job is to improve local discovery.</p></article>
          <article><span>Acquisition</span><h2>Campaign spend, useful traffic, booking actions, enquiries and conversion evidence where tracking allows.</h2><p>Useful when paid demand is the job.</p></article>
          <article><span>Retention</span><h2>Permission-based database growth, email response, repeat-customer campaigns and win-back activity.</h2><p>Useful when the job is to create another visit.</p></article>
          <article><span>Trading</span><h2>The service, occasion, room or revenue opportunity the marketing was actually asked to support.</h2><p>Useful because marketing activity without a named commercial job is difficult to judge.</p></article>
        </div>
      </section>

      <section className="playbook-band section-pad">
        <p className="eyebrow">Before you hire any restaurant marketing agency</p><h2>Ask better buying questions.</h2>
        <p><strong>What exact problem are you proposing to solve?</strong> If the answer is simply “grow awareness”, ask what that means for your restaurant.</p>
        <p><strong>What is included and excluded?</strong> Clarify content volume, community management, SEO work, ad management, media spend, photography, software and reporting.</p>
        <p><strong>What would make you recommend a smaller package?</strong> A useful partner should be able to tell you when not to buy something.</p>
        <p><strong>How will we know whether this is working?</strong> Agree the evidence before the campaign starts.</p>
        <p><strong>Who owns the accounts and data?</strong> Your website, ad accounts, analytics and customer data should not become leverage that traps you with a supplier.</p>
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

      <section className="restaurant-final"><span>Next step</span><h2>Where is trade softer<br/>than it should be?</h2><p>Bring us the quiet service, weak launch, underused room, discovery problem or disconnected marketing journey. We will point to the smallest sensible starting point, even when that means doing less.</p><Link className="button button-cream" href="/start?type=restaurant">Tell us the quiet bit <span>↗</span></Link></section>
    </main>
  </>;
}
