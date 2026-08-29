import Link from "next/link";
import { services } from "./service-data";
import ServiceHeader from "./service-header";

export const metadata = {
  title: "Hospitality marketing services | NO QUIET NIGHTS",
  description: "Social media, paid ads, local SEO, content production, customer follow-up, websites and marketing strategy for UK restaurants, pubs and bars."
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHeader />
      <main className="services-page">
        <section className="services-hero section-pad">
          <p className="eyebrow">Hospitality marketing services</p>
          <h1>More than posts.<br/><em>A system for filling the week.</em></h1>
          <p className="services-hero-copy">Built for restaurants, pubs, bars and hospitality brands. Choose the help you need, or let us manage the whole marketing picture. The question is simple: how will this help your venue get more customers?</p>
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
                <i>See what we do ↗</i>
              </div>
            </Link>
          ))}
        </section>

        <section className="proof-principle section-pad">
          <p className="eyebrow light">We measure what matters</p>
          <h2>You should know what<br/><em>your marketing is doing.</em></h2>
          <p>Depending on the work, we track things like Google searches, website visits, enquiries, bookings, ad results, customer list growth and repeat-customer campaigns.</p>
          <Link href="/start" className="button button-cream">Tell us what you need help with <span>↗</span></Link>
        </section>
      </main>
    </>
  );
}
