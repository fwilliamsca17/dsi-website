"use client";

import { COMPANY } from "@/lib/constants";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="hero-atmosphere relative overflow-hidden pt-40 pb-28 min-h-[70vh] flex items-center">
      <div className="section-padding w-full">
        <div className="max-container max-w-2xl text-center">
          <p className="eyebrow !text-jade-300 mb-4">Something went wrong</p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-pearl mb-6 text-balance">
            We hit a snag loading this page
          </h1>
          <p className="text-pearl/70 text-lg leading-relaxed mb-10">
            Try again — and if it keeps happening, call{" "}
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
            . A person picks up.
          </p>
          <button onClick={() => reset()} className="btn-jade">
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
}
