import type { MetadataRoute } from "next";
import { services } from "./services/service-data";

const siteUrl = "https://no-quiet-nights.vercel.app";

const insightSlugs = [
  "bar-marketing-agency-cost-uk",
  "best-pub-marketing-agency-uk",
  "drinks-brand-launch-pr-vs-paid-social",
  "drinks-brand-marketing-budget-uk",
  "drinks-brand-social-media-management-cost-uk",
  "drinks-brand-website-cost-uk",
  "drinks-marketing-agency-cost-uk",
  "drinks-marketing-agency-vs-freelancer",
  "drinks-marketing-agency-vs-in-house",
  "drinks-marketing-agency-vs-pr-agency",
  "google-ads-vs-meta-ads-pubs",
  "google-ads-vs-meta-ads-restaurants",
  "hospitality-email-marketing-crm-cost-uk",
  "hospitality-local-seo-cost-uk",
  "hospitality-paid-media-management-cost-uk",
  "hospitality-seo-vs-google-ads",
  "hospitality-website-cost-uk",
  "how-much-should-pub-spend-marketing-uk",
  "how-much-should-restaurant-spend-on-marketing-uk",
  "how-much-should-you-spend-launching-a-drinks-brand-uk",
  "how-to-choose-a-drinks-marketing-agency-uk",
  "how-to-choose-a-restaurant-marketing-agency",
  "influencer-marketing-vs-paid-social-drinks-brands",
  "is-a-drinks-marketing-agency-worth-it",
  "is-a-restaurant-marketing-agency-worth-it",
  "pub-marketing-agency-cost-uk",
  "pub-marketing-agency-specialist-vs-generalist",
  "pub-marketing-agency-vs-freelancer",
  "pub-marketing-agency-vs-in-house",
  "pub-marketing-agency-worth-it",
  "pub-private-hire-marketing-agency-cost",
  "pub-seo-cost-uk",
  "pub-social-media-management-cost-uk",
  "restaurant-marketing-agency-cost-uk",
  "restaurant-marketing-agency-specialist-vs-generalist",
  "restaurant-marketing-agency-vs-freelancer",
  "restaurant-marketing-agency-vs-in-house",
  "restaurant-seo-cost-uk",
  "restaurant-social-media-management-cost-uk",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/restaurants`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/pubs-bars`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/drinks-brands`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/work`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/insights`, changeFrequency: "weekly", priority: 0.85 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const insightPages: MetadataRoute.Sitemap = insightSlugs.map((slug) => ({
    url: `${siteUrl}/insights/${slug}`,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  return [...core, ...servicePages, ...insightPages];
}
