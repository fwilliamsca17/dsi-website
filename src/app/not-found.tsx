import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="hero-atmosphere relative overflow-hidden pt-40 pb-28 min-h-[70vh] flex items-center">
      <div className="section-padding w-full">
        <div className="max-container max-w-2xl text-center">
          <p className="eyebrow !text-jade-300 mb-4">404</p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-pearl mb-6 text-balance">
            This page isn&apos;t on file
          </h1>
          <p className="text-pearl/70 text-lg leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            If you were sent here by a statement or demand letter, call us and
            we&apos;ll pull the right document.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-jade">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-ghost-light">
              Contact DSI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
