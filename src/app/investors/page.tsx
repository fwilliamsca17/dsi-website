import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Layers,
  FileText,
  Users,
  CheckCircle2,
  PieChart,
  BarChart3,
  Bell,
  Lock,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQ } from "@/components/sections/FAQ";
import { FAQJsonLd, PageSeo } from "@/components/seo/JsonLd";
import { INVESTOR_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Self-directed IRA-compliant servicing, fractionalized note distributions, K-1 supporting schedules, GAAP-aligned statements, and audit support. DSI delivers the reporting institutional investors expect — to private-money investors.",
  alternates: { canonical: "https://trustdsi.com/investors" },
};

// Real investor pain — not "show me a dashboard." The actual workflow
// issues that make existing servicers feel amateur to a family office,
// fund LP, or sophisticated individual note investor.
const investorProblems = [
  {
    icon: Landmark,
    title: "Self-Directed IRA Compliance",
    pain: "Notes held inside a self-directed IRA (Equity Trust, Quest, Madison, etc.) need distributions routed to the custodian — not the beneficial owner. Mistakes trigger UBTI exposure and prohibited transaction risk.",
    solution:
      "DSI knows the major SDIRA custodians. Distributions route per the custodian's coding. 1099s are issued correctly. Annual fair market valuation forms supported on request.",
  },
  {
    icon: Layers,
    title: "Fractionalized Note Distributions",
    pain: "Three investors on one $900K first-trust at 60/30/10 splits. Manual pro-rata math drifts every month, and one bad reconciliation triggers an SEC question.",
    solution:
      "DSI tracks every fractional interest at the loan level. Distributions calculated to the penny, reconciled before payout, audit trail visible per investor.",
  },
  {
    icon: FileText,
    title: "K-1 Supporting Schedules + Audit Support",
    pain: "Fund LPs and family-office investors need K-1 supporting schedules with loan-level interest, fee, and gain detail. Generic servicers send a year-end summary and call it done.",
    solution:
      "DSI delivers K-1 supporting schedules, GAAP-aligned monthly statements, and direct read access for your fund admin or auditor during fieldwork. Built for funds and SMAs from day one.",
  },
  {
    icon: Users,
    title: "Beneficiary, Trust, and Estate Changes",
    pain: "Death, divorce, trust transfer, or LLC restructure on a note holder — most servicers freeze the account for weeks while paperwork is reviewed.",
    solution:
      "DSI has standing workflows for beneficiary change, trust assignment, and probate transfer. Documentation requirements published in advance; processing in days, not weeks.",
  },
];

const dashboardFeatures = [
  {
    icon: PieChart,
    title: "Portfolio Overview",
    description:
      "Total invested, active loans, weighted yield, geographic exposure, and lien-position breakdown — all on one screen.",
  },
  {
    icon: BarChart3,
    title: "Loan-Level Detail",
    description:
      "Drill into any loan: payment history, current balance, LTV, borrower status, property type, and document vault.",
  },
  {
    icon: Bell,
    title: "Event Alerts",
    description:
      "Automated notifications for payments received, late payments, default events, payoffs, and maturity dates — push and email.",
  },
  {
    icon: Lock,
    title: "Custodian-Safe Access",
    description:
      "Bank-level encryption, two-factor authentication, role-based access. SDIRA custodians get the read access they need without exposing your portfolio to them.",
  },
];

const reportTypes = [
  "Monthly Performance Summary",
  "Loan-by-Loan Detail Report",
  "Pro-Rata Distribution Calculation",
  "Delinquency & Default Status",
  "K-1 Supporting Schedules (fund / SMA)",
  "1098 and 1099-INT — delivered before January 31",
  "Portfolio Composition Analysis",
  "Maturity Schedule (next 12 / 24 / 36 months)",
];

export default function InvestorsPage() {
  return (
    <>
      <PageSeo
        title="For Investors | Direct Servicing Initiative"
        description="Self-directed IRA-compliant servicing, fractionalized note distributions, K-1 supporting schedules, GAAP-aligned statements, and audit support for private note investors."
        path="/investors"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "For Investors", href: "/investors" },
        ]}
      />
      <FAQJsonLd faqs={INVESTOR_FAQS} />
      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            {/* CSS entrance, not FadeIn: the h1 is this page's LCP element and
                must never ship as opacity:0 in the SSR HTML. */}
            <div>
              <p className="hero-in eyebrow !text-jade-300 mb-4">For Investors</p>
              <h1 className="hero-in-lcp font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-pearl mb-6 text-balance">
                Institutional-grade reporting.{" "}
                <span className="text-jade-gradient">On private notes.</span>
              </h1>
              <p className="hero-in text-pearl/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Self-directed IRAs, fractionalized notes, fund SMAs, and family
                offices — DSI runs the servicing math, the tax docs, and the
                audit support that sophisticated investors expect from a private
                note position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Problems */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Why Investors Move to DSI"
              title="The Workflow Problems That Make Other Servicers Feel Amateur"
              description="A dashboard is table stakes. These are the structural issues that drive sophisticated investors to switch."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {investorProblems.map((problem, i) => (
                <FadeIn key={problem.title} delay={i * 0.08}>
                  <div className="card flex flex-col gap-5 h-full">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-jade-50 flex items-center justify-center shrink-0">
                        <problem.icon className="w-6 h-6 text-jade-600" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-slate-700 mt-2">
                        {problem.title}
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm leading-relaxed">
                      <p>
                        <span className="font-semibold text-slate-600">
                          The pain:
                        </span>{" "}
                        <span className="text-body/80">{problem.pain}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-jade-700">
                          DSI:
                        </span>{" "}
                        <span className="text-body/80">{problem.solution}</span>
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Investor Portal"
              title="Built for the Way You Actually Work"
              description="Real-time access for you. Read-only role access for your CPA, fund admin, or SDIRA custodian. No portal logins shared across emails."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardFeatures.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.08}>
                  <div className="card h-full">
                    <div className="w-12 h-12 rounded-xl bg-jade-50 flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-jade-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-700 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-body/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <p className="eyebrow mb-4">Reporting Suite</p>
                <h2 className="font-heading text-display text-slate-700 mb-6">
                  Statements your CPA won&apos;t apologize for
                </h2>
                <p className="text-body/80 leading-relaxed mb-8">
                  Whether you hold five notes in a self-directed IRA or run a
                  $50M private debt fund, DSI&apos;s reporting suite delivers
                  what your CPA, your fund admin, and your auditor actually
                  ask for — without the year-end scramble.
                </p>
                <Link href="/contact" className="btn-primary">
                  Request a Sample Package <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-surface-100 rounded-2xl border border-surface-300 p-8">
                  <h3 className="font-heading font-semibold text-sm text-slate-700 mb-5 uppercase tracking-wider">
                    Reports DSI Delivers
                  </h3>
                  <ul className="space-y-3">
                    {reportTypes.map((report) => (
                      <li key={report} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-jade-500 shrink-0" />
                        <span className="text-sm text-body/80">{report}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={INVESTOR_FAQS} title="Investor FAQs" />

      {/* CTA */}
      <section className="hero-atmosphere relative overflow-hidden py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-pearl mb-4">
                See the investor experience firsthand.
              </h2>
              <p className="text-pearl/60 mb-8 max-w-lg mx-auto">
                Request a sample monthly statement and K-1 supporting schedule.
                Five-minute review. Tells you everything you need.
              </p>
              <Link href="/contact" className="btn-jade">
                Request Sample Reports <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
