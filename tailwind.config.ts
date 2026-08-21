import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ───── DSI brand (existing — kept for backward compatibility) ─────
        slate: {
          DEFAULT: "#053D57",
          50: "#EBF4F8",
          100: "#CEE3ED",
          200: "#9DC7DB",
          300: "#6CABC9",
          400: "#3B8FB7",
          500: "#1A6D94",
          600: "#0C5575",
          700: "#053D57",
          800: "#042E42",
          900: "#021F2D",
          950: "#011018",
        },
        surface: {
          DEFAULT: "#F7F9FC",
          50: "#FFFFFF",
          100: "#F7F9FC",
          200: "#EDF1F7",
          300: "#E2E8F0",
          400: "#CBD5E1",
        },
        body: "#3B4856",

        // ───── Phase 2 — Institutional Nocturne (DSI Jade variant) ─────
        // Distinct from CDF's gold nocturne — same depth, cooler temperature,
        // jade as the precious accent (ledger green, money flow, accuracy).
        ink: {
          DEFAULT: "#020812",
          900: "#041420",
          950: "#020812",
        },
        midnight: {
          DEFAULT: "#052035",
          700: "#0A3551",
          800: "#072A45",
          900: "#052035",
          950: "#031526",
        },
        jade: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        pearl: "#EAF4F1",
        mist: "#B8CCC7",
        copper: {
          DEFAULT: "#C67D4A",
          50: "#FBF3ED",
          100: "#F5E0D0",
          200: "#EBBFA0",
          300: "#E09E71",
          400: "#D68D5A",
          500: "#C67D4A",
          600: "#A96539",
          700: "#8C4E2B",
          800: "#6F3A1F",
          900: "#522714",
        },
      },
      fontFamily: {
        heading: ["var(--font-league-spartan)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "heading-xl": ["2.25rem", { lineHeight: "1.2" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.25" }],
        heading: ["1.5rem", { lineHeight: "1.3" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
        label: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.15em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        section: "6rem",
        "section-lg": "8rem",
      },
      backgroundImage: {
        // Atmospheric gradients — the DSI nocturne recipe.
        "gradient-slate":
          "linear-gradient(158deg, #041420 0%, #052035 55%, #053D57 100%)",
        "gradient-nocturne":
          "linear-gradient(158deg, #020812 0%, #052035 58%, #041420 100%)",
        "gradient-jade":
          "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
        "gradient-dark":
          "linear-gradient(180deg, rgba(5,32,53,0.92) 0%, rgba(2,8,18,0.98) 100%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        rise: {
          "0%": { transform: "translateY(16px)" },
          "100%": { transform: "translateY(0)" },
        },
        "scroll-cue": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.45" },
          "50%": { transform: "translateY(7px)", opacity: "1" },
        },
        "glow-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.85" },
          "50%": { transform: "translate(2%, -2%) scale(1.06)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        rise: "rise 0.7s ease-out both",
        "scroll-cue": "scroll-cue 2.4s ease-in-out infinite",
        "glow-drift": "glow-drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
