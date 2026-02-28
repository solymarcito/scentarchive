import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        "warm-white": "var(--warm-white)",
        ink: "var(--ink)",
        ash: "var(--ash)",
        dust: "var(--dust)",
        "gold-thread": "var(--gold-thread)",
        "archive-red": "var(--archive-red)",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
        courier: ["var(--font-courier)", "monospace"],
      },
      letterSpacing: {
        "display": "0.08em",
        "label": "0.2em",
        "nav": "0.25em",
      },
      transitionDuration: {
        "500": "500ms",
      },
      transitionTimingFunction: {
        exhale: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
