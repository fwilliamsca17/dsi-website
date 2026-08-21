import type { Metadata } from "next";

const SITE = "https://trustdsi.com";

/**
 * Per-page Metadata builder: self-referencing canonical + og:url.
 *
 * Next.js merges metadata shallowly per top-level key, so a page that
 * declares `openGraph` replaces the root layout's openGraph wholesale —
 * which is why the root layout deliberately carries no og url/title/
 * description, and why this helper re-states siteName/type/locale.
 * og:title and og:description fall back to the page's resolved title and
 * description; og:image comes from the app-level opengraph-image.tsx file
 * convention, which applies regardless of this object.
 *
 * Omit `title`/`description` for the homepage, which inherits the root
 * layout defaults.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE : `${SITE}${path}`;
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: { canonical: url },
    openGraph: {
      url,
      siteName: "Direct Servicing Initiative",
      type: "website",
      locale: "en_US",
      // Must be restated: declaring openGraph replaces the inherited object,
      // and the app-level opengraph-image.tsx file convention does NOT cover
      // pages that declare their own openGraph config (verified in build —
      // omitting this stripped og:image from 9 of 11 pages).
      images: ["/opengraph-image"],
    },
  };
}
