"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { COMPANY, WEB3FORMS_KEY } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactPage() {
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
    <>
      {/* Hero */}
      <section className="bg-gradient-slate pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            <FadeIn>
              <p className="eyebrow !text-emerald-400 mb-4">Contact Us</p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-white mb-6 text-balance">
                Let&apos;s Start a Conversation
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Whether you&apos;re exploring servicing options, requesting a demo,
                or have questions about our capabilities, we&apos;re here to help.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <h2 className="font-heading text-heading-lg text-slate-700 mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6 mb-10">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Phone
                        </p>
                        <p className="text-sm text-body/70">{COMPANY.phone}</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                        <Mail className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Email
                        </p>
                        <p className="text-sm text-body/70">{COMPANY.email}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Office
                        </p>
                        <p className="text-sm text-body/70">
                          {COMPANY.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Hours
                        </p>
                        <p className="text-sm text-body/70">
                          Monday - Friday, 9am - 6pm PT
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-100 rounded-xl p-6">
                    <p className="text-sm font-medium text-slate-700 mb-2">
                      Family-Owned & Operated
                    </p>
                    <p className="text-sm text-body/60 leading-relaxed">
                      DSI is a family-owned company delivering institutional-grade
                      loan servicing with the personal accountability and
                      transparency that comes from private ownership.
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <FadeIn delay={0.15}>
                  <div className="bg-surface-100 rounded-2xl p-8 lg:p-10">
                    {submitted ? (
                      <div className="text-center py-16">
                        <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                        <h3 className="font-heading text-heading-lg text-slate-700 mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-body/60">
                          Thank you for reaching out. We&apos;ll be in touch
                          within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                          type="hidden"
                          name="subject"
                          value="New DSI Contact Form Submission"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-body/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                              placeholder="John Smith"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-body/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-body/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              I am a...
                            </label>
                            <select
                              name="type"
                              className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                              defaultValue=""
                            >
                              <option value="" disabled>
                                Select one
                              </option>
                              <option value="Investor">Investor</option>
                              <option value="Lender">Lender / Originator</option>
                              <option value="Borrower">Borrower</option>
                              <option value="Broker">Broker / Advisor</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            How can we help?
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            required
                            className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-body/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                            placeholder="Tell us about your servicing needs, portfolio size, or any questions..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn-primary w-full justify-center text-base py-4"
                        >
                          <Send className="w-4 h-4" /> Send Message
                        </button>
                      </form>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
