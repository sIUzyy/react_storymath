/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Roboto Condensed, sans-serif", // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
};
