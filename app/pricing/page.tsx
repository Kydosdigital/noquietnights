import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Marketing Pricing from £165",
  description:
    "Simple monthly marketing plans for UK restaurants, pubs and bars, including social media, local SEO, paid ads and repeat-customer marketing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Hospitality Marketing Pricing from £165 | No Quiet Nights",
    description: "Four simple monthly plans to help hospitality businesses get found, bring in customers and bring them back.",
    url: "/pricing",
    type: "website",
  },
};

const plans = [
  {
    n: "01", name: "Starter", price: "165",
    title: "Show up like a venue worth visiting.",
    copy: "For hospitality businesses that need consistent, professional social media without overcomplicating it.",
    items: ["Instagram, Facebook and TikTok", "3 planned posts per week", "Professional graphic design and video editing", "Monthly content calendar", "Basic social media plan", "Stories 2 to 3 times per week"],
    cta: "Start with Starter", href: "/start?plan=starter"
  },
  {
    n: "02", name: "Visibility", price: "295",
    title: "Be easier to find. Harder to ignore.",
    copy: "Help more local people find you on social media, Google and Maps.",
    items: ["Everything in Starter", "5 planned posts per week", "Full social profile setup and improvements", "Google Business Profile improvements", "Local SEO setup and ongoing work", "Local keyword plan", "Google Maps visibility improvements", "Review growth plan", "Website SEO recommendations", "Monthly content and campaign plan", "Community management", "Stories 3 to 5 times per week", "Monthly visibility report"],
    cta: "Build my visibility", href: "/start?plan=visibility"
  },
  {
    n: "03", name: "Demand", price: "495",
    title: "Turn local attention into bookings and enquiries.",
    copy: "We run the ads, build the offer and help turn interest into bookings.",
    items: ["Everything in Visibility", "Meta ads management", "Google Search ads management", "Campaign and offer planning", "Dedicated campaign landing page", "Lead and booking capture setup", "Tracking setup", "Customer follow-up system", "Instant enquiry follow-up", "Ads for people who already showed interest", "Monthly growth review", "Monthly performance report"],
    note: "Advertising spend is separate.", cta: "Build my demand", href: "/start?plan=demand"
  },
  {
    n: "04", name: "Full House", price: "1,000", featured: true,
    title: "Get found. Bring in customers. Bring them back.",
    copy: "Your complete marketing team for growth and repeat business.",
    items: ["Everything in Demand", "Advanced local SEO and Google visibility", "Monthly marketing and growth plan", "Offer and campaign development", "Meta and Google ads management", "Landing pages that help turn visitors into bookings", "Grow your customer email and SMS list", "Customer database and targeted follow-up", "Email and SMS marketing", "Ads for people who already know you", "Win-back campaigns for previous customers", "Birthday, VIP and loyalty campaigns", "Repeat-visit marketing", "Review generation system", "Website checks to find where customers drop off", "Monthly review of what is working and what to do next"],
    note: "Advertising spend and third-party platform costs are separate.", cta: "Build my growth system", href: "/start?plan=full-house"
  }
];

function Header() {
  return <header className="site-header">
    <a className="site-logo" href="/" aria-label="No Quiet Nights"><span className="brand-mark"><span>NO QUIET</span><span>NIGHTS<i>•</i></span></span></a>
    <nav className="desktop-nav"><a href="/services">Services</a><a href="#monthly">Plans</a><a href="/team">Team</a></nav>
    <a className="nav-cta" href="/start">Start a project <span>↗</span></a>
  </header>;
}

export default function PricingPage() {
  return <>
    <Header />
    <main id="main-content">
      <section className="pricing-hero page-top">
        <p className="eyebrow">Simple monthly pricing</p>
        <h1>Start with what you need.<br/><em>Grow when you're ready.</em></h1>
        <div className="pricing-hero-aside"><p>Four monthly plans to help you get found, bring in customers and give them reasons to come back.</p><a href="#monthly" className="button button-ink">Compare plans <span>↓</span></a></div>
        <div className="price-promise"><b>£165</b><span>Monthly plans<br/>start here</span><i>CLEAR PRICES<br/>NO SURPRISES</i></div>
      </section>

      <section className="plan-stage" id="monthly">
        <div className="plan-stage-intro section-pad-x"><p className="eyebrow light">Monthly marketing</p><h2>Choose the plan<br/>that solves <em>today's problem.</em></h2><p>Ad spend is separate on Demand and Full House. We agree exactly what is included before work starts.</p></div>
        <div className="plan-stack">
          {plans.map(plan => <article className={`plan-card ${plan.featured ? "featured full-house" : ""}`} key={plan.name}>
            <div className="plan-card-top"><span>{plan.n}</span>{plan.featured && <b>Complete marketing</b>}<small>Monthly</small></div>
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
        <div className="selector-head"><p className="eyebrow">Which sounds like you?</p><h2>What do you<br/><em>need help with?</em></h2></div>
        <div className="selector-list">
          <a href="/start?plan=starter"><span>“Our social media keeps going quiet.”</span><b>Starter · £165</b><i>↗</i></a>
          <a href="/start?plan=visibility"><span>“Local people are not finding us enough.”</span><b>Visibility · £295</b><i>↗</i></a>
          <a href="/start?plan=demand"><span>“We get attention, but not enough bookings.”</span><b>Demand · £495</b><i>↗</i></a>
          <a href="/start?plan=full-house"><span>“We need someone to handle the whole marketing picture.”</span><b>Full House · £1,000</b><i>↗</i></a>
        </div>
      </section>

      <section className="content-production section-pad" id="content-team">
        <div className="content-production-head"><p className="eyebrow light">On-site content shoots</p><h2>Need a content team<br/><em>at your venue?</em></h2><p>If you need fresh photos, videos or hands-on social support, we can build a content package around your venue.</p></div>
        <div className="production-grid">
          {['On-site social media manager','Professional food + drink photography','Restaurant + venue videography','Reels + TikTok production','Event + launch coverage','Creator-led content days','Monthly or quarterly shoots'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}
        </div>
        <div className="custom-quote"><p>Price depends on location, crew size, how often we shoot and how much content you need.</p><a href="/start?project=content-production" className="button button-cream">Get a custom content quote <span>↗</span></a></div>
      </section>

      <section className="playbook-band section-pad" id="playbook">
        <p className="eyebrow">Not ready to choose a plan?</p>
        <h2>See what we would change<br/><em>in your marketing.</em></h2>
        <p>Download the free Hospitality Growth Playbook to see how we use local SEO, stronger offers, customer lists, follow-up ads and repeat-customer marketing.</p>
        <a className="button button-signal" href="/start?download=growth-playbook">Get the free growth playbook <span>↗</span></a>
      </section>

      <section className="pricing-final"><span>Still comparing?</span><h2>Bring us the quiet bit.<br/><em>We'll find the leak.</em></h2><p>Tell us about a slow day, underused room, weak launch or marketing that feels busy but is not bringing enough customers. We will tell you where we would start.</p><a className="button button-cream" href="/start">Tell us what is quiet <span>↗</span></a></section>
    </main>
  </>;
}
