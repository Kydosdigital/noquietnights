import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "../components/lead-form";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";

export const metadata: Metadata = {
  title: "Drinks Marketing Agency UK | Beverage Brand Marketing",
  description: "Drinks marketing agency for UK beverage brands. Launches, social media, paid campaigns, stockist support, trade marketing and repeat-purchase campaigns.",
  alternates: { canonical: "/drinks-brands" },
  openGraph: {
    title: "Drinks Marketing Agency UK | No Quiet Nights",
    description: "Marketing for UK drinks brands, from launch and social media to stockist support and repeat purchase.",
    url: "/drinks-brands",
    type: "website",
  },
};

const faqs = [
  ["What does a drinks marketing agency do?", "A drinks marketing agency can help with launch planning, social media, paid ads, content, stockist support, trade marketing and customer follow-up."],
  ["Is drinks marketing different from restaurant marketing?", "Yes. Restaurants mainly need local bookings and repeat visits. Drinks brands also need people to notice the product, try it, find where to buy it and ask for it again."],
  ["How should drinks marketing be measured?", "The right measures depend on how the brand sells, but can include website traffic, stockist searches, first purchases, trade enquiries, email growth, repeat purchase and campaign sales."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: "Drinks Marketing Agency UK", serviceType: "Drinks and beverage brand marketing", description: "Marketing for UK drinks brands across launches, social media, paid media, trade support and retention.", url: `${siteUrl}/drinks-brands`, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "No Quiet Nights" }, areaServed: { "@type": "Country", name: "United Kingdom" }, audience: { "@type": "Audience", audienceType: "Drinks brands, beverage companies and hospitality suppliers" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Drinks Brand Marketing", item: `${siteUrl}/drinks-brands` }] },
    { "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export default function DrinksBrandsPage() {
  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="drinks-hero page-top"><div className="drinks-hero-copy"><p className="eyebrow">Drinks marketing agency UK</p><h1>Make more people notice it, try it and <em>ask for it again.</em></h1><p>We help drinks brands launch, build demand and make it easier for customers and stockists to act. That can mean social media, ads, content, trade support, stockist pages or customer follow-up.</p><div><Link className="button button-ink" href="#contact">Plan a drinks campaign <span>↗</span></Link><Link className="text-link" href="/pricing">See pricing →</Link></div></div><div className="bottle-stage"><img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=82" alt="Craft cocktail served in a bar for a drinks brand campaign" /></div></section>

      <section className="three-audiences section-pad"><p className="eyebrow light">One brand. More than one buyer.</p><h2>Give customers and the trade<br/><em>a reason to choose you.</em></h2><div className="audience-triangle"><article><span>01</span><h3>Customers</h3><p>Why should somebody notice it, try it and buy it again?</p></article><article><span>02</span><h3>Stockists</h3><p>Why should a bar, retailer or distributor give the brand space?</p></article><article><span>03</span><h3>Find it</h3><p>Can interested customers quickly find where to buy or drink it?</p></article></div></section>

      <section className="plan-selector section-pad"><div className="selector-head"><p className="eyebrow">Drinks marketing services</p><h2>Start with what<br/><em>needs to move.</em></h2></div><div className="selector-list">
        <Link href="/services/social-media-management"><span>Keep the brand visible with product, serves, occasions, people and launch content.</span><b>Drinks brand social media</b><i>↗</i></Link>
        <Link href="/services/paid-ads"><span>Use Google and Meta ads to reach people, support launches and send customers to the right next step.</span><b>Paid ads for drinks brands</b><i>↗</i></Link>
        <Link href="/services/content-production"><span>Create photography and short-form video for social media, ads, launches and trade use.</span><b>Drinks photography + video</b><i>↗</i></Link>
        <Link href="/services/launch-growth-strategy"><span>Plan the launch, offers, content, partnerships and advertising in the right order.</span><b>Drinks launch planning</b><i>↗</i></Link>
      </div></section>

      <section className="playbook-band section-pad"><p className="eyebrow">Drinks buyer guides</p><h2>Know the costs and options<br/><em>before you hire.</em></h2><p><Link href="/insights/drinks-marketing-agency-cost-uk">Drinks marketing agency cost UK →</Link></p><p><Link href="/insights/how-to-choose-a-drinks-marketing-agency-uk">How to choose a drinks marketing agency in the UK →</Link></p><p><Link href="/insights/is-a-drinks-marketing-agency-worth-it">Is a drinks marketing agency worth it? →</Link></p><p><Link href="/insights/drinks-marketing-agency-vs-freelancer">Drinks marketing agency vs freelancer →</Link></p><p><Link href="/insights/how-much-should-you-spend-launching-a-drinks-brand-uk">How much should you spend launching a drinks brand? →</Link></p></section>

      <section className="section-pad"><p className="eyebrow">Frequently asked questions</p><h2>Drinks marketing FAQs</h2>{faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>
      <LeadForm eyebrow="Drinks brand enquiry" heading="What needs to move: awareness, trial, stockists or repeat sales?" />
      <section className="pricing-final"><span>Planning a launch or trying to grow sales?</span><h2>Tell us what needs to move.<br/><em>We will start there.</em></h2><p>Bring us the problem, whether that is awareness, first purchase, stockist support or repeat sales.</p><Link className="button button-cream" href="#contact">Talk about the drinks brand <span>↗</span></Link></section>
    </main>
  </>;
}
