import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "../service-data";

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
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <strong>{service.promise}</strong>
          <p>{service.intro}</p>
          <div className="service-hero-actions">
            <Link href={`/start?service=${service.slug}`} className="button button-signal">Talk about this service <span>↗</span></Link>
            <Link href="/pricing" className="text-link">See pricing →</Link>
          </div>
        </div>
        <figure className="service-detail-image">
          <img src={service.image} alt={service.imageAlt} />
          <figcaption>Real stock photography, not AI generated.</figcaption>
        </figure>
      </section>

      <section className="service-outcomes section-pad">
        <p className="eyebrow">What this should change</p>
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
          <p className="eyebrow light">What we actually do</p>
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
          <p className="eyebrow">Proof, not theatre</p>
          <h2>How we would<br/><em>prove the work.</em></h2>
          <p>These are evidence types, not invented client results. When your approved case studies are ready, the strongest real examples can drop straight into this section.</p>
        </div>
        <div className="proof-grid">
          {service.proof.map((item) => (
            <article key={item.label}>
              <span>Evidence</span>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-fit section-pad">
        <p className="eyebrow light">Good fit if</p>
        <h2>This service makes sense when...</h2>
        <ul>
          {service.bestFor.map((item) => <li key={item}><span>✓</span>{item}</li>)}
        </ul>
      </section>

      <section className="service-next section-pad">
        <p className="eyebrow">Need more than one service?</p>
        <h2>Connect it into the<br/><em>Full House system.</em></h2>
        <p>We can combine visibility, paid demand, SEO, customer capture and repeat-visit marketing into one joined-up plan.</p>
        <div>
          <Link href="/pricing#monthly" className="button button-ink">See monthly plans <span>↗</span></Link>
          <Link href="/services" className="text-link">Explore all services →</Link>
        </div>
      </section>
    </main>
  );
}
