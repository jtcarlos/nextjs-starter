/** @type {import('tailwindcss').Config} */
const tailwindColors = require("tailwindcss/colors");

delete tailwindColors.lightBlue;
delete tailwindColors.warmGray;
delete tailwindColors.trueGray;
delete tailwindColors.coolGray;
delete tailwindColors.blueGray;

module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}"],
  mode: "jit",
  theme: {
    container: { padding: "2rem" },
    colors: {
      ...tailwindColors,
    },
    extend: {},
  },
  plugins: [],
};
