/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    fontFamily: {
      recoleta: ["Recoleta", "sans-serif"],
    },

    extend: {
      
    },
  },
  plugins: [require("flowbite/plugin")],
};
