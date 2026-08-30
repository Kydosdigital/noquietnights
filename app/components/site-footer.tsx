import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-global-footer">
      <section className="site-footer-callout">
        <div>
          <p className="site-footer-kicker">The next good night starts here</p>
          <h2>What needs to be<br/><em>busier?</em></h2>
        </div>
        <Link className="site-footer-action" href="/contact">
          Tell us<br/>the quiet bit <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <Link href="/" aria-label="No Quiet Nights home" className="site-footer-logo">
            <img src="/brand/no-quiet-nights-logo-reversed.svg" alt="No Quiet Nights" />
          </Link>
          <p>Hospitality marketing that helps good venues get found, chosen and remembered.</p>
          <a href="mailto:hello@noquietnights.co.uk">hello@noquietnights.co.uk</a>
        </div>

        <nav aria-label="Footer explore links">
          <p className="site-footer-label">Explore</p>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
        </nav>

        <nav aria-label="Footer sector links">
          <p className="site-footer-label">Built for</p>
          <Link href="/restaurants">Restaurants</Link>
          <Link href="/pubs-bars">Pubs + bars</Link>
          <Link href="/drinks-brands">Drinks brands</Link>
        </nav>

        <nav aria-label="Footer company links">
          <p className="site-footer-label">More</p>
          <Link href="/team">Team</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/credits">Photography</Link>
        </nav>
      </div>

      <div className="site-footer-base">
        <span>© 2026 NO QUIET NIGHTS</span>
        <span>Make good venues properly busy.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
