import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header global-site-header">
      <Link className="site-logo" aria-label="No Quiet Nights home" href="/">
        <span className="brand-mark" aria-label="No Quiet Nights">
          <span>NO QUIET</span><span>NIGHTS<i aria-hidden="true">•</i></span>
        </span>
      </Link>

      <nav className="desktop-nav global-desktop-nav" aria-label="Main navigation">
        <Link href="/services">Services</Link>
        <details className="global-sector-nav">
          <summary>Sectors <span aria-hidden="true">↓</span></summary>
          <div className="global-sector-popover">
            <span className="global-sector-kicker">Who we help</span>
            <Link href="/restaurants"><b>01</b><span>Restaurants<small>Covers, bookings, repeat visits</small></span><i aria-hidden="true">↗</i></Link>
            <Link href="/pubs-bars"><b>02</b><span>Pubs + bars<small>Footfall, events, private hire</small></span><i aria-hidden="true">↗</i></Link>
            <Link href="/drinks-brands"><b>03</b><span>Drinks brands<small>Discovery, trial, trade demand</small></span><i aria-hidden="true">↗</i></Link>
          </div>
        </details>
        <Link href="/work">Work</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/about">About</Link>
      </nav>

      <Link className="nav-cta global-nav-cta" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>

      <details className="global-mobile-nav">
        <summary aria-label="Open navigation">Menu <span aria-hidden="true">☰</span></summary>
        <div className="global-mobile-panel">
          <Link href="/services">Services <span>↗</span></Link>
          <p>Sectors</p>
          <Link href="/restaurants">Restaurants <span>↗</span></Link>
          <Link href="/pubs-bars">Pubs + bars <span>↗</span></Link>
          <Link href="/drinks-brands">Drinks brands <span>↗</span></Link>
          <Link href="/work">Work <span>↗</span></Link>
          <Link href="/pricing">Pricing <span>↗</span></Link>
          <Link href="/insights">Insights <span>↗</span></Link>
          <Link href="/about">About <span>↗</span></Link>
          <Link className="global-mobile-cta" href="/contact">Start a project</Link>
        </div>
      </details>
    </header>
  );
}
