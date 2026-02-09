import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eafff3",
          100: "#ccffe3",
          200: "#99ffcc",
          300: "#5cffad",
          400: "#2ae08a",
          500: "#14b86a", // main
          600: "#0e8f52",
          700: "#0b6f41",
          800: "#0a5633",
          900: "#083f26",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(20,184,106,.25), 0 0 40px rgba(20,184,106,.18)",
      },
      backgroundImage: {
        hero: "url('/images/bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
