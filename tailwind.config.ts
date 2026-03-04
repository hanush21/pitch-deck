import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hera: {
          primary: "#9881D7",
          hover:   "#B49AE8",
          gold:    "#E7C978",
          bg:      "rgb(var(--c-bg) / <alpha-value>)",
          "bg-alt":"rgb(var(--c-bg-alt) / <alpha-value>)",
          surface: "rgb(var(--c-surface) / <alpha-value>)",
          border:  "rgb(var(--c-border) / <alpha-value>)",
          text:    "rgb(var(--c-text) / <alpha-value>)",
          muted:   "rgb(var(--c-muted) / <alpha-value>)",
          subtle:  "rgb(var(--c-subtle) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "hera-gradient": "linear-gradient(135deg, #0B0712 0%, #160D2A 50%, #0B0712 100%)",
        "purple-glow": "radial-gradient(ellipse at center, rgba(152,129,215,0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(22,13,42,0.8) 0%, rgba(11,7,18,0.9) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(152,129,215,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(152,129,215,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
