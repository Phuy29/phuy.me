/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-100": "#252740",
        "dark-200": "#121833",
        "dark-300": "#0c0e27",
      },
    },
  },
  plugins: [],
};
