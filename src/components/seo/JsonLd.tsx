import { COMPANY, SERVICES, TEAM } from "@/lib/constants";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://trustdsi.com/#organization",
    name: "Direct Servicing Initiative",
    alternateName: "DSI",
    url: "https://trustdsi.com",
    logo: "https://trustdsi.com/images/dsi-logo.png",
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2648 E. Workman Ave., Suite 3001-288",
      addressLocality: "West Covina",
      addressRegion: "CA",
      postalCode: "91791",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "State",
        name: "California",
      },
      {
        "@type": "City",
        name: "Los Angeles",
      },
      {
        "@type": "City",
        name: "West Covina",
      },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 34.0686,
          longitude: -117.939,
        },
        geoRadius: "100 mi",
      },
    ],
    knowsAbout: [
      "Private Loan Servicing",
      "Hard Money Loan Servicing",
      "Bridge Loan Servicing",
      "Non-Performing Loan Resolution",
      "Distressed Asset Management",
      "Investor Reporting",
      "ACH Payment Processing",
      "Loan Compliance",
      "Foreclosure Coordination",
      "Loan Boarding",
    ],
    slogan: COMPANY.tagline,
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Frank Williams",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 7,
    },
  };

  return <JsonLdScript data={data} />;
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://trustdsi.com/#localbusiness",
    name: "Direct Servicing Initiative",
    alternateName: "DSI",
    url: "https://trustdsi.com",
    image: "https://trustdsi.com/images/dsi-logo.png",
    description:
      "Direct Servicing Initiative is Southern California's trusted private loan servicer, providing compliant, transparent, end-to-end loan servicing for individual investors, private money lenders, investment companies, brokers, and hedge funds.",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2648 E. Workman Ave., Suite 3001-288",
      addressLocality: "West Covina",
      addressRegion: "CA",
      postalCode: "91791",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0686,
      longitude: -117.939,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 34.0522,
        longitude: -118.2437,
      },
      geoRadius: "150 mi",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Loan Servicing Solutions",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
        },
      })),
    },
  };

  return <JsonLdScript data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://trustdsi.com/#website",
    url: "https://trustdsi.com",
    name: "Direct Servicing Initiative",
    description: COMPANY.description,
    publisher: {
      "@id": "https://trustdsi.com/#organization",
    },
  };

  return <JsonLdScript data={data} />;
}

export function ServiceJsonLd() {
  const data = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@id": "https://trustdsi.com/#organization",
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    serviceType: "Loan Servicing",
  }));

  return (
    <>
      {data.map((d, i) => (
        <JsonLdScript key={i} data={d} />
      ))}
    </>
  );
}

export function TeamJsonLd() {
  const data = TEAM.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    image: `https://trustdsi.com${member.image}`,
    worksFor: {
      "@id": "https://trustdsi.com/#organization",
    },
    memberOf: {
      "@type": "Organization",
      name: "Direct Servicing Initiative",
    },
  }));

  return (
    <>
      {data.map((d, i) => (
        <JsonLdScript key={i} data={d} />
      ))}
    </>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://trustdsi.com${item.href}`,
    })),
  };

  return <JsonLdScript data={data} />;
}
