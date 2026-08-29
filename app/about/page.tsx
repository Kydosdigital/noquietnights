import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";

export const metadata: Metadata = {
  title: "About No Quiet Nights | UK Hospitality Marketing Agency",
  description: "Meet No Quiet Nights, a UK hospitality marketing agency for restaurants, pubs, bars and drinks brands. Simple plans, clear work and useful reporting.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About No Quiet Nights | UK Hospitality Marketing Agency",
    description: "Hospitality marketing without the jargon: clear priorities, clear work and useful reporting.",
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
      <section className="about-hero page-top"><div className="about-type"><p className="eyebrow">About No Quiet Nights</p><h1>A hospitality marketing agency built around <em>what needs to get busier.</em></h1><p>We work with restaurants, pubs, bars and drinks brands across the UK. We start with the part of the business that needs help, choose the marketing that makes sense and track whether it worked.</p></div><div className="about-photo"><img src="https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?auto=format&fit=crop&w=1400&q=82" alt="Restaurant team preparing a dining room before service" /></div></section>
      <section className="manifesto section-pad"><span className="manifesto-index">00 / HOW WE THINK</span><h2>The room matters<br/>more than the <em>report.</em></h2><p>Marketing can look busy while the venue stays quiet. We care about the things that matter to the business: being found, getting bookings, filling events, winning enquiries and bringing customers back.</p></section>
      <section className="principles-board"><article><span>01</span><h3>Business first</h3><p>Good creative should help people choose you, not just make the feed look nice.</p></article><article><span>02</span><h3>Be specific</h3><p>One clear night, offer or audience is better than vague awareness.</p></article><article><span>03</span><h3>Build what you own</h3><p>Your website, Google presence and customer list should become more useful over time.</p></article><article><span>04</span><h3>Plain English</h3><p>Clear work, clear numbers and no jargon for the sake of it.</p></article></section>
      <section className="plan-selector section-pad"><div className="selector-head"><p className="eyebrow">Where to go next</p><h2>Choose the page that matches<br/><em>your business.</em></h2></div><div className="selector-list"><Link href="/restaurants"><span>Marketing for bookings, quieter services and repeat diners.</span><b>Restaurant marketing</b><i>↗</i></Link><Link href="/pubs-bars"><span>Marketing for footfall, food, events, private hire and regulars.</span><b>Pub + bar marketing</b><i>↗</i></Link><Link href="/drinks-brands"><span>Marketing for launches, demand, stockists and repeat purchase.</span><b>Drinks brand marketing</b><i>↗</i></Link><Link href="/services"><span>Explore Google, social media, ads, content, websites and customer follow-up.</span><b>Our services</b><i>↗</i></Link></div></section>
      <section className="about-final"><span>NQN / UK</span><h2>Bring us the<br/><em>quiet bit.</em></h2><Link className="button button-cream" href="/start">Find my starting point <span>↗</span></Link></section>
    </main>
  </>;
}
