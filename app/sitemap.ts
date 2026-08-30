import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { services } from "./services/service-data";

const siteUrl = "https://www.noquietnights.co.uk";

function getInsightSlugs() {
  const insightsDir = path.join(process.cwd(), "app", "insights");
  if (!fs.existsSync(insightsDir)) return [];

  return fs.readdirSync(insightsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => fs.existsSync(path.join(insightsDir, slug, "page.tsx")))
    .sort();
}

function getTopLevelLandingSlugs() {
  const appDir = path.join(process.cwd(), "app");
  const alreadyListed = new Set(["restaurants", "pubs-bars", "drinks-brands", "services", "pricing", "work", "about", "insights"]);
  const excluded = new Set(["start", "team", "reviews", "privacy", "credits"]);

  if (!fs.existsSync(appDir)) return [];

  return fs.readdirSync(appDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => !alreadyListed.has(slug) && !excluded.has(slug))
    .filter((slug) => fs.existsSync(path.join(appDir, slug, "page.tsx")))
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/restaurants`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/pubs-bars`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/drinks-brands`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/work`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/insights`, changeFrequency: "weekly", priority: 0.85 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const landingPages: MetadataRoute.Sitemap = getTopLevelLandingSlugs().map((slug) => ({
    url: `${siteUrl}/${slug}`,
    changeFrequency: "monthly",
    priority: slug === "contact" ? 0.7 : 0.82,
  }));

  const insightPages: MetadataRoute.Sitemap = getInsightSlugs().map((slug) => ({
    url: `${siteUrl}/insights/${slug}`,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  return [...core, ...servicePages, ...landingPages, ...insightPages];
}
