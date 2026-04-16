export const COMPANY = {
  name: "Direct Servicing Initiative",
  shortName: "DSI",
  tagline: "You fund them. We collect. Simple and Direct.",
  description:
    "End-to-end loan servicing built for the private lending industry. Peace of mind, transparency, and efficiency.",
  domain: "trustdsi.com",
  url: "https://trustdsi.com",
  phone: "(626) 796-1680",
  email: "info@trustdsi.com",
  address: "2648 E. Workman Ave., Suite 3001-288, West Covina, CA 91791",
  principal: "Frank Williams",
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
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "loan-servicing",
    title: "Loan Servicing",
    shortDescription:
      "Complete loan administration from boarding to payoff. Payment processing, escrow management, borrower communication, and real-time investor reporting.",
    icon: "FileCheck",
    features: [
      "Loan boarding & setup",
      "ACH payment processing",
      "Escrow account management",
      "Automated borrower alerts (SMS & email)",
      "Real-time payment tracking",
      "Payoff & demand statement preparation",
      "Investor distribution calculations",
      "Monthly & annual investor reporting",
    ],
  },
  {
    slug: "processing",
    title: "Processing & Documentation Services",
    shortDescription:
      "Comprehensive document management, compliance verification, and processing support for private lenders and originators.",
    icon: "ClipboardCheck",
    features: [
      "Document collection & verification",
      "Loan file auditing",
      "Compliance review & quality control",
      "Recording & title coordination",
      "Insurance tracking & verification",
      "Tax & lien monitoring",
      "Digital document storage & retrieval",
      "State-specific regulatory filings",
    ],
  },
  {
    slug: "distressed",
    title: "Non-Performing & Distressed Loan Services",
    shortDescription:
      "Strategic workout solutions and foreclosure coordination for non-performing loans. From modification to REO disposition.",
    icon: "TrendingUp",
    features: [
      "Default & delinquency management",
      "Loss mitigation & workout strategies",
      "Loan modification structuring",
      "Foreclosure coordination & timeline management",
      "Attorney & trustee coordination",
      "Short sale facilitation",
      "Deed-in-lieu processing",
      "REO transition & disposition support",
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

export const STATS = [
  { value: "$150M+", label: "Loans Serviced" },
  { value: "500+", label: "Active Loans" },
  { value: "99.8%", label: "Payment Accuracy" },
  { value: "24/7", label: "Portal Access" },
];

export const TEAM = [
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
];

export const WEB3FORMS_KEY = "09f80e34-62a3-4fc0-9773-ff3f8f0683e2";
