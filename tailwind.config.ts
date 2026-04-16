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
        // DSI brand primary — dark blue from existing site (#053D57)
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
        emerald: {
          DEFAULT: "#059669",
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
        surface: {
          DEFAULT: "#F7F9FC",
          50: "#FFFFFF",
          100: "#F7F9FC",
          200: "#EDF1F7",
          300: "#E2E8F0",
          400: "#CBD5E1",
        },
        body: "#3B4856",
      },
      fontFamily: {
        heading: ["var(--font-league-spartan)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.25rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display": ["2.75rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading-xl": ["2.25rem", { lineHeight: "1.2" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.25" }],
        "heading": ["1.5rem", { lineHeight: "1.3" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        section: "6rem",
        "section-lg": "8rem",
      },
      backgroundImage: {
        "gradient-slate": "linear-gradient(135deg, #053D57 0%, #0C5575 50%, #053D57 100%)",
        "gradient-emerald": "linear-gradient(135deg, #059669 0%, #10B981 100%)",
        "gradient-dark": "linear-gradient(180deg, rgba(5,61,87,0.92) 0%, rgba(5,61,87,0.98) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
