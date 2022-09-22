/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1A1A1A",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1440px",

      "2xl": "1536px",

      "3xl": "1920px",

      "4xl": "2560px",
    },
  },
  plugins: [],
};
