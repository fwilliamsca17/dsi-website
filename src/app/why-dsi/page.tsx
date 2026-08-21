import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  UserCheck,
  Clock,
  Calendar,
  FileBarChart,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageSeo } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Why DSI",
  description:
    "Six operational commitments that distinguish DSI from generic loan servicers: named account managers, 48-hour demand turnaround, January 31 tax docs, GAAP-aligned statements, California-native compliance, and segregated trust accounting.",
  alternates: { canonical: "https://trustdsi.com/why-dsi" },
};

const reasons = [
  {
    icon: UserCheck,
    title: "A Named Account Manager, Not a Ticket Queue",
    pain: "Most servicers route requests through a help desk. Your deal closes Friday; the demand statement arrives the following Wednesday.",
    proof:
      "Every DSI client is assigned a named account manager with a direct cell. Frank Williams sits on the escalation path of every account. We pick up the phone.",
  },
  {
    icon: Clock,
    title: "48-Hour Demand Turnaround",
    pain: "A late payoff demand blows escrow. A delayed beneficiary statement loses the refi. Industry-standard turnaround is 5–7 business days.",
    proof:
      "DSI targets sub-48-hour turnaround on payoff demands, beneficiary statements, and demand letters. Per-diem interest grids included. Friday 4pm requests are typically out by Monday COB.",
  },
  {
    icon: Calendar,
    title: "Tax Documents Before January 31 — Every Year",
    pain: "Mid-February 1098s force investors and borrowers into extensions. Missing 1099-INTs trigger IRS correspondence audits.",
    proof:
      "DSI locks the tax package on December 28 and delivers 1098s and 1099-INTs before January 31. No exceptions, no scrambling — operational rhythm, not a promise.",
  },
  {
    icon: FileBarChart,
    title: "GAAP-Aligned Monthly Statements",
    pain: "Family offices and fund investors need statements an auditor will accept. Generic servicers deliver Excel exports that fail audit fieldwork.",
    proof:
      "DSI's monthly statements are GAAP-aligned with full audit trail. Auditors and fund admins get direct read access during fieldwork. K-1 supporting schedules delivered on demand.",
  },
  {
    icon: MapPin,
    title: "California-Native Compliance, Not a Customization",
    pain: "National servicers learn California Civil Code §2924, the Homeowner Bill of Rights, and SB91 expensively — usually on your file.",
    proof:
      "DSI operates under a California-licensed brokerage with Juan N. Williams (DRE# 01115216) as Broker of Record — a 20-year California licensee. RESPA, TILA, and California-specific compliance are the baseline of every workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Segregated Trust Accounting",
    pain: "Some servicers commingle escrow, impound, and investor funds in a single operating account. That's a CA Finance Lenders Law issue waiting to happen.",
    proof:
      "DSI holds escrow, impound, and investor funds in segregated trust accounts. Audit-trail receipts on every distribution. Reconciled monthly. Never touched by operating capital.",
  },
];

const promiseList = [
  "Every inbound request gets a same-day acknowledgment",
  "Demands and payoff statements turned in 48 hours or less",
  "1098s and 1099-INTs locked December 28, delivered by January 31",
  "Monthly statements GAAP-aligned for audit acceptance",
  "California-licensed brokerage on file — Broker of Record DRE# 01115216 (Juan N. Williams)",
  "Trust accounts segregated and reconciled monthly",
];

export default function WhyDSIPage() {
  return (
    <>
      <PageSeo
        title="Why DSI | Direct Servicing Initiative"
        description="Six operational standards DSI publishes and is held to: named account managers, 48-hour demand turnaround, January 31 tax docs, GAAP-aligned statements, California-native compliance, segregated trust accounting."
        path="/why-dsi"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Why DSI", href: "/why-dsi" },
        ]}
      />
      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            {/* CSS entrance, not FadeIn: the h1 is this page's LCP element and
                must never ship as opacity:0 in the SSR HTML. */}
            <div>
              <p className="hero-in eyebrow !text-jade-300 mb-4">Why DSI</p>
              <h1 className="hero-in-lcp font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-pearl mb-6 text-balance">
                The Standards.{" "}
                <span className="text-jade-gradient">The Proof.</span>
              </h1>
              <p className="hero-in text-pearl/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Most servicers sell on adjectives — compliant, transparent,
                trusted. DSI commits to operational standards a client can hold
                us to. Six of them, with the evidence behind each.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Operational Standards"
              title="Pain. Proof. Pattern."
              description="Each standard is paired with the pain it eliminates and the operational pattern behind it."
              centered
            />

            <div className="mt-14 space-y-10">
              {reasons.map((reason, i) => (
                <FadeIn key={reason.title} delay={i * 0.05}>
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 p-8 lg:p-10 bg-surface-100 rounded-2xl border border-surface-300">
                    <div className="w-14 h-14 rounded-2xl bg-jade-100 flex items-center justify-center shrink-0">
                      <reason.icon className="w-7 h-7 text-jade-700" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-700 mb-4">
                        {reason.title}
                      </h3>
                      <div className="space-y-3">
                        <p className="text-sm">
                          <span className="font-semibold text-slate-600">
                            The pain:
                          </span>{" "}
                          <span className="text-body/80 leading-relaxed">
                            {reason.pain}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold text-jade-700">
                            DSI&apos;s standard:
                          </span>{" "}
                          <span className="text-body/80 leading-relaxed">
                            {reason.proof}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The DSI Promise */}
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <p className="eyebrow mb-4">The DSI Promise</p>
                <h2 className="font-heading text-display text-slate-700 mb-6">
                  Six commitments. Documented and reviewed quarterly.
                </h2>
                <p className="text-body/80 leading-relaxed mb-8">
                  Each operational standard is reviewed quarterly with our
                  account managers, our trust accountants, and Frank. When we
                  miss, we tell you. When the pattern slips, we fix the
                  process — not the report.
                </p>
                <Link href="/contact" className="btn-primary">
                  Hold Us To It <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl border border-surface-300 p-8">
                  <h3 className="font-heading font-semibold text-sm text-slate-700 mb-5 uppercase tracking-wider">
                    Standards We Publish
                  </h3>
                  <ul className="space-y-3">
                    {promiseList.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-jade-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-body/80">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-atmosphere relative overflow-hidden py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-pearl mb-4">
                Hold a servicer to a standard they actually publish.
              </h2>
              <p className="text-pearl/60 mb-8 max-w-lg mx-auto">
                Talk to DSI about what your portfolio needs — and what we&apos;ll
                commit to in writing.
              </p>
              <Link href="/contact" className="btn-jade">
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
