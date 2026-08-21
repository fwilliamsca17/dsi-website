import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { PageSeo } from "@/components/seo/JsonLd";

const DESCRIPTION =
  "Direct Servicing Initiative privacy policy — how we collect, use, and protect your personal information, including SMS opt-in data.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: DESCRIPTION,
  alternates: { canonical: "https://trustdsi.com/privacy" },
};

/*
 * SMS opt-in / TCPA paragraph is load-bearing for outbound texting compliance.
 * Do not reword without legal sign-off.
 */
const POLICY_PARAGRAPHS = [
  "Your privacy is important to us. It is Direct Servicing Initiative's policy to respect your privacy regarding any information we may collect from you across our website, https://trustdsi.com, and other sites we own and operate.",
  "No mobile information will be obtained from and/or shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. You can always decline or stop receiving messages by responding \"STOP\" at any time. For more information, reply \"HELP\". Message and data rates may apply. Message frequency varies.",
  "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.",
  "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.",
  "We don't share or sell any personally identifying information publicly or with third parties, except when required to by law.",
  "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.",
  "You are free to refuse our request for your personal information by sending us an email with subject REMOVE, with the understanding that we may be unable to provide you with some of your desired services.",
  "Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.",
  "This policy is effective as of 1 January 2025.",
];

export default function PrivacyPage() {
  return (
    <>
      <PageSeo
        title="Privacy Policy | Direct Servicing Initiative"
        description="Direct Servicing Initiative privacy policy — how we collect, use, and protect your personal information, including SMS opt-in data."
        path="/privacy"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-14">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative section-padding">
          <div className="max-container">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-pearl/50">
              <Link href="/" className="hover:text-jade-300 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-pearl/30">/</span>
              <span className="text-white/80">Privacy Policy</span>
            </nav>
            <h1 className="font-heading font-bold text-display-lg lg:text-display-xl text-pearl">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-section">
        <div className="section-padding">
          <div className="max-container">
            <div className="mx-auto max-w-3xl space-y-6">
              {POLICY_PARAGRAPHS.map((p, i) => (
                <p key={i} className="leading-relaxed text-body">
                  {p}
                </p>
              ))}

              <div className="mt-10 rounded-xl border border-surface-300 bg-surface-100 p-6 text-sm leading-relaxed text-body">
                <p className="font-heading font-bold text-slate-700">
                  {COMPANY.legalName}
                </p>
                <p className="mt-1">
                  {COMPANY.address} ·{" "}
                  <a href={`tel:${COMPANY.phone}`} className="text-jade-700 underline">
                    {COMPANY.phone}
                  </a>{" "}
                  ·{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-jade-700 underline"
                  >
                    {COMPANY.email}
                  </a>
                </p>
                <p className="mt-2 text-body/80">
                  Principal: {COMPANY.principal} · Broker of Record: {COMPANY.brokerOfRecord} (DRE# {COMPANY.brokerOfRecordDre})
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
