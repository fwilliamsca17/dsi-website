"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  eyebrow?: string;
  title?: string;
  faqs: FAQItem[];
  dark?: boolean;
}

export function FAQ({
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  faqs,
  dark = false,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={dark ? "hero-atmosphere relative overflow-hidden py-20 lg:py-section-lg" : "bg-surface-100 py-20 lg:py-section-lg"}>
      <div className="section-padding">
        <div className="max-container max-w-3xl">
          <SectionHeading eyebrow={eyebrow} title={title} centered light={dark} />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  className={
                    dark
                      ? "border border-pearl/10 rounded-xl overflow-hidden"
                      : "bg-white border border-surface-300 rounded-xl overflow-hidden"
                  }
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`${baseId}-panel-${i}`}
                    id={`${baseId}-question-${i}`}
                    className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${
                      dark
                        ? "hover:bg-white/5 text-pearl"
                        : "hover:bg-surface-100 text-slate-700"
                    }`}
                  >
                    <span className="font-heading font-semibold text-sm pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        openIndex === i ? "rotate-180" : ""
                      } ${dark ? "text-jade-400" : "text-jade-600"}`}
                    />
                  </button>
                  {openIndex === i && (
                    <div
                      id={`${baseId}-panel-${i}`}
                      role="region"
                      aria-labelledby={`${baseId}-question-${i}`}
                      className={`px-6 pb-5 text-sm leading-relaxed ${
                        dark ? "text-pearl/60" : "text-body/80"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
