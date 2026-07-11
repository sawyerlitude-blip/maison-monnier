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
        navy: "#0a0f1a",
        "navy-light": "#0d1520",
        "navy-mid": "#162030",
        cream: "#f5f0e8",
        "cream-muted": "rgba(245,240,232,0.5)",
        gold: "#c8aa64",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Montserrat", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.4em",
      },
    },
  },
  plugins: [],
};
export default config;
