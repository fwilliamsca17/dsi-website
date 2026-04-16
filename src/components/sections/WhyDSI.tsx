import {
  Shield,
  Eye,
  Users,
  Zap,
  HeartHandshake,
  Lock,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const reasons = [
  {
    icon: Shield,
    title: "Compliance-First Culture",
    description:
      "Every process is built around state and federal compliance. TILA, RESPA, and state-specific regulations are embedded in our workflows.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Real-time dashboards, automated investor statements, and 24/7 portal access. You always know the status of every loan.",
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
      "ACH processing, automated SMS alerts, digital document management, and API-ready systems for seamless integration.",
  },
  {
    icon: HeartHandshake,
    title: "Investor-Centric",
    description:
      "We treat every investor relationship as sacred. Custom reporting, dedicated support, and transparent fee structures.",
  },
  {
    icon: Lock,
    title: "Institutional-Grade Security",
    description:
      "Bank-level encryption, SOC 2-aligned processes, and strict data governance protocols protect your information.",
  },
];

export function WhyDSI() {
  return (
    <section className="bg-white py-20 lg:py-section-lg">
      <div className="section-padding">
        <div className="max-container">
          <SectionHeading
            eyebrow="Why DSI"
            title="Built for Trust, Designed for Scale"
            description="We combine the accountability of family ownership with the sophistication of institutional servicing."
            centered
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <FadeIn key={reason.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-100 flex items-center justify-center shrink-0">
                    <reason.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-700 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-body/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
