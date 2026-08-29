import Link from "next/link";

export const metadata = {
  title: "Hospitality marketing for restaurants, pubs and bars | NO QUIET NIGHTS",
  description: "We help restaurants, pubs and bars get found, bring in more customers and give them reasons to come back through social media, Google, ads, content and customer follow-up."
};

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Link className="site-logo" href="/" aria-label="No Quiet Nights">
          <span className="brand-mark"><span>NO QUIET</span><span>NIGHTS<i>•</i></span></span>
        </Link>
        <nav className="desktop-nav">
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/team">Team</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/insights">Insights</Link>
        </nav>
        <Link className="nav-cta" href="/start">Start a project <span>↗</span></Link>
      </header>

      <main>
        <section className="pricing-hero page-top">
          <p className="eyebrow">Hospitality marketing</p>
          <h1>Restaurants shouldn't have<br/><em>quiet nights.</em></h1>
          <div className="pricing-hero-aside">
            <p>We help restaurants, pubs and bars get found, bring in more customers and give them reasons to come back.</p>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <Link href="/services" className="button button-ink">See what we do <span>↗</span></Link>
              <Link href="/pricing" className="button button-signal">See pricing <span>↗</span></Link>
            </div>
          </div>
          <div className="price-promise"><b>ONE</b><span>hospitality<br/>marketing team</span><i>SOCIAL · GOOGLE<br/>ADS · FOLLOW-UP</i></div>
        </section>

        <section className="plan-selector section-pad">
          <div className="selector-head">
            <p className="eyebrow">What we help with</p>
            <h2>Simple marketing.<br/><em>Clear jobs.</em></h2>
          </div>
          <div className="selector-list">
            <Link href="/services/social-media-management"><span>Social media that stays active and looks worth visiting.</span><b>Social media</b><i>↗</i></Link>
            <Link href="/services/local-seo"><span>Show up when people nearby search on Google.</span><b>Local SEO</b><i>↗</i></Link>
            <Link href="/services/paid-ads"><span>Use Meta and Google ads to bring more people through the door.</span><b>Paid ads</b><i>↗</i></Link>
            <Link href="/services/crm-repeat-customers"><span>Keep customer details and give people reasons to come back.</span><b>Repeat customers</b><i>↗</i></Link>
          </div>
        </section>

        <section className="playbook-band section-pad">
          <p className="eyebrow">The big idea</p>
          <h2>Get found. Get chosen.<br/><em>Bring them back.</em></h2>
          <p>Good hospitality marketing should do more than keep your Instagram busy. It should help people discover you, decide to visit, book more easily and come back again.</p>
          <Link href="/pricing" className="button button-signal">See our monthly plans <span>↗</span></Link>
        </section>

        <section className="pricing-final">
          <span>Got a quiet day, weak launch or marketing problem?</span>
          <h2>Bring us the quiet bit.<br/><em>We'll find the leak.</em></h2>
          <p>Tell us what is not working. We will tell you where we would start.</p>
          <Link className="button button-cream" href="/start">Start a conversation <span>↗</span></Link>
        </section>
      </main>
    </>
  );
}
