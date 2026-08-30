import type { Metadata } from "next";
import Link from "next/link";
import { RevenueDial, WebGLPulse } from "./components/home-interactive";
import "./home-original.css";

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
const oldAssetBase = "https://no-quiet-nights-j93d1efpj-kydosdigitals-projects.vercel.app/images";

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

const ticker = ["RESTAURANTS", "PUBS + BARS", "DRINKS BRANDS", "DIRECT BOOKINGS", "REPEAT VISITS", "PRIVATE HIRE"];

export default function Home() {
  return (
    <div className="original-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <main>
        <section className="home-hero">
          <div className="hero-webgl"><WebGLPulse /></div>
          <div className="hero-copy">
            <p className="eyebrow light">UK hospitality marketing agency</p>
            <h1>Restaurants shouldn&apos;t have<br/><em>quiet nights.</em></h1>
            <p className="hero-lead">We help restaurants, pubs and bars get found, bring in more customers and give them reasons to come back.</p>
            <div className="hero-actions">
              <Link className="button button-cream" href="/contact">Start a project <span>↗</span></Link>
              <Link className="text-link light" href="/pricing">See pricing <span>→</span></Link>
            </div>
          </div>
          <div className="hero-photo">
            <img src={`${oldAssetBase}/hero-service.jpg`} alt="A waiter serving guests in a warmly lit restaurant" />
            <div className="photo-stamp"><span>NQN</span><small>For hospitality<br/>UK-wide</small></div>
            <p className="photo-caption">Good places deserve properly busy rooms.</p>
          </div>
          <div className="hero-side-note" aria-hidden="true">SCROLL FOR THE COMMERCIAL BIT ↓</div>
        </section>

        <div className="trade-ticker" aria-label="Services and sectors">
          <div>
            {[...ticker, ...ticker].map((item, index) => <span key={`${item}-${index}`}>{item}<i> ✳</i></span>)}
          </div>
        </div>

        <section className="expiry-section section-pad">
          <div className="expiry-copy">
            <p className="eyebrow">The perishable problem</p>
            <h2>An empty table has<br/><em>no tomorrow.</em></h2>
            <p>A quiet lunch, an unused terrace or an empty midweek service disappears at close. Hospitality marketing has to help while that capacity can still be sold.</p>
            <blockquote>“I need more people in on Tuesdays, not more likes on Tuesdays.”</blockquote>
            <p className="fine-note">The sentence that should start the strategy.</p>
          </div>
          <RevenueDial />
        </section>

        <section className="leak-section">
          <div className="leak-head section-pad-x">
            <p className="eyebrow light">One guest journey</p>
            <h2>Four places<br/>trade <em>leaks.</em></h2>
            <p>Good marketing connects discovery, decision, booking and return visits. The channels are tools, not the strategy.</p>
          </div>
          <div className="journey-line">
            <article><span>01</span><h3>Found</h3><p>You are missing when people search, scroll or ask where to go.</p><i>→</i></article>
            <article><span>02</span><h3>Chosen</h3><p>The venue is visible, but there is no decisive reason to choose it.</p><i>→</i></article>
            <article><span>03</span><h3>Booked</h3><p>Interest hits a slow site, hidden menu or vague path to action.</p><i>→</i></article>
            <article><span>04</span><h3>Brought back</h3><p>The visit happens once, but no useful follow-up survives the night.</p><i>●</i></article>
          </div>
        </section>

        <section className="sector-gallery section-pad">
          <div className="sector-gallery-head">
            <p className="eyebrow">Different trade. Different pressure.</p>
            <h2>Built around<br/>how you <em>sell.</em></h2>
            <p>One marketing system, adapted to three genuinely different hospitality journeys.</p>
          </div>
          <Link className="sector-tile restaurant-tile" href="/restaurants">
            <img src={`${oldAssetBase}/food-detail.jpg`} alt="A carefully plated restaurant dish" />
            <span className="sector-number">01</span>
            <div><p>Restaurants</p><h3>Turn “where should we eat?” into a table at yours.</h3><span>Grow restaurant bookings ↗</span></div>
          </Link>
          <Link className="sector-tile pub-tile" href="/pubs-bars">
            <img src={`${oldAssetBase}/pub-atmosphere.jpg`} alt="Guests in a warmly lit bar" />
            <span className="sector-number">02</span>
            <div><p>Pubs + bars</p><h3>Give the quiet night a reason.</h3><span>Fill a session ↗</span></div>
          </Link>
          <Link className="sector-tile drinks-tile" href="/drinks-brands">
            <img src={`${oldAssetBase}/cocktail.jpg`} alt="A cocktail on a bar" />
            <span className="sector-number">03</span>
            <div><p>Drinks brands</p><h3>Become the drink people ask for by name.</h3><span>Build drinks demand ↗</span></div>
          </Link>
        </section>

        <section className="system-section section-pad">
          <div className="system-intro">
            <p className="eyebrow">The No Quiet Nights system</p>
            <h2>Get found. Get chosen.<br/><em>Bring them back.</em></h2>
            <Link className="button button-ink" href="/services">See what we do <span>↗</span></Link>
          </div>
          <div className="system-orbit">
            <div className="orbit-centre"><span>NQN</span><small>Hospitality<br/>marketing</small></div>
            <article className="orbit-one"><b>01</b><h3>Be found</h3><p>Search, social and campaigns put you in the decision.</p></article>
            <article className="orbit-two"><b>02</b><h3>Be chosen</h3><p>Offers, creative and conversion make the next action obvious.</p></article>
            <article className="orbit-three"><b>03</b><h3>Be remembered</h3><p>Reviews, email, SMS and CRM give people reasons to return.</p></article>
          </div>
        </section>

        <section className="starter-offer">
          <div className="starter-copy">
            <p className="eyebrow light">A clear starting point</p>
            <h2><span>£</span>165<small>/month</small></h2>
            <h3>Visibility Plan</h3>
            <p>For hospitality businesses that need stronger local visibility and a cleaner Google presence before they need a larger marketing system.</p>
            <Link className="button button-cream" href="/pricing">See all plans <span>↗</span></Link>
          </div>
          <div className="starter-docket" aria-label="Visibility Plan inclusions">
            <div className="docket-top"><span>VISIBILITY / MONTHLY</span><span>NQN–0165</span></div>
            <p><span>01</span>Google Business Profile optimisation<i>✓</i></p>
            <p><span>02</span>Local search foundations<i>✓</i></p>
            <p><span>03</span>Website and SEO health checks<i>✓</i></p>
            <p><span>04</span>Local ranking tracking<i>✓</i></p>
            <p><span>05</span>Reviews and reputation support<i>✓</i></p>
            <div className="docket-base"><span>Clear scope</span><span>Monthly</span><span>Grow when ready</span></div>
          </div>
        </section>

        <section className="proof-standard section-pad">
          <div className="proof-photo">
            <img src={`${oldAssetBase}/guests-table.jpg`} alt="Friends enjoying drinks around a restaurant table" />
            <span>ROOM &gt; REPORT</span>
          </div>
          <div className="proof-copy">
            <p className="eyebrow">How we measure the work</p>
            <h2>Every number<br/>needs a <em>receipt.</em></h2>
            <p>We measure what matters to the venue and avoid inventing proof we do not have.</p>
            <ul>
              <li><span>01</span>Commercial starting point</li>
              <li><span>02</span>Defined campaign period</li>
              <li><span>03</span>Booking, revenue or demand signal</li>
              <li><span>04</span>Clear measurement source</li>
            </ul>
            <Link className="text-link" href="/work">How we measure the work <span>→</span></Link>
          </div>
        </section>

        <section className="process-section section-pad">
          <p className="eyebrow light">How the work runs</p>
          <div className="process-head">
            <h2>First, find the<br/><em>empty seat.</em></h2>
            <p>Then solve the real pressure point with the smallest useful intervention.</p>
          </div>
          <ol className="process-track">
            <li><span>01 / Diagnose</span><strong>Where is trade softer than it should be?</strong><p>A service, audience or revenue line, not a vague awareness goal.</p></li>
            <li><span>02 / Prioritise</span><strong>What is the shortest useful route?</strong><p>Start with the marketing help most likely to move the problem.</p></li>
            <li><span>03 / Launch</span><strong>Make the reason impossible to miss.</strong><p>Campaign, content and path to action move together.</p></li>
            <li><span>04 / Learn</span><strong>Put effort where the proof is.</strong><p>Measure what changed, what it cost and what happens next.</p></li>
          </ol>
        </section>

        <section className="home-final">
          <p className="eyebrow light">Your turn</p>
          <h2>What needs to be<br/><em>busier?</em></h2>
          <p>Bring us the quiet service, slow launch, underused room or marketing problem. We will tell you where we would start.</p>
          <div>
            <Link className="button button-cream" href="/contact">Start a conversation <span>↗</span></Link>
            <Link className="text-link light" href="/pricing">Compare plans <span>→</span></Link>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-callout">
          <p className="eyebrow light">The next good night starts here</p>
          <h2>What needs to be<br/><em>busier?</em></h2>
          <Link className="footer-action" href="/contact">Tell us<br/>the quiet bit <span>↗</span></Link>
        </div>
        <div className="footer-grid">
          <div className="footer-brand"><strong>NO QUIET NIGHTS</strong><p>Hospitality marketing that helps good venues get found, chosen and remembered.</p><a href="mailto:hello@noquietnights.co.uk">hello@noquietnights.co.uk</a></div>
          <div><p className="footer-label">Explore</p><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/pricing">Pricing</Link><Link href="/about">About</Link><Link href="/insights">Insights</Link></div>
          <div><p className="footer-label">Built for</p><Link href="/restaurants">Restaurants</Link><Link href="/pubs-bars">Pubs + bars</Link><Link href="/drinks-brands">Drinks brands</Link></div>
          <div><p className="footer-label">More</p><Link href="/team">Team</Link><Link href="/reviews">Reviews</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/credits">Photography</Link></div>
        </div>
        <div className="footer-base"><span>© 2026 NO QUIET NIGHTS</span><span>Make good venues properly busy.</span><Link href="/">Back to top ↑</Link></div>
      </footer>
    </div>
  );
}
