import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  PieChart,
  Bell,
  FileText,
  DollarSign,
  Lock,
  Clock,
  BarChart3,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQ } from "@/components/sections/FAQ";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import { INVESTOR_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Real-time investor dashboards, monthly statements, portfolio analytics, and transparent reporting. DSI gives you complete visibility into your investments.",
};

const dashboardFeatures = [
  {
    icon: PieChart,
    title: "Portfolio Overview",
    description:
      "See your entire portfolio at a glance — total invested, active loans, weighted average yield, and performance metrics.",
  },
  {
    icon: BarChart3,
    title: "Loan-Level Detail",
    description:
      "Drill into any individual loan: payment history, current balance, borrower status, property details, and LTV ratios.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description:
      "Automated notifications for payments received, late payments, default events, payoffs, and maturity dates.",
  },
  {
    icon: FileText,
    title: "Monthly Statements",
    description:
      "Detailed monthly statements with income breakdowns, distribution calculations, and portfolio performance summaries.",
  },
  {
    icon: DollarSign,
    title: "Distribution Tracking",
    description:
      "Track every distribution: when it was calculated, when it was paid, and complete audit trails for reconciliation.",
  },
  {
    icon: Lock,
    title: "Secure Access",
    description:
      "Bank-level encryption, two-factor authentication, and role-based access controls protect your data 24/7.",
  },
];

const reportTypes = [
  "Monthly Performance Summary",
  "Loan-by-Loan Detail Report",
  "Delinquency & Default Report",
  "Distribution Calculation Report",
  "Year-End Tax Package (1099s)",
  "Portfolio Composition Analysis",
  "Maturity Schedule Report",
  "Payoff & Prepayment Summary",
];

export default function InvestorsPage() {
  return (
    <>
      <FAQJsonLd faqs={INVESTOR_FAQS} />
      {/* Hero */}
      <section className="bg-gradient-slate pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            <FadeIn>
              <p className="eyebrow !text-emerald-400 mb-4">For Investors</p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-white mb-6 text-balance">
                Complete Visibility. Total Confidence.
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                DSI provides institutional-grade investor reporting and 24/7
                dashboard access, so you always know exactly how your investments
                are performing.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Investor Dashboard"
              title="Everything You Need, One Login Away"
              description="Our investor portal gives you real-time access to every aspect of your portfolio."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardFeatures.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.08}>
                  <div className="card h-full">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-700 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-body/70 leading-relaxed">
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
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <p className="eyebrow mb-4">Reporting Suite</p>
                <h2 className="font-heading text-display text-slate-700 mb-6">
                  Reports that give you confidence
                </h2>
                <p className="text-body/80 leading-relaxed mb-8">
                  Whether you&apos;re an individual investor with 5 loans or an
                  institution with 500, DSI delivers the reporting clarity you
                  need to make informed decisions and satisfy your own reporting
                  requirements.
                </p>
                <Link href="/contact" className="btn-primary">
                  Request Sample Reports <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl border border-surface-300 p-8">
                  <h3 className="font-heading font-semibold text-sm text-slate-700 mb-5 uppercase tracking-wider">
                    Available Reports
                  </h3>
                  <ul className="space-y-3">
                    {reportTypes.map((report) => (
                      <li key={report} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
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

      {/* Trust section */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="font-heading text-heading-xl text-slate-700 mb-4">
                Your Trust is Our Foundation
              </h2>
              <p className="text-body/70 leading-relaxed max-w-2xl mx-auto mb-8">
                As a family-owned company, we understand that every dollar you
                invest carries trust. DSI is built on the principle that
                transparency eliminates uncertainty, and precision builds
                confidence.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                  { icon: Clock, label: "24/7 Portal Access" },
                  { icon: Shield, label: "Bank-Level Security" },
                  { icon: FileText, label: "Automated Statements" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <item.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <span className="text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FAQ faqs={INVESTOR_FAQS} title="Investor FAQs" />

      {/* CTA */}
      <section className="bg-gradient-slate py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-white mb-4">
                See the investor experience firsthand
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Request a demo of our investor dashboard and reporting suite.
              </p>
              <Link href="/contact" className="btn-primary">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
