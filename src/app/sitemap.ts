import { MetadataRoute } from "next";

// Sitemap drives both classic search engine crawl and AI engine
// discovery. Priorities reflect lead-conversion value (hero pages high,
// definitional reference lower); changeFrequency hints crawlers on how
// often to refetch.
//
// Deliberately absent:
// - lastModified — stamping build time on every entry told crawlers every
//   page changed on every deploy, which destroys the signal. Omitting the
//   field is honest; re-add per-entry dates only if they track real
//   content changes.
// - /glossary#term fragment entries — fragments are not separately
//   indexable documents, and 40 of them diluted the file to 78% noise.
//   Per-term discovery is handled by the DefinedTermSet JSON-LD on
//   /glossary instead.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trustdsi.com";

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/lenders`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/investors`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/why-dsi`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/professionals`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/glossary`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/team`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
