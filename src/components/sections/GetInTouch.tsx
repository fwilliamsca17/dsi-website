"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { WEB3FORMS_KEY } from "@/lib/constants";

export function GetInTouch() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }
  }

  return (
    <section className="bg-gradient-slate py-20 lg:py-section">
      <div className="section-padding">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow !text-emerald-400 mb-4">Get in Touch</p>
              <h2 className="font-heading text-display-lg text-white mb-6">
                Ready to simplify your loan servicing?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Whether you&apos;re an investor seeking transparency or a lender
                looking for a servicing partner, we&apos;re here to help.
              </p>
            </div>

            <div className="card-dark">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-heading text-heading text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/60">
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
                      placeholder="Full Name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  <select
                    name="interest"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/50 focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      I am a...
                    </option>
                    <option value="Investor" className="bg-slate-700 text-white">
                      Investor
                    </option>
                    <option value="Lender" className="bg-slate-700 text-white">
                      Lender / Originator
                    </option>
                    <option value="Borrower" className="bg-slate-700 text-white">
                      Borrower
                    </option>
                    <option value="Other" className="bg-slate-700 text-white">
                      Other
                    </option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Tell us about your servicing needs..."
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  />

                  <button type="submit" className="w-full btn-primary justify-center">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
