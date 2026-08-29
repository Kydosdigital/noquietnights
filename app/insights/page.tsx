import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

const siteUrl = "https://www.noquietnights.co.uk";

export const metadata: Metadata = {
  title: "Hospitality Marketing Insights",
  description: "UK hospitality marketing guides for restaurants, pubs, bars and drinks brands, including agency costs, SEO, social media, paid ads and local marketing.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Hospitality Marketing Insights | No Quiet Nights",
    description: "Practical hospitality marketing buyer guides for UK restaurants, pubs, bars and drinks brands.",
    url: "/insights",
    type: "website",
  },
};

function getGuides() {
  const insightsDir = path.join(process.cwd(), "app", "insights");
  if (!fs.existsSync(insightsDir)) return [];
  return fs.readdirSync(insightsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => fs.existsSync(path.join(insightsDir, slug, "page.tsx")))
    .sort();
}

function label(slug: string) {
  const words = slug.replace(/-uk$/, " UK").replace(/-/g, " ").split(" ");
  return words.map((word) => {
    if (["seo", "crm", "ppc"].includes(word.toLowerCase())) return word.toUpperCase();
    if (word.toLowerCase() === "vs") return "vs";
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

function groupFor(slug: string) {
  if (/manchester|salford|stockport|bolton|trafford|altrincham|sale|oldham|rochdale|bury|wigan|tameside|prestwich|urmston|ashton|stalybridge|hyde|middleton|heywood|leigh/.test(slug)) return "Manchester + Greater Manchester";
  if (/restaurant/.test(slug)) return "Restaurant marketing";
  if (/pub|bar-/.test(slug)) return "Pub + bar marketing";
  if (/drinks/.test(slug)) return "Drinks brand marketing";
  return "Hospitality marketing";
}

export default function InsightsPage() {
  const guides = getGuides();
  const groups = Array.from(new Set(guides.map(groupFor)));
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hospitality Marketing Insights",
    url: `${siteUrl}/insights`,
    hasPart: guides.map((slug) => ({ "@type": "Article", name: label(slug), url: `${siteUrl}/insights/${slug}` })),
  };

  return <>
    <ServiceHeader />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pricing-hero page-top">
        <p className="eyebrow">Hospitality marketing insights</p>
        <h1>Useful guides before<br/><em>you spend the money.</em></h1>
        <div className="pricing-hero-aside"><p>Compare agency costs, marketing options and local suppliers before you make a decision.</p><Link className="button button-ink" href="/pricing">See our pricing <span>↗</span></Link></div>
      </section>
      {groups.map((group) => (
        <section className="plan-selector section-pad" key={group}>
          <div className="selector-head"><p className="eyebrow">{group}</p><h2>Research the question.<br/><em>Then choose what fits.</em></h2></div>
          <div className="selector-list">
            {guides.filter((slug) => groupFor(slug) === group).map((slug) => <Link href={`/insights/${slug}`} key={slug}><span>Buyer guide</span><b>{label(slug)}</b><i>↗</i></Link>)}
          </div>
        </section>
      ))}
      <section className="pricing-final"><span>Ready to talk?</span><h2>Bring us the quiet bit.<br/><em>We will start there.</em></h2><Link className="button button-cream" href="/start">Start a conversation <span>↗</span></Link></section>
    </main>
  </>;
}
