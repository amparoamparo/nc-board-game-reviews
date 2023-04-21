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
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
