/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        "gray": "#090C11",
        "light-gray": "#F8FAFC",
        "dark-gray": "#0D1118",
        "trans-gray": "#101725",
        "trans-gray-2": "#0C1016",
        "ash": "#BABABA",
        "trans-ash": "#9C9C9C"
      }
    },
  },
  plugins: [require("daisyui")],
}
