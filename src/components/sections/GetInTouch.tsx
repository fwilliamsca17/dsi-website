"use client";

import { Send, CheckCircle, Phone, Mail } from "lucide-react";
import { useLeadForm } from "@/lib/useLeadForm";
import { COMPANY } from "@/lib/constants";

export function GetInTouch() {
  const { submitted, submitting, error, handleSubmit } = useLeadForm();

  return (
    <section className="hero-atmosphere section-padding-y relative overflow-hidden">
      <div className="hairline-jade absolute inset-x-0 top-0 h-px" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6EE7B7 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="hero-glow pointer-events-none absolute left-1/2 top-0 h-[40vw] w-[70vw] -translate-x-1/2 opacity-50" />

      <div className="relative z-10 section-padding">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow !text-jade-300 mb-4">Get in Touch</p>
              <h2 className="font-heading font-bold text-display-lg lg:text-display text-pearl mb-6">
                Ready to simplify your loan servicing?
              </h2>
              <p className="text-pearl/60 text-lg leading-relaxed max-w-lg mb-8">
                Whether you&apos;re an investor seeking transparency or a lender
                looking for a servicing partner, we&apos;re here to help. Every
                inquiry gets a response within 24 hours.
              </p>

              <div className="space-y-4 text-sm">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 text-pearl/70 hover:text-jade-300 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-jade-500/15 border border-jade-400/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-jade-300" />
                  </span>
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-pearl/70 hover:text-jade-300 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-jade-500/15 border border-jade-400/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-jade-300" />
                  </span>
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="card-dark">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-jade-300 mx-auto mb-4" />
                  <h3 className="font-heading text-heading text-pearl mb-2">
                    Message Sent
                  </h3>
                  <p className="text-pearl/60">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="hidden"
                    name="subject"
                    value="New DSI Website Inquiry"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      className="w-full bg-pearl/[0.04] border border-pearl/15 rounded-lg px-4 py-3 text-sm text-pearl placeholder:text-pearl/35 focus:outline-none focus:border-jade-400/60 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      className="w-full bg-pearl/[0.04] border border-pearl/15 rounded-lg px-4 py-3 text-sm text-pearl placeholder:text-pearl/35 focus:outline-none focus:border-jade-400/60 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full bg-pearl/[0.04] border border-pearl/15 rounded-lg px-4 py-3 text-sm text-pearl placeholder:text-pearl/35 focus:outline-none focus:border-jade-400/60 transition-colors"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Firm"
                      className="w-full bg-pearl/[0.04] border border-pearl/15 rounded-lg px-4 py-3 text-sm text-pearl placeholder:text-pearl/35 focus:outline-none focus:border-jade-400/60 transition-colors"
                    />
                  </div>

                  <select
                    name="inquiry_type"
                    className="w-full bg-pearl/[0.04] border border-pearl/15 rounded-lg px-4 py-3 text-sm text-pearl/80 focus:outline-none focus:border-jade-400/60 transition-colors"
                    defaultValue="Lender Inquiry"
                  >
                    <option value="Lender Inquiry" className="bg-ink-950">
                      Lender / Originator — New Servicing Engagement
                    </option>
                    <option value="Investor Inquiry" className="bg-ink-950">
                      Investor / Note Holder Inquiry
                    </option>
                    <option value="Payoff Demand" className="bg-ink-950">
                      Title / Escrow — Payoff or Beneficiary Statement
                    </option>
                    <option value="Attorney" className="bg-ink-950">
                      Attorney — Workout, BK, or Trustee Coordination
                    </option>
                    <option value="CPA" className="bg-ink-950">
                      CPA / Fund Admin — Tax Package or Audit Support
                    </option>
                    <option value="Loan Status" className="bg-ink-950">
                      Borrower — Existing Loan Status
                    </option>
                    <option value="General" className="bg-ink-950">
                      General Question
                    </option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Tell us about your servicing needs..."
                    rows={4}
                    required
                    className="w-full bg-pearl/[0.04] border border-pearl/15 rounded-lg px-4 py-3 text-sm text-pearl placeholder:text-pearl/35 focus:outline-none focus:border-jade-400/60 transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-jade disabled:opacity-60 disabled:cursor-wait"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Sending…" : "Send Message"}
                  </button>

                  {error && (
                    <p className="text-center text-sm text-red-300" role="alert">
                      Something went wrong sending your message. Please call{" "}
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="font-semibold text-jade-300 underline"
                      >
                        {COMPANY.phone}
                      </a>{" "}
                      or email{" "}
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="font-semibold text-jade-300 underline"
                      >
                        {COMPANY.email}
                      </a>
                      .
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
