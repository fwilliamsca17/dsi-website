"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="hero-atmosphere section-padding-y relative overflow-hidden">
      <div className="hairline-jade absolute inset-x-0 top-0 h-px" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6EE7B7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="hero-glow pointer-events-none absolute left-1/2 top-0 h-[40vw] w-[70vw] -translate-x-1/2 opacity-50" />

      <div className="relative z-10 section-padding">
        <div className="max-container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by Lenders & Investors"
            centered
            light
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="relative min-h-[280px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="text-center w-full"
                >
                  <Quote className="w-10 h-10 text-jade-400/40 mx-auto mb-6" />

                  <blockquote className="text-xl md:text-2xl text-pearl/90 font-light leading-relaxed mb-6 italic">
                    &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                  </blockquote>

                  {TESTIMONIALS[current].result && (
                    <div className="inline-block bg-jade-500/15 text-jade-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-jade-400/20">
                      {TESTIMONIALS[current].result}
                    </div>
                  )}

                  <div>
                    <p className="text-jade-300 font-heading font-semibold">
                      {TESTIMONIALS[current].author}
                    </p>
                    <p className="text-pearl/50 text-sm">
                      {TESTIMONIALS[current].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-pearl/20 flex items-center justify-center text-pearl/60 hover:text-jade-300 hover:border-jade-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "bg-jade-400 w-6" : "bg-pearl/30 w-2"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-pearl/20 flex items-center justify-center text-pearl/60 hover:text-jade-300 hover:border-jade-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hairline-jade absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
