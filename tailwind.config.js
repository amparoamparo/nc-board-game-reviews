/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
      colors: {
        "bright-yellow": "#f8f063",
        "nc-red-primary": "#eb1c24",
        "nc-red-mid": "#d91921",
        "nc-red-dark": "#cc171f",
      },
    },
  },
  plugins: [],
};
