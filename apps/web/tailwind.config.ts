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
        "on-surface": "#F0EDE6", // unified
        "on-background": "#F0EDE6",
        "surface-container-highest": "#3c332a", // from dash
        "outline": "#9f8e7a",
        "surface-container-low": "#111111", // from dash
        "background": "#0A0A0A",
        "primary-container": "#f5a623",
        "primary": "#f5a623",
        "on-primary": "#0A0A0A",
        "on-surface-variant": "#F0EDE680", // from dash
        "surface-container-high": "#302920", // from dash
        "surface-container": "#0D0D0D", // from dash
        "surface": "#0A0A0A",
        "surface-container-lowest": "#0D0D0D", // from dash
        "outline-variant": "#2A2A2A", // from dash
        "surface-variant": "#1A1A1A",
        "error": "#ffb4ab",
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
        "gutter": "24px",
        "input-padding-y": "10px",
        "margin": "32px",
        "unit": "4px",
        "input-padding-x": "14px",
      },
      fontFamily: {
        "headline-md": ["var(--font-syne)", "sans-serif"],
        "display-lg": ["var(--font-syne)", "sans-serif"],
        "headline-lg": ["var(--font-syne)", "sans-serif"],
        "body-md": ["var(--font-dm-sans)", "sans-serif"],
        "label-sm": ["var(--font-dm-sans)", "sans-serif"],
        "label-caps": ["var(--font-dm-sans)", "sans-serif"],
        "button": ["var(--font-dm-sans)", "sans-serif"],
        "headline-sm": ["var(--font-syne)", "sans-serif"],
        "input": ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        "label-sm": ["13px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-md": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "600" }],
        "button": ["14px", { lineHeight: "1", fontWeight: "500" }],
        "headline-sm": ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        "input": ["14px", { lineHeight: "1", fontWeight: "400" }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};

export default config;
