import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <FadeIn className={centered ? "text-center" : ""}>
      {eyebrow && <p className={`eyebrow mb-4 ${light ? "!text-emerald-400" : ""}`}>{eyebrow}</p>}
      <h2
        className={`font-heading text-display-lg lg:text-display-xl mb-4 ${
          light ? "text-white" : "text-slate-700"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-body"}`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
