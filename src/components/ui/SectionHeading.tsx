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
      {eyebrow && (
        <p
          className={`eyebrow mb-4 ${
            light ? "!text-jade-300" : ""
          } ${centered ? "" : ""}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading font-bold text-display-lg lg:text-display-xl mb-4 ${
          light ? "text-pearl" : "text-slate-700"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-pearl/60" : "text-body"}`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
