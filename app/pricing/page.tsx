import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Marketing Pricing from £165",
  description:
    "Compare transparent monthly hospitality marketing plans for UK restaurants, pubs and bars, including social media, local SEO, paid demand, CRM and repeat-customer growth.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Hospitality Marketing Pricing from £165 | No Quiet Nights",
    description:
      "Four clear monthly hospitality marketing plans built around visibility, demand and repeat customers.",
    url: "/pricing",
    type: "website",
  },
};

const plans = [
  {
    n: "01", name: "Starter", price: "165",
    title: "Show up like a venue worth visiting.",
    copy: "A consistent professional presence for hospitality businesses that need the essentials done properly.",
    items: ["Instagram, Facebook and TikTok", "3 planned posts per week", "Professional graphic design and video editing", "Monthly content calendar", "Basic social media strategy", "Stories 2 to 3 times per week"],
    cta: "Start with Starter", href: "/start?plan=starter"
  },
  {
    n: "02", name: "Visibility", price: "295",
    title: "Be easier to find. Harder to ignore.",
    copy: "Build stronger organic visibility across social, Google and local search.",
    items: ["Everything in Starter", "5 planned posts per week", "Full social profile optimisation", "Google Business Profile optimisation", "Local SEO setup and ongoing optimisation", "Local keyword strategy", "Google Maps visibility improvements", "Review growth strategy", "Website SEO recommendations", "Monthly content and campaign strategy", "Community management", "Stories 3 to 5 times per week", "Monthly visibility report"],
    cta: "Build my visibility", href: "/start?plan=visibility"
  },
  {
    n: "03", name: "Demand", price: "495",
    title: "Turn local attention into measurable demand.",
    copy: "Connect visibility, advertising, offers and follow-up so attention has somewhere useful to go.",
    items: ["Everything in Visibility", "Meta advertising management", "Google Search advertising management", "Campaign and offer strategy", "Dedicated campaign landing page", "Lead and booking capture setup", "Conversion tracking setup", "CRM setup and management", "Instant enquiry follow-up automation", "Retargeting audience setup", "Monthly growth review", "Monthly performance report"],
    note: "Advertising spend is separate.", cta: "Build my demand", href: "/start?plan=demand"
  },
  {
    n: "04", name: "Full House", price: "1,000", featured: true,
    title: "Build demand. Capture customers. Bring them back.",
    copy: "Your complete outsourced hospitality growth system, connecting discovery, acquisition, conversion, customer data and repeat visits.",
    items: ["Everything in Demand", "Advanced local SEO and Google visibility", "Monthly commercial growth strategy", "Offer and campaign development", "Meta and Google advertising management", "Landing pages and conversion optimisation", "Customer database growth strategy", "CRM and customer segmentation", "Email and SMS marketing", "Retargeting campaigns", "Lapsed-customer win-back campaigns", "Birthday, VIP and loyalty journeys", "Repeat-visit strategy", "Review generation system", "Website conversion-gap reviews", "Monthly revenue-growth review"],
    note: "Advertising spend and third-party platform costs are separate.", cta: "Build my growth system", href: "/start?plan=full-house"
  }
];

function Header() {
  return <header className="site-header">
    <a className="site-logo" href="/pricing" aria-label="No Quiet Nights"><span className="brand-mark"><span>NO QUIET</span><span>NIGHTS<i>•</i></span></span></a>
    <nav className="desktop-nav"><a href="#monthly">Plans</a><a href="#content-team">Content team</a><a href="#playbook">Free guide</a></nav>
    <a className="nav-cta" href="/start">Start a project <span>↗</span></a>
  </header>;
}

export default function PricingPage() {
  return <>
    <Header />
    <main id="main-content">
      <section className="pricing-hero page-top">
        <p className="eyebrow">Transparent by design</p>
        <h1>Start lean.<br/><em>Scale when the numbers do.</em></h1>
        <div className="pricing-hero-aside"><p>Four clear monthly plans, built around visibility, demand and repeat customers, not a pile of disconnected channels.</p><a href="#monthly" className="button button-ink">Compare every inclusion <span>↓</span></a></div>
        <div className="price-promise"><b>£165</b><span>Lowest monthly<br/>starting point</span><i>NO MYSTERY<br/>QUOTE</i></div>
      </section>

      <section className="plan-stage" id="monthly">
        <div className="plan-stage-intro section-pad-x"><p className="eyebrow light">Monthly marketing</p><h2>Choose the smallest plan<br/>that solves <em>today's problem.</em></h2><p>Paid-media budget is separate on Demand and Full House. Exact scope, approvals and terms are agreed before work begins.</p></div>
        <div className="plan-stack">
          {plans.map(plan => <article className={`plan-card ${plan.featured ? "featured full-house" : ""}`} key={plan.name}>
            <div className="plan-card-top"><span>{plan.n}</span>{plan.featured && <b>Complete growth system</b>}<small>Monthly</small></div>
            <h3>{plan.name}</h3>
            <div className="plan-price"><span>£</span>{plan.price}<small>/mo</small></div>
            <h4>{plan.title}</h4><p>{plan.copy}</p>
            <ul>{plan.items.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul>
            {plan.note && <p className="plan-note">{plan.note}</p>}
            <a href={plan.href}>{plan.cta}<span>↗</span></a>
          </article>)}
        </div>
      </section>

      <section className="plan-selector section-pad">
        <div className="selector-head"><p className="eyebrow">Self-select in 20 seconds</p><h2>What are you<br/><em>paying to fix?</em></h2></div>
        <div className="selector-list">
          <a href="/start?plan=starter"><span>“Our feed keeps going quiet.”</span><b>Starter · £165</b><i>↗</i></a>
          <a href="/start?plan=visibility"><span>“Local people are not finding us enough.”</span><b>Visibility · £295</b><i>↗</i></a>
          <a href="/start?plan=demand"><span>“Attention turns into too few bookings.”</span><b>Demand · £495</b><i>↗</i></a>
          <a href="/start?plan=full-house"><span>“We need the whole growth engine connected.”</span><b>Full House · £1,000</b><i>↗</i></a>
        </div>
      </section>

      <section className="content-production section-pad" id="content-team">
        <div className="content-production-head"><p className="eyebrow light">Custom production</p><h2>Need a content team<br/><em>on site?</em></h2><p>For venues that need fresh photography, video or hands-on social support, we build a production package around the venue.</p></div>
        <div className="production-grid">
          {['On-site social media manager','Professional food + drink photography','Restaurant + venue videography','Reels + TikTok production','Event + launch coverage','Creator-led content days','Monthly or quarterly shoots'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}
        </div>
        <div className="custom-quote"><p>Travel, crew size, shoot frequency and production volume vary by venue.</p><a href="/start?project=content-production" className="button button-cream">Get a custom content quote <span>↗</span></a></div>
      </section>

      <section className="playbook-band section-pad" id="playbook">
        <p className="eyebrow">Not ready to choose a plan?</p>
        <h2>See how we would transform<br/><em>your marketing first.</em></h2>
        <p>Download the free Hospitality Growth Playbook and see how we approach local SEO, offers, customer capture, retargeting and repeat visits.</p>
        <a className="button button-signal" href="/start?download=growth-playbook">Get the free growth playbook <span>↗</span></a>
      </section>

      <section className="pricing-final"><span>Still comparing?</span><h2>Bring us the quiet bit.<br/><em>We'll find the leak.</em></h2><p>Tell us the slow service, underused room, weak launch or disconnected marketing problem. We will point to the smallest sensible starting point.</p><a className="button button-cream" href="/start">Tell us what is quiet <span>↗</span></a></section>
    </main>
  </>;
}
