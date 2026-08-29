import type { Metadata } from "next";
import Link from "next/link";
import { services } from "./service-data";
import ServiceHeader from "./service-header";

export const metadata: Metadata = {
  title: "Hospitality Marketing Services UK",
  description: "Hospitality marketing services for UK restaurants, pubs and bars: local SEO, social media, Google and Meta ads, content, customer follow-up and websites.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Hospitality Marketing Services UK | No Quiet Nights",
    description: "Choose one hospitality marketing service or let us connect the whole plan around what your venue needs.",
    url: "/services",
    type: "website",
  },
};

const siteUrl = "https://www.noquietnights.co.uk";
const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hospitality marketing services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.eyebrow,
    url: `${siteUrl}/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHeader />
      <main className="services-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className="services-hero section-pad">
          <p className="eyebrow">Hospitality marketing services</p>
          <h1>More than posts.<br/><em>A system for filling the week.</em></h1>
          <p className="services-hero-copy">Choose the marketing help you need, or let us manage it all. We work with restaurants, pubs and bars across social media, Google, ads, content, websites and customer follow-up.</p>
        </section>

        <section className="services-grid section-pad">
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} className="service-tile" key={service.slug}>
              <div className="service-tile-image">
                <img src={service.image} alt={service.imageAlt} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="service-tile-copy">
                <p>{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <strong>{service.promise}</strong>
                <i>Explore service ↗</i>
              </div>
            </Link>
          ))}
        </section>

        <section className="proof-principle section-pad">
          <p className="eyebrow light">Use what solves the problem</p>
          <h2>Choose the service from<br/><em>what needs help.</em></h2>
          <p>If people cannot find you, Google visibility may come first. If a strong offer needs more reach, ads may help. If customers visit once and disappear, follow-up matters. We start with the business problem, then choose the marketing.</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Link href="/pricing" className="button button-cream">See pricing <span>↗</span></Link>
            <Link href="/start" className="button button-cream">Tell us what needs help <span>↗</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
