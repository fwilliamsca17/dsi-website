import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebSiteJsonLd,
  FrankWilliamsJsonLd,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trustdsi.com",
    siteName: "Direct Servicing Initiative",
    title: "Direct Servicing Initiative | Private Loan Servicing Experts",
    description:
      "Southern California's trusted private loan servicer. End-to-end servicing from loan setup to distressed asset resolution. Investor dashboards, ACH processing, and full compliance.",
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
    title: "Direct Servicing Initiative | Private Loan Servicing",
    description:
      "Compliant, transparent loan servicing for private lenders and investors in Southern California.",
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
  alternates: {
    canonical: "https://trustdsi.com",
  },
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
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
