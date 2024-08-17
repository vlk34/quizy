/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anek: ['"Anek Devanagari"', "sans-serif"],
      },
      colors: {
        custom5: "#0d1b2a",
        custom4: "#1b263b",
        custom3: "#415a77",
        custom2: "#778da9",
        custom1: "#e0e1dd",
      },
    },
  },
  plugins: [],
};
