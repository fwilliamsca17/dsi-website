import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Eye,
  Users,
  Zap,
  HeartHandshake,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Why DSI",
  description:
    "Why choose Direct Servicing Initiative for your private loan servicing needs. Compliance-first, transparent, family-owned, and technology-enabled.",
};

const reasons = [
  {
    icon: Shield,
    title: "Compliance-First Culture",
    description:
      "Every process is built around state and federal compliance. TILA, RESPA, and state-specific regulations are embedded in our workflows — not bolted on as an afterthought.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Real-time dashboards, automated investor statements, and 24/7 portal access. You always know the status of every loan in your portfolio.",
  },
  {
    icon: Users,
    title: "Family-Owned Values",
    description:
      "We are a family-owned company that operates with the integrity and accountability that comes from personal ownership. Your trust is personal to us.",
  },
  {
    icon: Zap,
    title: "Technology-Enabled",
    description:
      "ACH processing, automated SMS alerts, digital document management, and API-ready systems for seamless integration with your origination platform.",
  },
  {
    icon: HeartHandshake,
    title: "Investor-Centric",
    description:
      "We treat every investor relationship as sacred. Custom reporting, dedicated support, and transparent fee structures — because your investors deserve the best.",
  },
  {
    icon: Lock,
    title: "Institutional-Grade Security",
    description:
      "Bank-level encryption, SOC 2-aligned processes, and strict data governance protocols protect your information and your borrowers' data.",
  },
];

const benefits = [
  "Peace of mind knowing every loan is serviced compliantly",
  "Transparency that builds trust with your investors",
  "Efficiency that reduces your operational overhead",
  "Technology that scales with your portfolio",
  "A team that treats your business like family",
  "Reporting that satisfies institutional requirements",
];

export default function WhyDSIPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-slate pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            <FadeIn>
              <p className="eyebrow !text-emerald-400 mb-4">Why DSI</p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-white mb-6 text-balance">
                Built for Trust. Designed for Scale.
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                We combine the accountability of family ownership with the
                sophistication of institutional servicing — delivering peace of
                mind, transparency, and efficiency.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Our Difference"
              title="What Sets DSI Apart"
              centered
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, i) => (
                <FadeIn key={reason.title} delay={i * 0.08}>
                  <div className="card h-full">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                      <reason.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-700 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-body/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <p className="eyebrow mb-4">The DSI Promise</p>
                <h2 className="font-heading text-display text-slate-700 mb-6">
                  Simple and Direct — that&apos;s our promise
                </h2>
                <p className="text-body/80 leading-relaxed mb-8">
                  When you partner with DSI, you get a servicing team that
                  operates like an extension of your own business. We handle the
                  complexity so you can focus on growing.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl border border-surface-300 p-8">
                  <h3 className="font-heading font-semibold text-sm text-slate-700 mb-5 uppercase tracking-wider">
                    What You Get
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-body/80">{benefit}</span>
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
      <section className="bg-gradient-slate py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-white mb-4">
                Experience the DSI difference
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Let us show you how simple and direct loan servicing can be.
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
