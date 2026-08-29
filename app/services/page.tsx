import type { Metadata } from "next";
import Link from "next/link";
import { services } from "./service-data";
import ServiceHeader from "./service-header";

export const metadata: Metadata = {
  title: "Hospitality Marketing Services UK",
  description: "Hospitality marketing services for UK restaurants, pubs and bars: local SEO, social media, Google and Meta ads, content, CRM, websites and growth strategy.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Hospitality Marketing Services UK | No Quiet Nights",
    description: "Connect local SEO, social media, paid demand, content, CRM and conversion around the commercial needs of your venue.",
    url: "/services",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hospitality marketing services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.eyebrow,
    url: `https://no-quiet-nights.vercel.app/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHeader />
      <main className="services-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className="services-hero section-pad">
          <p className="eyebrow">Hospitality marketing services UK</p>
          <h1>Hospitality marketing services<br/><em>built to fill the week.</em></h1>
          <p className="services-hero-copy">No Quiet Nights provides joined-up digital marketing for restaurants, pubs and bars across the UK. Use one specialist service when the problem is clear, or combine local SEO, social media, Google and Meta ads, content, websites and customer retention into one growth plan.</p>
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
                <i>Explore {service.eyebrow.toLowerCase()} ↗</i>
              </div>
            </Link>
          ))}
        </section>

        <section className="proof-principle section-pad">
          <p className="eyebrow light">One plan, not seven disconnected suppliers</p>
          <h2>Choose the channel from<br/><em>the commercial problem.</em></h2>
          <p>Local SEO is useful when customers cannot find you. Paid media is useful when a strong offer needs demand. CRM matters when existing customers disappear after one visit. The right hospitality marketing mix depends on where the customer journey is leaking.</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Link href="/pricing" className="button button-cream">Compare hospitality marketing pricing <span>↗</span></Link>
            <Link href="/start" className="button button-cream">Tell us what needs to improve <span>↗</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
