import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  FrankWilliamsJsonLd,
  JuanWilliamsJsonLd,
} from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trustdsi.com"),
  title: {
    default: "Direct Servicing Initiative | Private Loan Servicing in Southern California",
    template: "%s | DSI — Direct Servicing Initiative",
  },
  description:
    "Direct Servicing Initiative (DSI) is Southern California's trusted private loan servicer. Compliant, transparent loan servicing with investor dashboards, ACH processing, compliance reporting, and distressed asset resolution. Serving West Covina, Los Angeles, and all of Southern California.",
  keywords: [
    "loan servicing",
    "private lending",
    "private loan servicer",
    "investor reporting",
    "ACH processing",
    "compliance reporting",
    "foreclosure coordination",
    "distressed assets",
    "loan administration",
    "payment processing",
    "investor dashboards",
    "Southern California loan servicing",
    "West Covina loan servicing",
    "Los Angeles loan servicing",
    "private money servicing",
    "hard money loan servicing",
    "bridge loan servicing",
    "loan boarding",
    "non-performing loans",
    "Direct Servicing Initiative",
  ],
  // No url/title/description here: children inherit the whole openGraph
  // object as-is (shallow merge), so page-level values would be shadowed by
  // homepage values. Leaving them unset lets Next fall back to each page's
  // resolved title/description, and canonical is declared per page.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Direct Servicing Initiative",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Direct Servicing Initiative — Private Loan Servicing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Finance",
  // Canonical is intentionally NOT set here. Metadata merges shallowly, so a
  // root canonical is inherited verbatim by every page that doesn't override
  // it — which pointed six pages at the homepage. Every page (including the
  // homepage via page.tsx) declares its own alternates.canonical.
  other: {
    "geo.region": "US-CA",
    "geo.placename": "West Covina",
    "geo.position": "34.0686;-117.9390",
    "ICBM": "34.0686, -117.9390",
    // Search engine verification placeholders — fill in console codes when issued.
    // "google-site-verification": "[HUMAN verify — Google Search Console]",
    // "msvalidate.01": "[HUMAN verify — Bing Webmaster Tools]",
    // "yandex-verification": "[HUMAN verify — Yandex Webmaster]",
    // "p:domain_verify": "[HUMAN verify — Pinterest]",
    // "facebook-domain-verification": "[HUMAN verify — Meta Business Manager]",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${leagueSpartan.variable}`}>
      <body className="font-sans antialiased">
        <OrganizationJsonLd />
        <FrankWilliamsJsonLd />
        <JuanWilliamsJsonLd />
        <WebSiteJsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
