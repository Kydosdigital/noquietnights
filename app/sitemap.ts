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
      url: `${siteUrl}/insights/restaurant-marketing-agency-cost-uk`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
