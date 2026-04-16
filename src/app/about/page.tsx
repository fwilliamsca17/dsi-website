import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Heart,
  Shield,
  Lightbulb,
  Building2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Direct Servicing Initiative — a family-owned loan servicing company delivering compliant, transparent solutions for the private lending industry.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with unwavering honesty and ethical standards. Every dollar is tracked, every report is accurate, and every commitment is honored.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Loan servicing demands accuracy down to the penny and the day. Our systems and processes are engineered for zero-error performance.",
  },
  {
    icon: Heart,
    title: "Trust",
    description:
      "Built as a family company, we understand that trust is earned through consistent action. We treat your portfolio like our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We combine institutional-grade technology with a human touch. Automated where it matters, personal where it counts.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Founded",
    description:
      "DSI was established to bring institutional-quality servicing to the private lending industry.",
  },
  {
    year: "2024",
    title: "Technology Platform",
    description:
      "Launched investor dashboards, ACH processing, and automated SMS payment alerts.",
  },
  {
    year: "2025",
    title: "Scaling Operations",
    description:
      "Expanded servicing capacity to handle institutional-volume portfolios with institutional-grade compliance.",
  },
  {
    year: "2026",
    title: "Industry Recognition",
    description:
      "Continuing to grow as the trusted servicing partner for private lenders across Southern California.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-slate pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            <FadeIn>
              <p className="eyebrow !text-emerald-400 mb-4">About DSI</p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-white mb-6 text-balance">
                Family Values. Institutional Standards.
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Direct Servicing Initiative was born from a simple belief: private
                lending investors deserve the same transparency, compliance, and
                care that institutional investors receive.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <div className="bg-surface-100 rounded-2xl p-12 flex items-center justify-center aspect-[4/3]">
                  <div className="text-center">
                    <Building2 className="w-16 h-16 text-emerald-600/30 mx-auto mb-4" />
                    <p className="text-sm text-body/40">
                      Beverly Hills, California
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="eyebrow mb-4">Our Story</p>
                <h2 className="font-heading text-display text-slate-700 mb-6">
                  Born from real need
                </h2>
                <div className="space-y-4 text-body/80 leading-relaxed">
                  <p>
                    DSI emerged from a gap we saw firsthand: private lenders
                    needed a servicing partner that matched their standards —
                    compliant, transparent, and genuinely investor-focused.
                  </p>
                  <p>
                    Rather than outsource to impersonal, third-party servicers who
                    treat private loans as an afterthought, we built DSI to be a
                    dedicated servicing partner for the private lending industry.
                  </p>
                  <p>
                    Today, DSI manages every stage of the loan lifecycle — from
                    initial boarding to final payoff — with the precision of an
                    institution and the accountability of a family business.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Our Values"
              title="What Guides Everything We Do"
              centered
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <FadeIn key={value.title} delay={i * 0.1}>
                  <div className="card flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-slate-700 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-body/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container max-w-3xl">
            <SectionHeading
              eyebrow="Our Journey"
              title="Building the Future of Private Loan Servicing"
              centered
            />
            <div className="mt-14 space-y-8">
              {milestones.map((milestone, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="w-16 shrink-0 text-right">
                      <span className="font-heading font-bold text-emerald-600">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="relative pb-8 border-l-2 border-surface-300 pl-6">
                      <div className="absolute left-0 top-1.5 -translate-x-[5px] w-2 h-2 rounded-full bg-emerald-500" />
                      <h3 className="font-heading font-semibold text-slate-700 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-body/70 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-slate py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-white mb-4">
                Ready to partner with DSI?
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Learn how our servicing solutions can give your investors peace of
                mind.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
