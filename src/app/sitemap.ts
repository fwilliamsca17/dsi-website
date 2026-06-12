import { MetadataRoute } from "next";
import { GLOSSARY } from "@/lib/glossary";

// Sitemap drives both classic search engine crawl and AI engine
// discovery. Priorities reflect lead-conversion value (hero pages high,
// definitional reference lower); changeFrequency hints crawlers on how
// often to refetch. Glossary terms get individual entries so each
// definition is discoverable directly.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trustdsi.com";
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/lenders`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/investors`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/why-dsi`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/professionals`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Each glossary term as its own anchor — encourages AI engines and
  // search to index individual definitions for entity-level recall.
  const glossaryAnchors: MetadataRoute.Sitemap = GLOSSARY.map((t) => ({
    url: `${baseUrl}/glossary#${t.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...corePages, ...glossaryAnchors];
}
