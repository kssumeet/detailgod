import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { serviceSlugs } from "@/config/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-08");
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    ...serviceSlugs.map((slug) => ({
      url: `${siteConfig.url}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
