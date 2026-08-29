export function SiteHeader() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <a className="site-logo" aria-label="No Quiet Nights home" href="/pricing"><span className="brand-mark"><span>NO QUIET</span><span>NIGHTS<i aria-hidden="true">•</i></span></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="/services">Services</a>
        <details className="sector-nav"><summary>Sectors <span aria-hidden="true">↓</span></summary><div className="sector-popover"><span className="sector-popover-kicker">Who we fill the week for</span><a href="/restaurants"><b>01</b><span>Restaurants<small>Covers, bookings, return visits</small></span><i>↗</i></a><a href="/pubs-bars"><b>02</b><span>Pubs + bars<small>Footfall, events, private hire</small></span><i>↗</i></a><a href="/drinks-brands"><b>03</b><span>Drinks brands<small>Trade pull, launches, demand</small></span><i>↗</i></a></div></details>
        <a href="/work">Proof</a><a href="/pricing">Pricing</a><a href="/about">About</a><a href="/insights">Insights</a>
      </nav>
      <a className="nav-cta" href="/start">Start a project <span aria-hidden="true">↗</span></a>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-callout"><p className="eyebrow light">The next good night starts here</p><h2>What needs to be<br/><em>busier?</em></h2><a className="footer-action" href="/start">Tell us the quiet bit <span aria-hidden="true">↗</span></a></div>
    <div className="footer-grid">
      <div className="footer-brand"><a aria-label="No Quiet Nights home" href="/pricing"><span>NO QUIET</span><span>NIGHTS<i>•</i></span></a><p>Hospitality marketing that fills the week, not just the feed.</p><a href="mailto:hello@noquietnights.co.uk">hello@noquietnights.co.uk</a></div>
      <div><p className="footer-label">Explore</p><a href="/services">Services</a><a href="/work">Proof</a><a href="/pricing">Pricing</a><a href="/about">About</a><a href="/insights">Insights</a><a href="/start">Start a project</a></div>
      <div><p className="footer-label">Built for</p><a href="/restaurants">Restaurants</a><a href="/pubs-bars">Pubs + bars</a><a href="/drinks-brands">Drinks brands</a></div>
      <div><p className="footer-label">Small print</p><span>UK-wide · Mon–Fri</span></div>
    </div>
    <div className="footer-base"><span>© 2026 NO QUIET NIGHTS</span><span>Make good venues properly busy.</span><a href="#main-content">Back to top ↑</a></div>
  </footer>;
}

export function PageSchema({ name, description, path }: { name: string; description: string; path: string }) {
  const jsonLd = { "@context":"https://schema.org", "@graph":[
    { "@type":"WebPage", name, description, url:`https://no-quiet-nights.vercel.app${path}`, isPartOf:{"@type":"WebSite","@id":"https://no-quiet-nights.vercel.app/#website"} },
    { "@type":"BreadcrumbList", itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://no-quiet-nights.vercel.app/pricing"},
      {"@type":"ListItem",position:2,name,item:`https://no-quiet-nights.vercel.app${path}`}
    ]}
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>;
}