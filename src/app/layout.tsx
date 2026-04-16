import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
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
        url: "/images/dsi-logo.png",
        width: 600,
        height: 206,
        alt: "Direct Servicing Initiative — Private Loan Servicing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Servicing Initiative | Private Loan Servicing",
    description:
      "Compliant, transparent loan servicing for private lenders and investors in Southern California.",
    images: ["/images/dsi-logo.png"],
  },
  alternates: {
    canonical: "https://trustdsi.com",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "West Covina",
    "geo.position": "34.0686;-117.9390",
    "ICBM": "34.0686, -117.9390",
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
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
