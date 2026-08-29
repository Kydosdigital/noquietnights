import Link from "next/link";
import { services } from "./service-data";

export const metadata = {
  title: "Hospitality marketing services | NO QUIET NIGHTS",
  description: "Social media, paid ads, local SEO, content production, CRM, websites and growth strategy for UK restaurants, pubs and bars."
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero section-pad">
        <p className="eyebrow">Hospitality marketing services</p>
        <h1>More than posts.<br/><em>A system for filling the week.</em></h1>
        <p className="services-hero-copy">Choose one pressure point or connect the whole journey. Every service is built around a simple question: what should this do for the venue commercially?</p>
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
        <p className="eyebrow light">How we talk about proof</p>
        <h2>No invented success stories.<br/><em>Evidence when we have it.</em></h2>
        <p>Until a real client case study is approved for publication, we show the evidence we would use to prove the work: platform reporting, search visibility, booking actions, CRM performance and documented before-and-after changes.</p>
        <Link href="/start" className="button button-cream">Tell us what is quiet <span>↗</span></Link>
      </section>
    </main>
  );
}
