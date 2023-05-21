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
        "primary": "#1E1E1E",
        "secondary": "#096EC4",
        "green": "#02AB76",
        "black": "#1E293B",
        "black-2": "#101725",
        "border": "#475569",
        "gray": "#94A3B8"
      }
    },
  },
  plugins: [require("daisyui")],
}
