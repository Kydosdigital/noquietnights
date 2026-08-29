import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospitality Marketing Agency UK",
  description: "UK hospitality marketing agency for restaurants, pubs and bars. Get found on Google, stay visible on social media, run ads and bring customers back.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hospitality Marketing Agency UK | No Quiet Nights",
    description: "Hospitality marketing for UK restaurants, pubs and bars, built around getting found, getting chosen and bringing customers back.",
    url: "/",
    type: "website",
  },
};

const siteUrl = "https://www.noquietnights.co.uk";
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hospitality Marketing Agency Services",
  serviceType: "Hospitality marketing",
  provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "No Quiet Nights" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  audience: { "@type": "Audience", audienceType: "Restaurants, pubs, bars and hospitality operators" },
  url: siteUrl,
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
            <h2>Get found. Get chosen.<br/><em>Bring them back.</em></h2>
          </div>
          <div className="selector-list">
            <Link href="/services/local-seo"><span>Show up when people nearby search for somewhere to eat, drink or book.</span><b>Local SEO</b><i>↗</i></Link>
            <Link href="/services/social-media-management"><span>Keep your social pages active, useful and worth visiting.</span><b>Social media</b><i>↗</i></Link>
            <Link href="/services/paid-ads"><span>Use Google and Meta ads to promote bookings, events, offers and private hire.</span><b>Paid ads</b><i>↗</i></Link>
            <Link href="/services/crm-repeat-customers"><span>Keep customer details and give people good reasons to come back.</span><b>Repeat customers</b><i>↗</i></Link>
          </div>
        </section>

        <section className="playbook-band section-pad">
          <p className="eyebrow">Built for hospitality</p>
          <h2>Marketing should help<br/><em>fill the week.</em></h2>
          <p>Saturday might already be busy. The real problem could be Tuesday dinner, Sunday lunch, private hire, a new launch or customers who never return. We build the marketing around the part of the business that needs help.</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Link href="/restaurants" className="button button-signal">Restaurant marketing →</Link>
            <Link href="/pubs-bars" className="button button-signal">Pub + bar marketing →</Link>
            <Link href="/drinks-brands" className="button button-signal">Drinks brand marketing →</Link>
          </div>
        </section>

        <section className="plan-selector section-pad">
          <div className="selector-head">
            <p className="eyebrow">Useful guides</p>
            <h2>Know what you are buying<br/><em>before you hire.</em></h2>
          </div>
          <div className="selector-list">
            <Link href="/insights/restaurant-marketing-agency-cost-uk"><span>See what restaurant marketing agencies charge and what should be included.</span><b>Restaurant agency costs</b><i>↗</i></Link>
            <Link href="/insights/is-a-restaurant-marketing-agency-worth-it"><span>Work out whether an agency is likely to be worth the spend for your restaurant.</span><b>Is an agency worth it?</b><i>↗</i></Link>
            <Link href="/insights/pub-marketing-agency-cost-uk"><span>See typical pub marketing costs and what different levels of support include.</span><b>Pub agency costs</b><i>↗</i></Link>
          </div>
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
