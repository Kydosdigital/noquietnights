import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./insights-shell.module.css";

const pathwayLinks = [
  {
    href: "/restaurants",
    eyebrow: "Restaurants",
    title: "Turn local attention into booked tables.",
    copy: "Social, local SEO, paid demand and retention built around covers, sittings and repeat visits.",
  },
  {
    href: "/pubs-bars",
    eyebrow: "Pubs + bars",
    title: "Give quieter sessions a reason to fill up.",
    copy: "Marketing for footfall, events, private hire, local discovery and the trading moments that matter.",
  },
  {
    href: "/drinks-brands",
    eyebrow: "Drinks brands",
    title: "Create demand people can ask for by name.",
    copy: "Build discovery, trial, trade pull-through and a clearer route from attention to purchase.",
  },
];

export default function InsightsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className={styles.shell}>
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
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-cta" href="/contact">Start a project <span>↗</span></Link>
      </header>

      {children}

      <section className={styles.bridge} aria-labelledby="insights-next-step">
        <div className={styles.bridgeInner}>
          <p className={styles.bridgeEyebrow}>FROM READING TO REVENUE</p>
          <h2 id="insights-next-step">You found the answer. Now fix the quiet bit.</h2>
          <p className={styles.bridgeLead}>
            Start with the trading problem, not a channel. Tell us which service, sitting, room or launch should be doing more, and we will point you to the smallest sensible starting point.
          </p>

          <div className={styles.pathways}>
            {pathwayLinks.map((link) => (
              <a className={styles.pathway} href={link.href} key={link.href}>
                <span>{link.eyebrow}</span>
                <strong>{link.title}</strong>
                <p>{link.copy}</p>
                <em>See how we help →</em>
              </a>
            ))}
          </div>

          <div className={styles.bridgeActions}>
            <a className={styles.primaryAction} href="/contact">
              Start a project
            </a>
            <a className={styles.secondaryAction} href="/pricing">
              Compare plans from £165
            </a>
            <a className={styles.textAction} href="/services">
              Explore all services →
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <a href="/" aria-label="No Quiet Nights home">
              <img
                className={styles.footerLogo}
                src="/brand/no-quiet-nights-logo-reversed.svg"
                alt="No Quiet Nights"
                width="158"
                height="52"
              />
            </a>
            <p>Hospitality marketing that fills the week, not just Saturday.</p>
          </div>

          <div className={styles.footerColumn}>
            <strong>Who we help</strong>
            <a href="/restaurants">Restaurants</a>
            <a href="/pubs-bars">Pubs + bars</a>
            <a href="/drinks-brands">Drinks brands</a>
          </div>

          <div className={styles.footerColumn}>
            <strong>Work with us</strong>
            <a href="/services">Services</a>
            <a href="/pricing">Pricing</a>
            <a href="/contact">Start a project</a>
          </div>

          <div className={styles.footerColumn}>
            <strong>NO QUIET NIGHTS</strong>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 No Quiet Nights</span>
          <span>UK hospitality growth studio</span>
        </div>
      </footer>

      <div className={styles.mobileCta}>
        <span>Need more covers or footfall?</span>
        <a href="/contact">Start a project</a>
      </div>
    </div>
  );
}
