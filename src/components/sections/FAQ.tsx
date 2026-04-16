"use client";

import { useState } from "react";
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

  return (
    <section className={dark ? "bg-gradient-slate py-20 lg:py-section-lg" : "bg-surface-100 py-20 lg:py-section-lg"}>
      <div className="section-padding">
        <div className="max-container max-w-3xl">
          <SectionHeading eyebrow={eyebrow} title={title} centered light={dark} />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  className={
                    dark
                      ? "border border-white/10 rounded-xl overflow-hidden"
                      : "bg-white border border-surface-300 rounded-xl overflow-hidden"
                  }
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${
                      dark
                        ? "hover:bg-white/5 text-white"
                        : "hover:bg-surface-100 text-slate-700"
                    }`}
                  >
                    <span className="font-heading font-semibold text-sm pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        openIndex === i ? "rotate-180" : ""
                      } ${dark ? "text-emerald-400" : "text-emerald-600"}`}
                    />
                  </button>
                  {openIndex === i && (
                    <div
                      className={`px-6 pb-5 text-sm leading-relaxed ${
                        dark ? "text-white/60" : "text-body/70"
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
