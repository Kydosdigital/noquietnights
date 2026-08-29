import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";

export const metadata: Metadata = {
  title: "Hospitality Marketing Results & Measurement | No Quiet Nights",
  description: "See how No Quiet Nights measures hospitality marketing for restaurants, pubs, bars and drinks brands using clear before-and-after evidence.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Hospitality Marketing Results & Measurement | No Quiet Nights",
    description: "Clear measurement for hospitality marketing, with case studies added when the evidence is approved.",
    url: "/work",
    type: "website",
  },
};

const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Hospitality Marketing Results and Measurement", url: `${siteUrl}/work`, description: "How No Quiet Nights measures hospitality marketing work and publishes verified proof." };

export default function WorkPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="work-hero page-top"><p className="eyebrow light">How we measure the work</p><h1>You should know what your marketing <em>is doing.</em></h1><p>We track the numbers that match the job. That might be Google searches, bookings, event responses, enquiries, customer-list growth or repeat visits. Case studies will be added here when the evidence is approved.</p><Link className="button button-cream" href="/start">Tell us what you want to improve <span>↗</span></Link></section>
      <section className="proof-ledger section-pad"><div className="proof-ledger-head"><p className="eyebrow">What good proof needs</p><h2>Every number<br/>needs <em>context.</em></h2><p>A result only means something when you know what changed and where the number came from.</p></div><div className="proof-requirements"><article><span>01</span><h3>The problem</h3><p>What needed to improve.</p></article><article><span>02</span><h3>Before</h3><p>What was happening before the work started.</p></article><article><span>03</span><h3>What we changed</h3><p>The marketing work we actually did.</p></article><article><span>04</span><h3>When</h3><p>The period we are comparing.</p></article><article><span>05</span><h3>What happened</h3><p>The booking, enquiry, customer or sales result.</p></article><article><span>06</span><h3>Where it came from</h3><p>The platform or system behind the number.</p></article></div></section>
      <section className="metric-wall"><div className="metric-wall-title"><p className="eyebrow light">What we measure</p><h2>Different job.<br/><em>Different numbers.</em></h2></div><article><span>RESTAURANTS</span><h3>Bookings and quieter services</h3><p>Google searches · bookings · covers · private dining · repeat visits</p></article><article><span>PUBS + BARS</span><h3>Nights, events and private hire</h3><p>Food covers · events · enquiries · footfall · repeat visits</p></article><article><span>DRINKS BRANDS</span><h3>Demand and sales</h3><p>Trade enquiries · stockist searches · first purchase · ad results · repeat purchase where available</p></article></section>
      <section className="plan-selector section-pad"><div className="selector-head"><p className="eyebrow">How we track each service</p><h2>Measure what the work<br/><em>is meant to change.</em></h2></div><div className="selector-list"><Link href="/services/local-seo"><span>Track Google visibility, website visits, calls, directions and other useful actions.</span><b>Local SEO</b><i>↗</i></Link><Link href="/services/paid-ads"><span>Track spend, clicks, enquiries, bookings and the cost of useful actions.</span><b>Paid ads</b><i>↗</i></Link><Link href="/services/crm-repeat-customers"><span>Track customer-list growth, email and SMS response, win-back campaigns and repeat visits where possible.</span><b>Customer follow-up</b><i>↗</i></Link><Link href="/pricing"><span>See what is included at each monthly price.</span><b>Pricing</b><i>↗</i></Link></div></section>
      <section className="work-behind section-pad"><p className="eyebrow light">Case studies are coming</p><h2>When the proof is approved,<br/><em>the case goes here.</em></h2><p>We will only publish client results when the numbers are verified, the context is clear and the client is happy for us to share them.</p><Link className="button button-cream" href="/start">Start a measurable project <span>↗</span></Link></section>
    </main>
  </>;
}
