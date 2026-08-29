import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://no-quiet-nights.vercel.app";

export const metadata: Metadata = {
  title: "About No Quiet Nights | UK Hospitality Marketing Agency",
  description: "Meet No Quiet Nights, a UK hospitality marketing agency for restaurants, pubs, bars and drinks brands, built around commercial problems, clear scopes and useful measurement.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About No Quiet Nights | UK Hospitality Marketing Agency",
    description: "Hospitality marketing without agency theatre: commercial priorities, clear scopes and useful reporting.",
    url: "/about",
    type: "website",
  },
};

const schema = { "@context": "https://schema.org", "@type": "AboutPage", name: "About No Quiet Nights", url: `${siteUrl}/about`, description: "About No Quiet Nights, a UK hospitality marketing agency for restaurants, pubs, bars and drinks brands.", mainEntity: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "No Quiet Nights" } };

export default function AboutPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="about-hero page-top"><div className="about-type"><p className="eyebrow">About No Quiet Nights</p><h1>A hospitality marketing agency built around <em>what needs to get busier.</em></h1><p>No Quiet Nights works with UK restaurants, pubs, bars and drinks brands. We start with the commercial problem, choose the smallest useful marketing intervention and measure whether the thing that mattered actually changed.</p></div><div className="about-photo"><img src="https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?auto=format&fit=crop&w=1400&q=82" alt="Restaurant team preparing a dining room before service" /></div></section>
      <section className="manifesto section-pad"><span className="manifesto-index">00 / HOW WE THINK</span><h2>The room matters<br/>more than the <em>report.</em></h2><p>Hospitality marketing can look busy while the operator is still asking one fair question: what changed? We focus on local discovery, bookings, footfall, enquiries, customer relationships and repeat visits, then use the channels that fit the job.</p></section>
      <section className="principles-board"><article><span>01</span><h3>Commercial before cosmetic</h3><p>Creative should make the business easier to choose, not merely easier to admire.</p></article><article><span>02</span><h3>Specific before broad</h3><p>A defined service, audience and reason beats vague awareness.</p></article><article><span>03</span><h3>Owned before rented</h3><p>Search, websites, customer permission and CRM reduce dependence on social algorithms.</p></article><article><span>04</span><h3>Plain English before theatre</h3><p>Clear work, clear numbers and no jargon for its own sake.</p></article></section>
      <section className="plan-selector section-pad"><div className="selector-head"><p className="eyebrow">Where to go next</p><h2>Choose the page that matches<br/><em>your situation.</em></h2></div><div className="selector-list"><Link href="/restaurants"><span>Marketing for discovery, bookings, quieter services and repeat diners.</span><b>Restaurant marketing agency UK</b><i>↗</i></Link><Link href="/pubs-bars"><span>Marketing for footfall, food trade, events, private hire and regulars.</span><b>Pub + bar marketing agency UK</b><i>↗</i></Link><Link href="/drinks-brands"><span>Marketing for launches, consumer pull, trade stories and route to market.</span><b>Drinks marketing agency UK</b><i>↗</i></Link><Link href="/services"><span>Explore local SEO, paid media, social, CRM, content and website support.</span><b>Hospitality marketing services</b><i>↗</i></Link></div></section>
      <section className="about-final"><span>NQN / UK</span><h2>Bring us the<br/><em>trading problem.</em></h2><Link className="button button-cream" href="/start">Find my starting point <span>↗</span></Link></section>
    </main>
  </>;
}
