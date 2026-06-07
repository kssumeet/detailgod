import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-08");
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...navLinks.map((l) => ({
      url: `${siteConfig.url}/${l.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
