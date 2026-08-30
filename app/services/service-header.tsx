import Link from "next/link";

export default function ServiceHeader() {
  return (
    <header className="site-header">
      <Link className="site-logo" href="/" aria-label="No Quiet Nights home">
        <span className="brand-mark"><span>NO QUIET</span><span>NIGHTS<i>•</i></span></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/services">Services</Link>
        <Link href="/restaurants">Restaurants</Link>
        <Link href="/pubs-bars">Pubs + bars</Link>
        <Link href="/drinks-brands">Drinks brands</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="nav-cta" href="/contact">Start a project <span>↗</span></Link>
    </header>
  );
}
