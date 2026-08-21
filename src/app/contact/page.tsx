"use client";

import {
  Send,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { useLeadForm } from "@/lib/useLeadForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageSeo } from "@/components/seo/JsonLd";

export default function ContactPage() {
  const { submitted, submitting, error, handleSubmit } = useLeadForm();

  return (
    <>
      <PageSeo
        title="Contact | Direct Servicing Initiative"
        description="Talk to DSI about loan servicing, investor reporting, or payoff coordination. Call (626) 796-1680 or email info@trustdsi.com. Every inquiry gets a same-day acknowledgment."
        path="/contact"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            {/* CSS entrance, not FadeIn: the h1 is this page's LCP element and
                must never ship as opacity:0 in the SSR HTML. */}
            <div>
              <p className="hero-in eyebrow !text-jade-300 mb-4">Contact Us</p>
              <h1 className="hero-in-lcp font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-pearl mb-6 text-balance">
                Let&apos;s Start a Conversation
              </h1>
              <p className="hero-in text-pearl/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Whether you&apos;re exploring servicing options, requesting a demo,
                or have questions about our capabilities, we&apos;re here to help.
              </p>
            </div>
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
                      <div className="w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center shrink-0 group-hover:bg-jade-100 transition-colors">
                        <Phone className="w-5 h-5 text-jade-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Phone
                        </p>
                        <p className="text-sm text-body/80">{COMPANY.phone}</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center shrink-0 group-hover:bg-jade-100 transition-colors">
                        <Mail className="w-5 h-5 text-jade-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Email
                        </p>
                        <p className="text-sm text-body/80">{COMPANY.email}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-jade-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Office
                        </p>
                        <p className="text-sm text-body/80">
                          {COMPANY.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-jade-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Hours
                        </p>
                        <p className="text-sm text-body/80">
                          Monday - Friday, 9am - 6pm PT
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-100 rounded-xl p-6">
                    <p className="text-sm font-medium text-slate-700 mb-2">
                      Family-Owned & Operated
                    </p>
                    <p className="text-sm text-body/80 leading-relaxed">
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
                        <CheckCircle className="w-14 h-14 text-jade-500 mx-auto mb-4" />
                        <h3 className="font-heading text-heading-lg text-slate-700 mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-body/80">
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
                        {/* Web3Forms honeypot — bots check it, humans never see it */}
                        <input
                          type="checkbox"
                          name="botcheck"
                          className="hidden"
                          tabIndex={-1}
                          autoComplete="off"
                          aria-hidden="true"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="contact-name"
                              className="block text-sm font-medium text-slate-700 mb-2"
                            >
                              Full Name
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              name="name"
                              autoComplete="name"
                              required
                              className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-body/30 focus:outline-none focus:border-jade-500 focus:ring-1 focus:ring-jade-500 transition-colors"
                              placeholder="John Smith"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="contact-email"
                              className="block text-sm font-medium text-slate-700 mb-2"
                            >
                              Email Address
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              name="email"
                              autoComplete="email"
                              required
                              className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-body/30 focus:outline-none focus:border-jade-500 focus:ring-1 focus:ring-jade-500 transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="contact-phone"
                              className="block text-sm font-medium text-slate-700 mb-2"
                            >
                              Phone Number
                            </label>
                            <input
                              id="contact-phone"
                              type="tel"
                              name="phone"
                              autoComplete="tel"
                              className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-body/30 focus:outline-none focus:border-jade-500 focus:ring-1 focus:ring-jade-500 transition-colors"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="contact-type"
                              className="block text-sm font-medium text-slate-700 mb-2"
                            >
                              I am a...
                            </label>
                            <select
                              id="contact-type"
                              name="type"
                              className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-jade-500 focus:ring-1 focus:ring-jade-500 transition-colors"
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
                          <label
                            htmlFor="contact-message"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            How can we help?
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            required
                            className="w-full bg-white border border-surface-400 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-body/30 focus:outline-none focus:border-jade-500 focus:ring-1 focus:ring-jade-500 transition-colors resize-none"
                            placeholder="Tell us about your servicing needs, portfolio size, or any questions..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-wait"
                        >
                          <Send className="w-4 h-4" />{" "}
                          {submitting ? "Sending…" : "Send Message"}
                        </button>

                        {error && (
                          <p
                            className="text-center text-sm text-red-600"
                            role="alert"
                          >
                            Something went wrong sending your message. Please
                            call{" "}
                            <a
                              href={`tel:${COMPANY.phone}`}
                              className="font-semibold text-jade-700 underline"
                            >
                              {COMPANY.phone}
                            </a>{" "}
                            or email{" "}
                            <a
                              href={`mailto:${COMPANY.email}`}
                              className="font-semibold text-jade-700 underline"
                            >
                              {COMPANY.email}
                            </a>
                            .
                          </p>
                        )}
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
