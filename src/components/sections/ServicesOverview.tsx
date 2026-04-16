import Link from "next/link";
import {
  FileCheck,
  ClipboardCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  ClipboardCheck,
  TrendingUp,
};

export function ServicesOverview() {
  return (
    <section className="bg-surface-100 py-20 lg:py-section-lg">
      <div className="section-padding">
        <div className="max-container">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-Spectrum Loan Servicing"
            description="From the moment a loan closes to its final payoff, DSI manages every step with precision, compliance, and transparency."
            centered
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || FileCheck;
              return (
                <FadeIn key={service.slug} delay={i * 0.08}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="card group block h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-body/70 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="btn-ghost text-xs">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
