import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospitality Marketing Agency UK",
  description: "UK hospitality marketing agency for restaurants, pubs and bars. Connect local SEO, social media, Google and Meta ads, CRM and repeat-customer marketing to fill quieter periods.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hospitality Marketing Agency UK | No Quiet Nights",
    description: "Hospitality marketing built around local discovery, bookings, footfall and repeat customers for UK restaurants, pubs and bars.",
    url: "/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hospitality Marketing Agency Services",
  serviceType: "Hospitality marketing",
  provider: { "@type": "Organization", "@id": "https://no-quiet-nights.vercel.app/#organization", name: "No Quiet Nights" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  audience: { "@type": "Audience", audienceType: "Restaurants, pubs, bars and hospitality operators" },
  url: "https://no-quiet-nights.vercel.app/",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <header className="site-header">
        <Link className="site-logo" href="/" aria-label="No Quiet Nights">
          <span className="brand-mark"><span>NO QUIET</span><span>NIGHTS<i>•</i></span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/restaurants">Restaurants</Link>
          <Link href="/pubs-bars">Pubs + bars</Link>
          <Link href="/drinks-brands">Drinks brands</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/insights">Insights</Link>
        </nav>
        <Link className="nav-cta" href="/start">Start a project <span>↗</span></Link>
      </header>

      <main>
        <section className="pricing-hero page-top">
          <p className="eyebrow">UK hospitality marketing agency</p>
          <h1>Hospitality marketing that fills<br/><em>the whole week.</em></h1>
          <div className="pricing-hero-aside">
            <p>No Quiet Nights is a hospitality marketing agency for UK restaurants, pubs and bars. We connect local SEO, social media, paid advertising and customer follow-up around one commercial job: helping more of the right people find you, choose you and come back.</p>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <Link href="/services" className="button button-ink">Explore hospitality marketing services <span>↗</span></Link>
              <Link href="/pricing" className="button button-signal">See agency pricing <span>↗</span></Link>
            </div>
          </div>
          <div className="price-promise"><b>ONE</b><span>hospitality<br/>marketing team</span><i>LOCAL SEO · SOCIAL<br/>ADS · CRM</i></div>
        </section>

        <section className="plan-selector section-pad">
          <div className="selector-head">
            <p className="eyebrow">Hospitality digital marketing services</p>
            <h2>Get found. Get chosen.<br/><em>Bring them back.</em></h2>
          </div>
          <div className="selector-list">
            <Link href="/services/local-seo"><span>Improve Google Business Profile, Maps visibility and the website signals behind high-intent local discovery.</span><b>Local SEO for hospitality</b><i>↗</i></Link>
            <Link href="/services/social-media-management"><span>Plan restaurant, pub and bar social content around offers, events, launches and the reasons people actually visit.</span><b>Hospitality social media management</b><i>↗</i></Link>
            <Link href="/services/paid-ads"><span>Use Google Ads and Meta advertising for bookings, events, private hire, launches and measurable local demand.</span><b>Hospitality PPC + paid social</b><i>↗</i></Link>
            <Link href="/services/crm-repeat-customers"><span>Capture permission-based customer relationships and build birthday, VIP, win-back and repeat-visit campaigns.</span><b>Hospitality CRM + retention</b><i>↗</i></Link>
          </div>
        </section>

        <section className="playbook-band section-pad">
          <p className="eyebrow">Built for hospitality</p>
          <h2>Marketing should finish<br/><em>at the till.</em></h2>
          <p>A specialist hospitality marketing agency should understand perishable capacity, local search, reviews, booking journeys, events, quieter services and repeat visits. We build around those commercial realities rather than treating every venue like a generic consumer brand.</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Link href="/restaurants" className="button button-signal">Restaurant marketing agency →</Link>
            <Link href="/pubs-bars" className="button button-signal">Pub + bar marketing →</Link>
            <Link href="/drinks-brands" className="button button-signal">Drinks brand marketing →</Link>
          </div>
        </section>

        <section className="plan-selector section-pad">
          <div className="selector-head">
            <p className="eyebrow">Buyer guides</p>
            <h2>Research the decision<br/><em>before the call.</em></h2>
          </div>
          <div className="selector-list">
            <Link href="/insights/restaurant-marketing-agency-cost-uk"><span>Understand typical scopes, retainers and the questions to ask before comparing restaurant agencies.</span><b>Restaurant marketing agency costs</b><i>↗</i></Link>
            <Link href="/insights/is-a-restaurant-marketing-agency-worth-it"><span>Work out whether the commercial opportunity can justify an agency investment.</span><b>Is a restaurant marketing agency worth it?</b><i>↗</i></Link>
            <Link href="/insights/pub-marketing-agency-cost-uk"><span>Compare pub marketing costs against the sessions, events and revenue lines that need movement.</span><b>Pub marketing agency costs</b><i>↗</i></Link>
          </div>
        </section>

        <section className="pricing-final">
          <span>Got a quiet day, weak launch or marketing problem?</span>
          <h2>Bring us the quiet bit.<br/><em>We'll find the leak.</em></h2>
          <p>Tell us what is not working. We will tell you where we would start, without forcing every venue into the same marketing package.</p>
          <Link className="button button-cream" href="/start">Talk to a hospitality marketing team <span>↗</span></Link>
        </section>
      </main>
    </>
  );
}
