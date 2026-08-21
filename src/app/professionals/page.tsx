import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Scale,
  Calculator,
  FileText,
  CheckCircle,
} from "lucide-react";
import { PROFESSIONALS, COMPANY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { BreadcrumbJsonLd, PageSeo } from "@/components/seo/JsonLd";

export const metadata = pageMetadata({
  title: "For Professionals — Servicing Partners DSI Works With Daily",
  description:
    "Loan originators, real estate and bankruptcy counsel, CPAs, fund administrators, title officers, and trustees: DSI is the servicer of record behind your transactions. Fast demands, attorney-grade docs, 1098s by 1/31.",
  path: "/professionals",
});

const ICONS = { Briefcase, Scale, Calculator, FileText } as const;

// DSI is a SERVICER, not an originator. These benefits describe what the
// servicer of record delivers to ecosystem partners — they are NOT a
// brokerage referral pitch.
const PARTNER_STANDARDS = [
  "Same-day acknowledgment on every demand, payoff, and beneficiary request",
  "Attorney-grade default workflow: NOD, NOS, and trustee sale coordination",
  "1098 and 1099-INT delivered before January 31 — every year, no exceptions",
  "GAAP-aligned monthly statements built for fund audit prep",
  "Direct line to a named DSI account manager — never a ticket queue",
  "RESPA, TILA, and California-specific compliance baked into every workflow",
];

export default function ProfessionalsPage() {
  return (
    <>
      <PageSeo
        title="For Professionals | Direct Servicing Initiative"
        description="DSI is the servicer of record behind originators, real estate and bankruptcy counsel, CPAs and fund administrators, and title, escrow and trustee officers."
        path="/professionals"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "For Professionals", href: "/professionals" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "For Professionals", href: "/professionals" },
        ]}
      />

      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-jade-500/10 rounded-full blur-[120px]" />

        <div className="relative section-padding">
          <div className="max-container">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-pearl/50">
              <Link href="/" className="hover:text-jade-300 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-pearl/30">/</span>
              <span className="text-white/80">For Professionals</span>
            </nav>

            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-jade-300 mb-6">
              <span className="h-px w-8 bg-jade-400/70" />
              Servicer of Record · The Partner Ecosystem
            </p>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-pearl mb-6 max-w-3xl">
              When your work depends on the servicer,{" "}
              <span className="text-jade-gradient">depend on DSI.</span>
            </h1>
            <p className="text-pearl/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Originators, workout counsel, CPAs, fund admins, title officers,
              and trustees rely on the servicer of record for the documents
              that close their transactions and the reports that pass their
              audits. We treat every request like the deadline it is.
            </p>
          </div>
        </div>
      </section>

      {/* Partner segments */}
      <section className="bg-white py-20 lg:py-section">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="The Servicing Ecosystem"
              title="Four Partners. One Servicer of Record."
              description="DSI is purpose-built around the four workflows that touch a private-money loan from boarding through payoff. Each partner type has its own bar — we built our process around theirs."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROFESSIONALS.map((prof, i) => {
                const Icon = ICONS[prof.icon as keyof typeof ICONS];
                return (
                  <FadeIn key={prof.slug} delay={i * 0.08}>
                    <div
                      id={prof.slug}
                      className="group bg-surface-100 hover:bg-white border border-surface-300 hover:border-jade-400/60 hover:shadow-lg hover:shadow-jade-500/5 rounded-2xl p-8 transition-all h-full flex flex-col"
                    >
                      <div className="w-12 h-12 rounded-xl bg-jade-500/10 group-hover:bg-jade-500/20 flex items-center justify-center mb-5 transition-colors">
                        {Icon && <Icon className="w-6 h-6 text-jade-600" />}
                      </div>
                      <h3 className="font-heading font-bold text-slate-700 text-xl mb-3">
                        {prof.title}
                      </h3>
                      <p className="text-body/80 leading-relaxed mb-5">
                        {prof.summary}
                      </p>
                      <ul className="space-y-2 mt-auto">
                        {prof.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-body/80"
                          >
                            <CheckCircle className="w-4 h-4 text-jade-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partner standards */}
      <section className="bg-surface-100 py-20 lg:py-section">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="eyebrow mb-4">Service Standards</p>
                <h2 className="font-heading font-bold text-display-lg text-slate-700 mb-6">
                  The bar we hold ourselves to
                </h2>
                <p className="text-body/80 text-lg leading-relaxed mb-8">
                  Servicing is a deadline business. A late payoff demand
                  blows escrow. A missing 1098 blows tax season. A sloppy
                  proof of claim loses standing in bankruptcy court. We
                  built the workflow around the deadline — not the other
                  way around.
                </p>
                <Link href="/contact" className="btn-primary group inline-flex">
                  Get a Servicing Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="bg-white border border-surface-300 rounded-2xl p-8 lg:p-10">
                <ul className="space-y-4">
                  {PARTNER_STANDARDS.map((standard) => (
                    <li key={standard} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-jade-500 shrink-0 mt-0.5" />
                      <span className="text-body leading-relaxed">{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="hero-atmosphere relative overflow-hidden py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-display text-pearl mb-4">
              Need a payoff demand, beneficiary statement, or workout coordination?
            </h2>
            <p className="text-pearl/60 text-lg mb-8 max-w-2xl mx-auto">
              Call {COMPANY.phone} or send a request. Every inquiry from
              counsel, title, escrow, CPAs, and fund admins gets a same-day
              acknowledgment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${COMPANY.phone}`} className="btn-jade inline-flex">
                Call {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-pearl font-semibold text-base px-7 py-3.5 rounded-lg border border-pearl/20 hover:border-jade-400/60 hover:bg-white/5 transition-colors"
              >
                Send a Request
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
