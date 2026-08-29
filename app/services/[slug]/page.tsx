import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "../service-data";
import ServiceHeader from "../service-header";

const siteUrl = "https://no-quiet-nights.vercel.app";
const seo: Record<string, { title: string; description: string; h1: string }> = {
  "social-media-management": { title: "Hospitality Social Media Management UK", description: "Social media management for UK restaurants, pubs and bars. Plan content around offers, events, launches, local customers and measurable venue demand.", h1: "Hospitality social media management that gives people a reason to visit." },
  "paid-ads": { title: "Hospitality PPC Agency UK | Google & Meta Ads", description: "Google Ads and Meta advertising for UK restaurants, pubs and bars, built around bookings, events, private hire, launches and measurable local demand.", h1: "Hospitality PPC and paid social built around bookings, footfall and demand." },
  "local-seo": { title: "Local SEO for Restaurants, Pubs & Bars UK", description: "Local SEO for UK restaurants, pubs and bars: Google Business Profile optimisation, Maps visibility, reviews, local search strategy and website SEO.", h1: "Local SEO for restaurants, pubs and bars that need to be found nearby." },
  "content-production": { title: "Hospitality Photography & Video Content UK", description: "Photography, videography and short-form content production for UK restaurants, pubs, bars and hospitality campaigns.", h1: "Hospitality photography and video built for the channels that need it." },
  "crm-repeat-customers": { title: "Hospitality CRM & Customer Retention Marketing UK", description: "CRM, email, SMS, win-back and repeat-customer marketing for UK restaurants, pubs and bars using permission-based first-party customer data.", h1: "Hospitality CRM and retention marketing that gives customers a reason to return." },
  "website-conversion": { title: "Hospitality Website & Conversion Optimisation UK", description: "Hospitality website and landing-page optimisation for UK restaurants, pubs and bars, improving booking, menu, private-hire and enquiry journeys.", h1: "Hospitality websites that make the next commercial action clear." },
  "launch-growth-strategy": { title: "Hospitality Marketing Strategy UK | Launch & Growth", description: "Hospitality marketing strategy for UK restaurant and bar launches, quiet periods and growth plans across SEO, content, paid media, CRM and offers.", h1: "Hospitality marketing strategy for launches, quiet periods and growth." },
};

const relatedGuides: Record<string, { label: string; href: string }[]> = {
  "social-media-management": [
    { label: "Restaurant social media management cost UK", href: "/insights/restaurant-social-media-management-cost-uk" },
    { label: "Pub social media management cost UK", href: "/insights/pub-social-media-management-cost-uk" },
    { label: "Drinks brand social media management cost UK", href: "/insights/drinks-brand-social-media-management-cost-uk" },
  ],
  "paid-ads": [
    { label: "Hospitality paid media management cost UK", href: "/insights/hospitality-paid-media-management-cost-uk" },
    { label: "Hospitality SEO vs Google Ads", href: "/insights/hospitality-seo-vs-google-ads" },
    { label: "Google Ads vs Meta Ads for restaurants", href: "/insights/google-ads-vs-meta-ads-restaurants" },
  ],
  "local-seo": [
    { label: "Hospitality local SEO cost UK", href: "/insights/hospitality-local-seo-cost-uk" },
    { label: "Restaurant SEO cost UK", href: "/insights/restaurant-seo-cost-uk" },
    { label: "Pub SEO cost UK", href: "/insights/pub-seo-cost-uk" },
  ],
  "crm-repeat-customers": [
    { label: "Hospitality email marketing and CRM cost UK", href: "/insights/hospitality-email-marketing-crm-cost-uk" },
  ],
  "website-conversion": [
    { label: "Hospitality website cost UK", href: "/insights/hospitality-website-cost-uk" },
    { label: "Drinks brand website cost UK", href: "/insights/drinks-brand-website-cost-uk" },
  ],
  "launch-growth-strategy": [
    { label: "How much should a restaurant spend on marketing?", href: "/insights/how-much-should-restaurant-spend-on-marketing-uk" },
    { label: "How much should a pub spend on marketing?", href: "/insights/how-much-should-pub-spend-marketing-uk" },
    { label: "How much should you spend launching a drinks brand?", href: "/insights/how-much-should-you-spend-launching-a-drinks-brand-uk" },
  ],
};

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const target = seo[slug] ?? { title: `${service.eyebrow} for Hospitality`, description: service.promise, h1: service.title };
  return {
    title: target.title,
    description: target.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: `${target.title} | No Quiet Nights`, description: target.description, url: `/services/${slug}`, type: "website" },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const target = seo[slug] ?? { title: service.eyebrow, description: service.promise, h1: service.title };
  const guides = relatedGuides[slug] ?? [];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: target.title, serviceType: service.eyebrow, description: target.description, url: `${siteUrl}/services/${slug}`, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "No Quiet Nights" }, areaServed: { "@type": "Country", name: "United Kingdom" }, audience: { "@type": "Audience", audienceType: "Restaurants, pubs, bars and hospitality operators" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Hospitality Marketing Services", item: `${siteUrl}/services` }, { "@type": "ListItem", position: 3, name: service.eyebrow, item: `${siteUrl}/services/${slug}` }] },
    ],
  };

  return (
    <>
      <ServiceHeader />
      <main className="service-detail-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className="service-detail-hero">
          <div className="service-detail-copy">
            <p className="eyebrow">{service.eyebrow} for UK hospitality</p>
            <h1>{target.h1}</h1>
            <strong>{service.promise}</strong>
            <p>{service.intro}</p>
            <div className="service-hero-actions"><Link href={`/start?service=${service.slug}`} className="button button-signal">Talk to us about {service.eyebrow.toLowerCase()} <span>↗</span></Link><Link href="/pricing" className="text-link">See hospitality marketing pricing →</Link></div>
          </div>
          <figure className="service-detail-image"><img src={service.image} alt={service.imageAlt} /><figcaption>Hospitality marketing creative for restaurants, pubs and bars.</figcaption></figure>
        </section>
        <section className="service-outcomes section-pad"><p className="eyebrow">What this should improve</p><div className="outcome-grid">{service.outcomes.map((outcome,index)=><article key={outcome}><span>{String(index+1).padStart(2,"0")}</span><h2>{outcome}</h2></article>)}</div></section>
        <section className="service-work section-pad"><div className="service-section-head"><p className="eyebrow light">What we do</p><h2>What {service.eyebrow.toLowerCase()}<br/><em>actually includes.</em></h2></div><div className="work-list">{service.work.map((item,index)=><article key={item.title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>
        <section className="service-proof section-pad"><div className="service-section-head"><p className="eyebrow">How we measure it</p><h2>Know what your<br/><em>marketing is doing.</em></h2><p>Measurement follows the commercial job, from search visibility and qualified traffic to enquiries, bookings, customer-list growth and repeat visits.</p></div><div className="proof-grid">{service.proof.map(item=><article key={item.label}><span>We track</span><h3>{item.label}</h3><p>{item.text}</p></article>)}</div></section>
        <section className="service-fit section-pad"><p className="eyebrow light">This is useful if</p><h2>When this hospitality marketing service makes sense</h2><ul>{service.bestFor.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul></section>
        {guides.length > 0 && <section className="service-outcomes section-pad"><p className="eyebrow">Buyer guides</p><h2>Research the cost and channel<br/><em>before you commit.</em></h2><div className="outcome-grid">{guides.map((guide,index)=><article key={guide.href}><span>{String(index+1).padStart(2,"0")}</span><h3><Link href={guide.href}>{guide.label} →</Link></h3></article>)}</div></section>}
        <section className="service-next section-pad"><p className="eyebrow">Need more than one service?</p><h2>Connect it into the<br/><em>whole marketing picture.</em></h2><p>We can combine local visibility, social media, paid demand, customer capture and repeat-customer marketing into one joined-up plan.</p><div><Link href="/pricing#monthly" className="button button-ink">Compare monthly plans <span>↗</span></Link><Link href="/services" className="text-link">Explore all hospitality marketing services →</Link></div></section>
      </main>
    </>
  );
}
