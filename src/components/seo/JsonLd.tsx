import { COMPANY, SERVICES, TEAM } from "@/lib/constants";

// JSON-LD is server-rendered from constants we author — not user input —
// so the XSS surface is small. We still escape the four characters that
// could break out of the <script> tag or the surrounding HTML, which is
// the standard pattern Next.js, Remix, and Rails use for inline JSON.
function safeJsonForScript(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonForScript(data) }}
    />
  );
}

// ───────────────────────────────────────────────────────────────────
// CORE ENTITY SCHEMAS — emit once, reference everywhere via @id.
// ───────────────────────────────────────────────────────────────────

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    // LocalBusiness is folded in here rather than emitted as a second
    // entity — two @ids for the same business made knowledge graphs pick
    // one at random. LocalBusiness-specific properties (geo, priceRange,
    // openingHoursSpecification, paymentAccepted) live on this node.
    "@type": [
      "Organization",
      "FinancialService",
      "ProfessionalService",
      "LocalBusiness",
    ],
    "@id": "https://trustdsi.com/#organization",
    name: "Direct Servicing Initiative",
    alternateName: ["DSI", "Trust DSI", "Direct Servicing Initiative, Inc."],
    legalName: COMPANY.legalName,
    url: "https://trustdsi.com",
    logo: {
      "@type": "ImageObject",
      url: "https://trustdsi.com/images/dsi-logo.png",
      width: 600,
      height: 206,
    },
    image: "https://trustdsi.com/opengraph-image",
    description: COMPANY.description,
    slogan: COMPANY.tagline,
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        "@id": "https://trustdsi.com/#frank-williams",
      },
    ],
    founder: {
      "@id": "https://trustdsi.com/#frank-williams",
    },
    // Broker of Record on file for the California brokerage entity —
    // schema.org doesn't model "broker of record" as a first-class
    // relationship, so we surface him via `member` (Person → Org) and
    // again as an employee with the explicit job title.
    member: { "@id": "https://trustdsi.com/#juan-williams" },
    employee: [
      { "@id": "https://trustdsi.com/#frank-williams" },
      { "@id": "https://trustdsi.com/#juan-williams" },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: TEAM.length,
    },
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
    paymentAccepted: ["ACH", "Bank Transfer", "Check"],
    currenciesAccepted: "USD",
    // Multiple ContactPoint entries — each tagged with a purpose so AI engines
    // and knowledge panels can route the right inquiry to the right channel.
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        availableLanguage: ["English", "Spanish"],
        areaServed: "US-CA",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        availableLanguage: ["English", "Spanish"],
      },
      {
        "@type": "ContactPoint",
        contactType: "billing support",
        email: COMPANY.email,
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: COMPANY.email,
        availableLanguage: "English",
      },
    ],
    sameAs: [
      COMPANY.social.linkedin,
      COMPANY.social.facebook,
      COMPANY.social.youtube,
    ].filter(Boolean),
    areaServed: [
      { "@type": "State", name: "California" },
      { "@type": "AdministrativeArea", name: "Southern California" },
      { "@type": "City", name: "West Covina" },
      { "@type": "City", name: "Los Angeles" },
      { "@type": "City", name: "Pasadena" },
      { "@type": "City", name: "Long Beach" },
      { "@type": "City", name: "Irvine" },
      { "@type": "City", name: "Anaheim" },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 34.0686,
          longitude: -117.939,
        },
        geoRadius: "150 mi",
      },
    ],
    knowsAbout: [
      "Private Loan Servicing",
      "Hard Money Loan Servicing",
      "Bridge Loan Servicing",
      "Trust Deed Investor Reporting",
      "Fractional Note Distributions",
      "Self-Directed IRA Note Servicing",
      "Non-Performing Loan Resolution",
      "Distressed Asset Management",
      "RESPA Section 6 Servicing Transfer",
      "Truth in Lending Act (TILA)",
      "California Civil Code §2924",
      "California Homeowner Bill of Rights",
      "California Finance Lenders Law",
      "Notice of Default (NOD)",
      "Notice of Trustee Sale (NOS)",
      "Bankruptcy Proof of Claim",
      "REO Disposition",
      "1098 Mortgage Interest Reporting",
      "1099-INT Interest Income Reporting",
      "K-1 Supporting Schedules",
      "GAAP-Aligned Investor Reporting",
      "Trust Accounting",
      "ACH Payment Processing",
      "Demand Statement Preparation",
      "Beneficiary Statement Preparation",
      "Reconveyance Coordination",
      "Loan Boarding",
      "Loss Mitigation",
      "Foreclosure Coordination",
    ],
    knowsLanguage: ["English", "Spanish"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Loan Servicing Solutions",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          provider: { "@id": "https://trustdsi.com/#organization" },
        },
      })),
    },
    award: ["CCIM Designation (Frank Williams, Founder)"],
    parentOrganization: {
      "@type": "Organization",
      name: "Williams Capital Advisors",
    },
  };

  return <JsonLdScript data={data} />;
}

export function JuanWilliamsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://trustdsi.com/#juan-williams",
    name: "Juan N. Williams",
    alternateName: "Juan Nunez Williams",
    givenName: "Juan",
    additionalName: "Nunez",
    familyName: "Williams",
    jobTitle: "Broker of Record",
    worksFor: { "@id": "https://trustdsi.com/#organization" },
    affiliation: [
      { "@id": "https://trustdsi.com/#organization" },
      {
        "@type": "Organization",
        name: "Capital Direct Funding, Inc.",
        identifier: "DRE# 01885595",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "California Real Estate Broker",
      identifier: "DRE# 01115216",
      validFrom: "2004-03-27",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "California Department of Real Estate",
      },
    },
    knowsAbout: [
      "California real estate brokerage",
      "Broker of record compliance",
      "Private money lending",
    ],
  };
  return <JsonLdScript data={data} />;
}

export function FrankWilliamsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://trustdsi.com/#frank-williams",
    name: "Frank Williams",
    givenName: "Frank",
    familyName: "Williams",
    jobTitle: "Principal & Founder",
    worksFor: { "@id": "https://trustdsi.com/#organization" },
    // Frank is the operating principal and founder. The California broker
    // license is held by Juan N. Williams as Broker of Record (see
    // JuanWilliamsJsonLd #juan-williams). Personal credentials are not
    // attributed here.
    knowsAbout: [
      "Private money loan servicing",
      "Commercial real estate",
      "Trust accounting",
      "California foreclosure law",
      "RESPA",
      "TILA",
    ],
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
    inLanguage: "en-US",
    description: COMPANY.description,
    publisher: { "@id": "https://trustdsi.com/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://trustdsi.com/glossary#{search_term_string}",
      },
      "query-input": "required name=search_term_string",
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
    provider: { "@id": "https://trustdsi.com/#organization" },
    areaServed: { "@type": "State", name: "California" },
    serviceType: "Loan Servicing",
    audience: {
      "@type": "Audience",
      audienceType:
        "Private money lenders, hard money lenders, trust deed investors, mortgage brokers, real estate attorneys, CPAs, title and escrow officers",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} capabilities`,
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        name: f,
      })),
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

export function TeamJsonLd() {
  const data = TEAM.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    ...(member.image
      ? { image: `https://trustdsi.com${member.image}` }
      : {}),
    worksFor: { "@id": "https://trustdsi.com/#organization" },
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

// ───────────────────────────────────────────────────────────────────
// AEO / VOICE / FEATURE SNIPPET SCHEMAS
// ───────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

// FAQPage with speakable property — voice assistants (Google Assistant,
// Siri, Alexa) pull the speakable spans to answer voice queries.
export function FAQJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-answer", "[data-speakable]"],
    },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        author: { "@id": "https://trustdsi.com/#organization" },
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

// HowTo schema for the DSI servicing lifecycle — surfaces in Google
// "How to" results and is parsed by AI engines explaining the process.
export function ServicingProcessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How DSI Services a Private Money Loan, Boarding Through Payoff",
    description:
      "DSI's four-stage loan servicing lifecycle for private money loans, with published SLAs at each stage.",
    totalTime: "P30D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: 0 },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Boarding",
        text: "Loan boarded into the servicing system within 48 hours of complete document package. Trust account funded. Borrower welcome packet sent under RESPA Section 6. Payment schedule and broker fee disbursement rules configured.",
        url: "https://trustdsi.com/lenders#boarding",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Active Servicing",
        text: "ACH collections with same-day funding visibility. Segregated trust accounting. Automated SMS and email alerts with TCPA-compliant opt-in. Real-time payment tracking and proactive late-payment outreach.",
        url: "https://trustdsi.com/services#loan-servicing",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Reporting and Compliance",
        text: "Monthly GAAP-aligned investor statements. K-1 supporting schedules for fund SMAs. Audit-trail documentation. Year-end 1098 and 1099-INT tax package locked December 28 and delivered before January 31.",
        url: "https://trustdsi.com/investors#reporting",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Resolution and Payoff",
        text: "Payoff demands turned in under 48 hours. Workouts handled end-to-end including loan modifications, NOD/NOS preparation, bankruptcy proof-of-claim packages, and REO transition support.",
        url: "https://trustdsi.com/services#distressed",
      },
    ],
  };
  return <JsonLdScript data={data} />;
}

// DefinedTermSet — emits each glossary entry as a schema-recognized
// definition. Knowledge graphs (Google, Bing, Wikidata) use these to
// associate DSI with the terminology of the loan servicing industry.
type DefinedTerm = {
  name: string;
  alternateName?: string;
  description: string;
  url: string;
};

export function DefinedTermSetJsonLd({
  name,
  url,
  terms,
}: {
  name: string;
  url: string;
  terms: DefinedTerm[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#termset`,
    name,
    url,
    inDefinedTermSet: url,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      alternateName: t.alternateName,
      description: t.description,
      url: t.url,
      inDefinedTermSet: url,
    })),
  };
  return <JsonLdScript data={data} />;
}

// Per-page WebPage helper. Combines speakable spans, breadcrumb context,
// and primary entity reference. Drop into any page to emit a clean
// page-level schema record.
export function PageSeo({
  title,
  description,
  path,
  type = "WebPage",
  crumbs,
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "CollectionPage";
  crumbs?: { name: string; href: string }[];
}) {
  const url = `https://trustdsi.com${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": "https://trustdsi.com/#website" },
    about: { "@id": "https://trustdsi.com/#organization" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://trustdsi.com/opengraph-image",
    },
    breadcrumb: crumbs
      ? {
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `https://trustdsi.com${c.href}`,
          })),
        }
      : undefined,
  };
  return <JsonLdScript data={data} />;
}
