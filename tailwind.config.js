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
      primary: "#0042CC",
      danger: "#FF4D4D",
      success: "#00C48C",
      warning: "#FFC82C",
      info: "#00B8D9",
      "light-primary": "#C5DCFF",
      ...tailwindColors,
    },
    extend: {},
  },
  plugins: [],
};
