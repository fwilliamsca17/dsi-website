import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Shuffle,
  ScrollText,
  Scale,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQ } from "@/components/sections/FAQ";
import { FAQJsonLd, PageSeo } from "@/components/seo/JsonLd";
import { LENDER_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "For Lenders",
  description:
    "Trust-accounted, white-labeled, RESPA/TILA-compliant loan servicing for California private money lenders, hard money funds, and mortgage brokers. 48-hour boarding, broker fee disbursements, and named account managers.",
  alternates: { canonical: "https://trustdsi.com/lenders" },
};

// Pain-driven lender problems DSI solves, not generic "outsourcing" benefits.
const lenderProblems = [
  {
    icon: Banknote,
    title: "Trust Accounting Without Liability",
    pain: "Commingling investor funds with your operating account is a CA Finance Lenders Law issue and a fund auditor red flag.",
    solution:
      "DSI holds all escrow, impound, and investor distributions in segregated trust accounts. Reconciled monthly. Reports delivered straight to your auditor.",
  },
  {
    icon: Shuffle,
    title: "Broker Fee Disbursements at Payoff",
    pain: "When a payoff includes broker points, mortgage broker fees, or referral splits, manual disbursement creates 1099 exposure and ledger errors.",
    solution:
      "DSI's payoff workflow calculates and disburses broker fees, points, and referral splits automatically — with a clean audit trail and 1099-NEC reporting at year-end.",
  },
  {
    icon: ScrollText,
    title: "White-Label Without Losing the Borrower",
    pain: "You closed the loan. Your borrower thinks they're paying your company. A generic servicer's letterhead breaks the relationship.",
    solution:
      "DSI provides white-label borrower statements, payment portals, and demand letters branded to your firm — your borrower never sees DSI; you keep the brand.",
  },
  {
    icon: Scale,
    title: "RESPA + TILA on Owner-Occupied",
    pain: "Owner-occupied consumer loans trigger TILA, RESPA, ATR, and state-specific consumer protections most private-money servicers handle wrong.",
    solution:
      "DSI runs a separate workflow for consumer loans: TRID disclosures, RESPA Section 6 acknowledgment, periodic statement requirements, and Homeowner Bill of Rights compliance — handled, not flagged.",
  },
];

const onboardingSteps = [
  {
    number: "1",
    title: "Discovery Call",
    description:
      "We map your portfolio: loan types, volume, investor structure, owner-occupied vs. business-purpose mix, and any active workouts. Frank takes this call personally.",
  },
  {
    number: "2",
    title: "Servicing Setup",
    description:
      "Trust accounts opened in your name. Payment schedules, broker disbursement rules, fee structures, and white-label templates configured. Compliance review of every loan file.",
  },
  {
    number: "3",
    title: "Boarding & Migration",
    description:
      "Loans boarded in 48 hours from complete docs. Existing loans: full data migration with borrower notification packets per RESPA Section 6 servicing transfer rules.",
  },
  {
    number: "4",
    title: "Go Live",
    description:
      "First ACH cycle runs on schedule. First investor reports delivered the following month. Your account manager calendar shows weekly check-ins for the first 90 days.",
  },
];

const lenderBenefits = [
  "Originate more — your back office grows without hiring",
  "Investor reporting your CPA and fund auditor will accept",
  "Trust accounting that keeps you on the right side of CFL and RESPA",
  "Workout team for distressed loans — modification through trustee sale",
  "Same-day demand turnaround for refis and dispositions",
  "Named account manager + direct line to Frank Williams",
];

export default function LendersPage() {
  return (
    <>
      <PageSeo
        title="For Lenders | Direct Servicing Initiative"
        description="Trust-accounted, white-labeled, RESPA/TILA-compliant loan servicing for California private money lenders, hard money funds, and mortgage brokers."
        path="/lenders"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "For Lenders", href: "/lenders" },
        ]}
      />
      <FAQJsonLd faqs={LENDER_FAQS} />
      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            {/* CSS entrance, not FadeIn: the h1 is this page's LCP element and
                must never ship as opacity:0 in the SSR HTML. */}
            <div>
              <p className="hero-in eyebrow !text-jade-300 mb-4">For Lenders</p>
              <h1 className="hero-in-lcp font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-pearl mb-6 text-balance">
                You originate.{" "}
                <span className="text-jade-gradient">We service of record.</span>
              </h1>
              <p className="hero-in text-pearl/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Private money lenders, hard money funds, and broker-dealer
                originators hand DSI the post-close lifecycle — trust accounting,
                investor distributions, RESPA/TILA-grade compliance, demand
                turnaround, and workouts when loans go sideways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems DSI Solves */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="What Lenders Actually Hire Us For"
              title="Four Problems, Four Patterns"
              description="The structural problems that turn a small private-lending operation into a compliance and ledger nightmare — and DSI's operational answer to each."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {lenderProblems.map((problem, i) => (
                <FadeIn key={problem.title} delay={i * 0.08}>
                  <div className="card flex flex-col gap-5 h-full">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                        <problem.icon className="w-6 h-6 text-emerald-600" />
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
                        <span className="text-body/70">{problem.pain}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-emerald-700">
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

      {/* Onboarding */}
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Getting Started"
              title="From Discovery Call to Live ACH in Under Two Weeks"
              description="A four-step path that respects your timeline and meets RESPA Section 6 servicing transfer requirements end-to-end."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {onboardingSteps.map((step, i) => (
                <FadeIn key={step.number} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <span className="font-heading font-bold text-emerald-700">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-slate-700 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-body/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <p className="eyebrow mb-4">What You Get</p>
                <h2 className="font-heading text-display text-slate-700 mb-6">
                  An operations partner, not an outsourcer
                </h2>
                <p className="text-body/80 leading-relaxed mb-8">
                  DSI is sized for private lenders — not a 50,000-loan
                  call-center book. That means your portfolio gets named
                  attention, your borrowers stay with you, and your investors
                  see institutional-grade reporting.
                </p>
                <ul className="space-y-4">
                  {lenderBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-body/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-surface-100 rounded-2xl p-10">
                  <h3 className="font-heading font-semibold text-sm text-slate-700 mb-6 uppercase tracking-wider text-center">
                    Standards We Publish to Lenders
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-6">
                    {[
                      { icon: Zap, label: "48hr Boarding" },
                      { icon: ShieldCheck, label: "RESPA / TILA / §2924" },
                      { icon: Briefcase, label: "White-Label Ready" },
                    ].map((item) => (
                      <div key={item.label}>
                        <item.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                        <span className="text-sm font-medium text-slate-700">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-body/60 text-center leading-relaxed border-t border-surface-300 pt-5">
                    DSI is operated as a{" "}
                    <span className="font-semibold text-slate-700">
                      California-licensed brokerage
                    </span>{" "}
                    in West Covina with Juan N. Williams (DRE# 01115216) as
                    Broker of Record — not a third-party tech vendor.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={LENDER_FAQS} title="Lender Partnership FAQs" />

      {/* CTA */}
      <section className="hero-atmosphere relative overflow-hidden py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-pearl mb-4">
                Ready to hand off the back office?
              </h2>
              <p className="text-pearl/60 mb-8 max-w-lg mx-auto">
                The first call is with Frank. We&apos;ll map your portfolio,
                identify the compliance gaps, and quote a servicing program in
                writing.
              </p>
              <Link href="/contact" className="btn-primary">
                Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
