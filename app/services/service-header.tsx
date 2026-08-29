import Link from "next/link";
import { contactEmailDisplay, contactEmailHref } from "../components/lead-form";

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
        <Link href="/work">Proof</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a href={contactEmailHref} aria-label={`Email ${contactEmailDisplay}`}>{contactEmailDisplay}</a>
        <Link className="nav-cta" href="/contact">Start a project <span>↗</span></Link>
      </div>
    </header>
  );
}
