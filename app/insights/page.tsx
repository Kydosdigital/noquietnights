import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Marketing Insights",
  description:
    "Practical guides for UK restaurants, pubs and bars on hospitality marketing, local SEO, advertising, customer retention and growth.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Hospitality Marketing Insights | No Quiet Nights",
    description:
      "Commercially focused hospitality marketing guides for UK restaurant, pub and bar operators.",
    url: "/insights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Marketing Insights | No Quiet Nights",
    description:
      "Commercially focused hospitality marketing guides for UK restaurant, pub and bar operators.",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Hospitality Marketing Insights",
  url: "https://no-quiet-nights.vercel.app/insights",
  description:
    "Practical hospitality marketing guides for UK restaurants, pubs and bars.",
  isPartOf: { "@id": "https://no-quiet-nights.vercel.app/#website" },
};

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="section-pad" style={{ paddingTop: 140, minHeight: "80vh" }}>
        <p className="eyebrow">No Quiet Nights / Insights</p>
        <h1
          style={{
            fontFamily: "var(--condensed)",
            fontSize: "clamp(3.5rem,8vw,8rem)",
            lineHeight: 0.9,
            letterSpacing: "-.055em",
            textTransform: "uppercase",
            maxWidth: 1000,
          }}
        >
          Hospitality marketing <em style={{ fontFamily: "var(--serif)", textTransform: "none", fontWeight: 400 }}>without the fluff.</em>
        </h1>
        <p style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", maxWidth: 760, marginTop: 30 }}>
          Practical commercial guides for restaurant, pub and bar operators who want stronger local discovery, more measurable demand and more repeat visits.
        </p>
        <section aria-labelledby="latest-insight" style={{ marginTop: 70, maxWidth: 900 }}>
          <p className="eyebrow">Latest operator guide</p>
          <h2 id="latest-insight" style={{ fontSize: "clamp(2rem,4vw,4rem)", lineHeight: 1 }}>
            How much does a restaurant marketing agency cost in the UK?
          </h2>
          <p style={{ fontSize: "1.05rem", maxWidth: 760 }}>
            Compare 2026 agency price ranges, what is usually included, common extra costs and how to judge whether the fee makes commercial sense.
          </p>
          <a className="button button-ink" href="/insights/restaurant-marketing-agency-cost-uk">
            Read the guide <span>↗</span>
          </a>
        </section>
        <nav aria-label="Insights next steps" style={{ marginTop: 70, display: "flex", gap: 20, flexWrap: "wrap" }}>
          <a href="/pricing">Compare marketing plans</a>
          <a href="/start">Start a project</a>
        </nav>
      </main>
    </>
  );
}
