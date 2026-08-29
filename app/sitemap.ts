import type { MetadataRoute } from "next";

const siteUrl = "https://no-quiet-nights.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/pricing`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/insights`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/insights/restaurant-marketing-agency-cost-uk`,
      lastModified: new Date("2026-08-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
