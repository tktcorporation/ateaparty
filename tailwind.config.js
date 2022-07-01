/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        text: "#333333",
        background: "#FFFFFF",
        muted: "#f0e6f6",
        primary: "#121212",
        secondary: "#f89330",
      },
    },
  },
  plugins: [],
};
