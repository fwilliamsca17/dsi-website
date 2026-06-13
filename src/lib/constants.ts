export const COMPANY = {
  name: "Direct Servicing Initiative",
  shortName: "DSI",
  legalName: "Direct Servicing Initiative, Inc.",
  tagline: "You fund them. We collect. Simple and Direct.",
  description:
    "End-to-end loan servicing built for the private lending industry. Peace of mind, transparency, and efficiency.",
  domain: "trustdsi.com",
  url: "https://trustdsi.com",
  phone: "(626) 796-1680",
  email: "info@trustdsi.com",
  address: "2648 E. Workman Ave., Suite 3001-288, West Covina, CA 91791",
  principal: "Frank Williams",
  // Broker of Record — the licensed broker on file for the entity.
  // Legal name on DRE record: Williams, Juan Nunez. Working name: Juan N. Williams.
  // 30+ year California licensee: salesperson 1991, broker 2004.
  brokerOfRecord: "Juan N. Williams",
  brokerOfRecordDre: "01115216",
  brokerOfRecordLegalName: "Williams, Juan Nunez",
  brokerOfRecordSince: "2004-03-27",
  social: {
    linkedin: "https://www.linkedin.com/company/direct-servicing-initiative",
    facebook: "https://www.facebook.com/trustdsi",
    youtube: "https://www.youtube.com/@trustdsi",
    instagram: "",
    yelp: "",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Loan Servicing", href: "/services#loan-servicing" },
      { label: "Processing & Documentation", href: "/services#processing" },
      { label: "Non-Performing & Distressed Loans", href: "/services#distressed" },
    ],
  },
  { label: "Why DSI", href: "/why-dsi" },
  { label: "For Investors", href: "/investors" },
  { label: "For Lenders", href: "/lenders" },
  {
    label: "Professionals",
    href: "/professionals",
    children: [
      { label: "Originators & Lending Partners", href: "/professionals#originators" },
      { label: "Real Estate & Bankruptcy Counsel", href: "/professionals#counsel" },
      { label: "CPAs & Fund Administrators", href: "/professionals#cpas" },
      { label: "Title, Escrow & Trustees", href: "/professionals#title-escrow" },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "loan-servicing",
    title: "Loan Servicing",
    shortDescription:
      "Full lifecycle servicing of record — boarding through payoff. ACH collections, segregated trust accounting, investor distributions, and California-grade compliance built in.",
    icon: "FileCheck",
    features: [
      "48-hour loan boarding from complete document package",
      "ACH collection with same-day funding visibility",
      "Segregated escrow & impound trust accounting (no commingling)",
      "Automated borrower alerts via SMS + email with TCPA-compliant opt-in",
      "Demand statements and payoff packages turned in under 48 hours",
      "Investor distribution calculations on pro-rata, fractionalized, and whole-note structures",
      "1098s and 1099-INTs delivered before January 31, every year",
      "Monthly investor reporting with full audit trail",
    ],
  },
  {
    slug: "processing",
    title: "Processing & Documentation Services",
    shortDescription:
      "Loan-file integrity from origination handoff through final reconveyance. Compliance review, recording coordination, and regulatory filings handled at the document level.",
    icon: "ClipboardCheck",
    features: [
      "Loan file audit against TILA, RESPA, and California §2924 requirements",
      "Recording and title coordination with county recorders and title officers",
      "Hazard, flood, and force-placed insurance tracking",
      "Property tax monitoring and impound disbursements",
      "Lien position monitoring with payoff demand support",
      "Digital document vault — full chain of custody, indexed, instantly retrievable",
      "State-specific licensing and regulatory filings",
      "Borrower file change management (assumptions, modifications, beneficiary updates)",
    ],
  },
  {
    slug: "distressed",
    title: "Non-Performing & Distressed Loan Services",
    shortDescription:
      "Workout, default, and disposition coordination — built around California Civil Code §2924, the Homeowner Bill of Rights, and the realities of private-money default.",
    icon: "TrendingUp",
    features: [
      "Early-stage delinquency outreach and cure plans",
      "Loss mitigation: forbearance, repayment plans, and modification structuring",
      "NOD (Notice of Default) preparation and trustee coordination",
      "NOS (Notice of Sale) and trustee sale support under California §2924",
      "Bankruptcy support: automatic stay tracking, proof-of-claim packages, post-discharge servicing",
      "Short sale and deed-in-lieu facilitation",
      "REO transition: post-sale accounting, asset handoff, broker coordination",
      "Investor communication throughout — every event, every status, on the record",
    ],
  },
];

export const CLIENTS = [
  { label: "Individual Investors", icon: "User" },
  { label: "Private Money Investors", icon: "Wallet" },
  { label: "Investment Companies", icon: "Building2" },
  { label: "Private Money Brokers", icon: "Handshake" },
  { label: "Hedge Funds", icon: "TrendingUp" },
];

// Animated stat counter values — numeric for tween, formatted via prefix/suffix.
export const STATS = [
  { value: 150, prefix: "$", suffix: "M+", label: "Loans Serviced" },
  { value: 500, prefix: "", suffix: "+", label: "Active Loans" },
  { value: 99.8, prefix: "", suffix: "%", label: "Payment Accuracy", decimals: 1 },
  { value: 24, prefix: "", suffix: "/7", label: "Portal Access" },
];

// Team — image may be null for licensed-but-not-customer-facing roles
// (e.g. Broker of Record). UI components fall back to a placeholder
// icon when image is null.
export type TeamMember = {
  name: string;
  title: string;
  image: string | null;
};

export const TEAM: TeamMember[] = [
  {
    name: "Frank Williams",
    title: "Principal",
    image: "/images/team/frank-williams.png",
  },
  {
    name: "Karla Banuelos",
    title: "Account Manager",
    image: "/images/team/karla-banuelos.png",
  },
  {
    name: "Erendira Cabrera",
    title: "Operations Support Specialist",
    image: "/images/team/erendira-cabrera.png",
  },
  {
    name: "Sas Brosas",
    title: "Front Desk Coordinator",
    image: "/images/team/sas-brosas.png",
  },
  {
    name: "Cindy Adlawan",
    title: "Executive Operations Coordinator",
    image: "/images/team/cindy-adlawan.png",
  },
  {
    name: "Kristle Alcuizar",
    title: "Administrative Research Specialist",
    image: "/images/team/kristle-alcuizar.png",
  },
  {
    name: "Ivy Verdad",
    title: "Financial Operations Manager",
    image: "/images/team/ivy-verdad.png",
  },
  {
    // Broker of Record — the same licensed individual on file for both
    // Capital Direct Funding and Direct Servicing Initiative. Listed at
    // the end of the roster as a licensing/compliance role; no public
    // headshot.
    name: "Juan N. Williams",
    title: "Broker of Record",
    image: null,
  },
];

// Testimonials — voiced by the real servicing-side partner ecosystem
// (originators, note investors, family offices, workout attorneys).
// Replace with attributed quotes once Frank confirms sign-off rights.
export const TESTIMONIALS = [
  {
    quote:
      "We were running our servicing on spreadsheets and a trust-ledger workbook. DSI took our investor packet cycle from three days to one click — and our RESPA exposure dropped overnight.",
    author: "Private Money Lender",
    location: "Los Angeles, CA",
    result: "3-day reporting cycle → same-day delivery",
  },
  {
    quote:
      "When a $1.2M first-trust went into default, DSI walked the workout with me. The note got modified, the borrower stayed in the property, and we never had to file a trustee sale.",
    author: "Trust Deed Investor",
    location: "Orange County, CA",
    result: "Workout closed without foreclosure",
  },
  {
    quote:
      "I hold notes across three servicers. DSI is the only one whose monthly statement I can hand my CPA without an apology — and the only one that delivers 1098s before January 31.",
    author: "Family Office Principal",
    location: "Pasadena, CA",
    result: "1098s delivered before 1/31, every year",
  },
  {
    quote:
      "I requested a payoff demand on a Friday at 4pm. DSI had it back to me before close of business Monday — fully reconciled, with the per-diem grid. No other servicer turns demands that fast.",
    author: "Real Estate Attorney",
    location: "Beverly Hills, CA",
    result: "Payoff demands turned in under 48 hours",
  },
];

// Loan-servicing partner ecosystem — these are the four workflows DSI's
// outputs feed into every day. NOT a mortgage-brokerage referral funnel.
// DSI does not originate; DSI services post-close. The professionals here
// are the people whose work depends on clean, fast servicing data.
export const PROFESSIONALS = [
  {
    slug: "originators",
    title: "Originators & Lending Partners",
    summary:
      "Private money lenders, hard money lenders, and mortgage brokers who originate the loan and need a compliant servicer to take it from close to payoff.",
    icon: "Briefcase",
    deliverables: [
      "48-hour loan boarding from complete docs",
      "White-label borrower statements and investor reports",
      "Broker fee and origination point disbursements",
      "RESPA, TILA, and California-specific compliance baked in",
    ],
  },
  {
    slug: "counsel",
    title: "Real Estate & Bankruptcy Counsel",
    summary:
      "Workout attorneys, REO counsel, and bankruptcy practitioners who need fast, attorney-grade documentation from the servicer of record.",
    icon: "Scale",
    deliverables: [
      "Payoff demands turned in 48 hours or less",
      "Proof-of-claim packages with full payment history",
      "Default notice (NOD), notice of sale (NOS), and trustee coordination",
      "REO transition support and post-sale accounting",
    ],
  },
  {
    slug: "cpas",
    title: "CPAs & Fund Administrators",
    summary:
      "Tax advisors, fund admins, and auditors who depend on the servicer for year-end packages, K-1 supporting detail, and audit-ready reporting.",
    icon: "Calculator",
    deliverables: [
      "1098s and 1099-INTs delivered before January 31",
      "K-1 supporting schedules with loan-level detail",
      "GAAP-aligned monthly statements for fund audit prep",
      "Direct read access for auditors during fieldwork",
    ],
  },
  {
    slug: "title-escrow",
    title: "Title, Escrow & Trustee Officers",
    summary:
      "Title officers, escrow officers, and foreclosure trustees who need beneficiary statements, payoff demands, and reconveyance documents to close transactions.",
    icon: "FileText",
    deliverables: [
      "Beneficiary statements within one business day",
      "Per-diem interest grids on every payoff",
      "Reconveyance and lien release coordination",
      "Electronic delivery — no fax, no mailroom delay",
    ],
  },
];

// Professional affiliations / trust badges. Images stored in /public/images/affiliations.
export const AFFILIATIONS = [
  { label: "CCIM", image: "/images/affiliations/ccim.png" },
  { label: "NAHREP", image: "/images/affiliations/nahrep.png" },
  { label: "City Club LA", image: "/images/affiliations/city-club.png" },
];

export const WEB3FORMS_KEY = "09f80e34-62a3-4fc0-9773-ff3f8f0683e2";
