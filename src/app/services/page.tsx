import type { Metadata } from "next";
import Link from "next/link";
import {
  FileCheck,
  ClipboardCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SERVICES_FAQS } from "@/lib/faqs";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Loan servicing, processing & documentation, and non-performing & distressed loan services for the private lending industry.",
};

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  ClipboardCheck,
  TrendingUp,
};

export default function ServicesPage() {
  return (
    <>
      <ServiceJsonLd />
      <FAQJsonLd faqs={SERVICES_FAQS} />
      {/* Hero */}
      <section className="bg-gradient-slate pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            <FadeIn>
              <p className="eyebrow !text-emerald-400 mb-4">Our Services</p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-white mb-6 text-balance">
                End-to-End Loan Servicing Solutions
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                From the moment a loan closes to its final payoff, DSI manages
                every step of the servicing lifecycle with compliance, precision,
                and complete transparency.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="space-y-24">
              {SERVICES.map((service, i) => {
                const Icon = iconMap[service.icon] || FileCheck;
                const isEven = i % 2 === 0;

                return (
                  <div
                    key={service.slug}
                    id={service.slug}
                    className="scroll-mt-32"
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                        !isEven ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      <FadeIn>
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h2 className="font-heading text-heading-xl text-slate-700 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-body/80 leading-relaxed mb-8">
                          {service.shortDescription}
                        </p>
                        <Link href="/contact" className="btn-primary">
                          Discuss This Service{" "}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </FadeIn>

                      <FadeIn delay={0.15}>
                        <div className="bg-surface-100 rounded-2xl p-8 lg:p-10">
                          <h3 className="font-heading font-semibold text-sm text-slate-700 mb-5 uppercase tracking-wider">
                            Capabilities
                          </h3>
                          <ul className="space-y-3">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-sm text-body/80">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={SERVICES_FAQS} title="Servicing FAQs" />

      {/* CTA */}
      <section className="bg-gradient-slate py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-white mb-4">
                Need a custom servicing solution?
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Every portfolio is unique. Let&apos;s design a servicing program
                tailored to your specific requirements.
              </p>
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
