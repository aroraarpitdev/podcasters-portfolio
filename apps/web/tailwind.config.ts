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
        "on-surface": "#F0EDE6",
        "on-background": "#F0EDE6",
        "surface-container-highest": "#353534",
        "outline": "#9f8e7a",
        "surface-container-low": "#1c1b1b",
        "background": "#0A0A0A",
        "primary-container": "#f5a623",
        "primary": "#f5a623",
        "on-primary": "#0A0A0A",
        "on-surface-variant": "#F0EDE6",
        "surface-container-high": "#2a2a2a",
        "surface-container": "#201f1f",
        "surface": "#0A0A0A",
        "surface-container-lowest": "#0e0e0e",
        "outline-variant": "#524534",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px",
      },
      spacing: {
        "stack-sm": "12px",
        "stack-md": "24px",
        "container-padding": "40px",
        "grid-gutter": "24px",
        "section-gap": "120px",
      },
      fontFamily: {
        "headline-md": ["var(--font-syne)", "sans-serif"],
        "display-lg": ["var(--font-syne)", "sans-serif"],
        "headline-lg": ["var(--font-syne)", "sans-serif"],
        "body-md": ["var(--font-dm-sans)", "sans-serif"],
        "label-sm": ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        "label-sm": ["13px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};

export default config;
