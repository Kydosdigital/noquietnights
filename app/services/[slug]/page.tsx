import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "../service-data";
import ServiceHeader from "../service-header";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.eyebrow} for hospitality | NO QUIET NIGHTS`,
    description: service.promise
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHeader />
      <main className="service-detail-page">
        <section className="service-detail-hero">
          <div className="service-detail-copy">
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <strong>{service.promise}</strong>
            <p>{service.intro}</p>
            <div className="service-hero-actions">
              <Link href={`/start?service=${service.slug}`} className="button button-signal">Talk to us about this <span>↗</span></Link>
              <Link href="/pricing" className="text-link">See pricing →</Link>
            </div>
          </div>
          <figure className="service-detail-image">
            <img src={service.image} alt={service.imageAlt} />
            <figcaption>Real stock photography, not AI generated.</figcaption>
          </figure>
        </section>

        <section className="service-outcomes section-pad">
          <p className="eyebrow">What this should improve</p>
          <div className="outcome-grid">
            {service.outcomes.map((outcome, index) => (
              <article key={outcome}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{outcome}</h2>
              </article>
            ))}
          </div>
        </section>

        <section className="service-work section-pad">
          <div className="service-section-head">
            <p className="eyebrow light">What we do</p>
            <h2>Simple words.<br/><em>Clear jobs.</em></h2>
          </div>
          <div className="work-list">
            {service.work.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="service-proof section-pad">
          <div className="service-section-head">
            <p className="eyebrow">How we measure it</p>
            <h2>Know what your<br/><em>marketing is doing.</em></h2>
            <p>We use the evidence that fits the job, from Google searches and ad results to enquiries, bookings, customer-list growth and repeat visits.</p>
          </div>
          <div className="proof-grid">
            {service.proof.map((item) => (
              <article key={item.label}>
                <span>We track</span>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-fit section-pad">
          <p className="eyebrow light">This is useful if</p>
          <h2>This service makes sense when...</h2>
          <ul>
            {service.bestFor.map((item) => <li key={item}><span>✓</span>{item}</li>)}
          </ul>
        </section>

        <section className="service-next section-pad">
          <p className="eyebrow">Need more than one service?</p>
          <h2>Let us handle the<br/><em>whole marketing picture.</em></h2>
          <p>We can combine social media, Google, ads, customer follow-up and repeat-customer marketing into one clear plan.</p>
          <div>
            <Link href="/pricing#monthly" className="button button-ink">See monthly plans <span>↗</span></Link>
            <Link href="/services" className="text-link">Explore all services →</Link>
          </div>
        </section>
      </main>
    </>
  );
}
