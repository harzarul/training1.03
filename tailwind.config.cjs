/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, .1)",
        white: "rgba(248, 248, 248, 0.9)",
        black: "rgba(7, 7, 7, 0.9)",
        gray: "rgba(155, 158, 154, 1)",
        dimGray: "rgba(155, 158, 154, .3)",
        dimRed: "rgba(255, 247, 247, .1)",
        purple: "rgba(134, 19, 165, 1)",
        yellow: "#FFCE4E",
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};