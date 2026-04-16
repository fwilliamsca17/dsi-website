import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Plug,
  Workflow,
  FileCheck,
  MessageSquare,
  CheckCircle2,
  Zap,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQ } from "@/components/sections/FAQ";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import { LENDER_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "For Lenders",
  description:
    "Streamlined onboarding, seamless integration, and institutional-grade servicing for private lenders and originators.",
};

const integrationFeatures = [
  {
    icon: Plug,
    title: "Seamless Onboarding",
    description:
      "We make it easy to transfer your servicing to DSI. Our team handles the migration, data verification, and borrower communication.",
  },
  {
    icon: Workflow,
    title: "Workflow Integration",
    description:
      "Connect your origination platform to DSI for automatic loan boarding. No manual data entry, no delays, no errors.",
  },
  {
    icon: FileCheck,
    title: "Document Management",
    description:
      "Digital document storage, automated retention schedules, and instant retrieval. Every document is indexed and accessible.",
  },
  {
    icon: MessageSquare,
    title: "Borrower Communication",
    description:
      "We handle all borrower-facing communication: welcome letters, payment reminders, SMS alerts, and payoff statements.",
  },
];

const onboardingSteps = [
  {
    number: "1",
    title: "Discovery Call",
    description:
      "We learn about your portfolio, volume, loan types, and specific servicing needs.",
  },
  {
    number: "2",
    title: "Custom Setup",
    description:
      "We configure your servicing parameters: payment schedules, fee structures, reporting preferences, and borrower communication templates.",
  },
  {
    number: "3",
    title: "Data Migration",
    description:
      "Our team handles the complete transfer of loan data, documents, and payment history into our systems.",
  },
  {
    number: "4",
    title: "Go Live",
    description:
      "We activate servicing, send borrower notifications, and begin processing. Your first investor report arrives on schedule.",
  },
];

const lenderBenefits = [
  "Focus on origination while DSI handles servicing",
  "Reduce operational overhead and compliance risk",
  "Provide institutional-grade reporting to your investors",
  "Scale your lending volume without scaling your back office",
  "Maintain brand consistency with white-label options",
  "Access detailed portfolio analytics and performance data",
];

export default function LendersPage() {
  return (
    <>
      <FAQJsonLd faqs={LENDER_FAQS} />
      {/* Hero */}
      <section className="bg-gradient-slate pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            <FadeIn>
              <p className="eyebrow !text-emerald-400 mb-4">For Lenders</p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-white mb-6 text-balance">
                You Originate. We Service.
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                DSI handles the entire post-close lifecycle so you can focus on
                what you do best — originating loans and growing your lending
                business.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Integration"
              title="Designed for Private Lenders"
              description="Whether you originate 5 loans a month or 50, DSI scales with you."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationFeatures.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.1}>
                  <div className="card flex gap-5 h-full">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-slate-700 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-body/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Getting Started"
              title="Onboarding in Days, Not Months"
              description="We've streamlined the onboarding process so you can start servicing quickly."
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
                <p className="eyebrow mb-4">Why Partner with DSI</p>
                <h2 className="font-heading text-display text-slate-700 mb-6">
                  Scale without the overhead
                </h2>
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {[
                      { icon: Zap, label: "48hr Loan Boarding" },
                      { icon: Clock, label: "Same-Day ACH" },
                      { icon: ShieldCheck, label: "Full Compliance" },
                    ].map((item) => (
                      <div key={item.label}>
                        <item.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                        <span className="text-sm font-medium text-slate-700">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={LENDER_FAQS} title="Lender Partnership FAQs" />

      {/* CTA */}
      <section className="bg-gradient-slate py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-white mb-4">
                Ready to outsource your servicing?
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Let&apos;s discuss how DSI can become your dedicated servicing
                partner.
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
