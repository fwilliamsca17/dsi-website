import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";
import { GLOSSARY, GLOSSARY_CATEGORIES } from "@/lib/glossary";
import { FadeIn } from "@/components/ui/FadeIn";
import { BreadcrumbJsonLd, DefinedTermSetJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Glossary of Loan Servicing Terms",
  description:
    "Definitions of 35+ private money loan servicing terms — RESPA, TILA, §2924, HBOR, NOD, NOS, SDIRA, GAAP, 1098, 1099-INT, K-1, beneficiary statement, demand statement, and more. Sourced from DSI's daily working vocabulary.",
  alternates: { canonical: "https://trustdsi.com/glossary" },
  keywords: [
    "loan servicing glossary",
    "private money loan terms",
    "RESPA definition",
    "TILA definition",
    "Civil Code 2924",
    "Homeowner Bill of Rights",
    "Notice of Default",
    "Notice of Trustee Sale",
    "SDIRA notes",
    "1099-INT private money",
    "K-1 supporting schedule",
    "beneficiary statement",
    "demand statement",
    "trust accounting",
    "GAAP loan servicing",
  ],
  other: {
    // Helps AI engines recognize this is a definitional reference document.
    "article:section": "Glossary",
    "article:tag": "loan servicing, private money, compliance",
  },
};

export default function GlossaryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Glossary", href: "/glossary" },
        ]}
      />
      <DefinedTermSetJsonLd
        name="Loan Servicing Glossary"
        url="https://trustdsi.com/glossary"
        terms={GLOSSARY.map((t) => ({
          name: t.term,
          alternateName: t.abbr,
          description: t.definition,
          url: `https://trustdsi.com/glossary#${t.slug}`,
        }))}
      />

      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="hero-glow pointer-events-none absolute -right-[8%] -top-[12%] h-[55vw] w-[55vw] motion-safe:animate-glow-drift" />
        <div className="relative section-padding">
          <div className="max-container max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-pearl/50">
              <Link href="/" className="hover:text-jade-300 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-pearl/30">/</span>
              <span className="text-pearl/80">Glossary</span>
            </nav>

            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-jade-300 mb-6">
              <span className="h-px w-8 bg-jade-400/70" />
              Reference · Servicing Vocabulary
            </p>

            <h1 className="font-heading font-bold text-display-lg lg:text-display-xl text-pearl mb-6">
              The Glossary of{" "}
              <span className="text-jade-gradient">Private Loan Servicing</span>
            </h1>
            <p className="text-pearl/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Forty terms from DSI&apos;s daily working vocabulary — regulatory,
              workout, operations, investor and tax, and loan-product. Written
              for practitioners and citation-friendly for the AI engines that
              get asked &ldquo;what is a beneficiary statement?&rdquo; at 11pm.
            </p>
          </div>
        </div>
        <div className="hairline-jade absolute inset-x-0 bottom-0 h-px" />
      </section>

      {/* Category index */}
      <section className="bg-surface-100 py-10 border-b border-surface-300 sticky top-16 z-30 backdrop-blur-md bg-surface-100/95">
        <div className="section-padding">
          <div className="max-container">
            <div className="flex flex-wrap gap-3">
              {GLOSSARY_CATEGORIES.map((cat) => {
                const id = cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <a
                    key={cat}
                    href={`#${id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-surface-300 text-sm font-medium text-slate-700 hover:border-jade-400 hover:text-jade-600 transition-colors"
                  >
                    {cat}
                    <ArrowRight className="w-3 h-3" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="bg-white py-16 lg:py-section">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            {GLOSSARY_CATEGORIES.map((category) => {
              const id = category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const terms = GLOSSARY.filter((t) => t.category === category);
              return (
                <div key={category} id={id} className="mb-16 scroll-mt-32">
                  <FadeIn>
                    <h2 className="font-heading font-bold text-display text-slate-700 mb-2">
                      {category}
                    </h2>
                    <div className="h-1 w-16 bg-jade-500 rounded-full mb-10" />
                  </FadeIn>

                  <dl className="space-y-8">
                    {terms.map((t) => (
                      <FadeIn key={t.slug}>
                        <div id={t.slug} className="scroll-mt-32">
                          <dt className="flex flex-wrap items-baseline gap-x-3 mb-2">
                            <span className="font-heading font-bold text-xl text-slate-700">
                              {t.term}
                            </span>
                            {t.abbr && (
                              <span className="text-sm font-medium text-jade-600">
                                {t.abbr}
                              </span>
                            )}
                          </dt>
                          <dd className="text-body leading-relaxed">
                            {t.definition}
                          </dd>
                        </div>
                      </FadeIn>
                    ))}
                  </dl>

                  <div className="mt-10 text-right">
                    <a
                      href="#top"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-body/50 hover:text-jade-600 transition-colors"
                    >
                      <ArrowUp className="w-3 h-3" />
                      Back to top
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-atmosphere relative overflow-hidden py-16 lg:py-20">
        <div className="hairline-jade absolute inset-x-0 top-0 h-px" />
        <div className="relative section-padding">
          <div className="max-container text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-display text-pearl mb-4">
              Need this terminology applied to your file?
            </h2>
            <p className="text-pearl/60 mb-8 max-w-2xl mx-auto">
              DSI is the servicer of record behind the documents these terms
              describe. Talk to us about your portfolio.
            </p>
            <Link href="/contact" className="btn-jade">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
