/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#99e6e8",

          "secondary": "#fcffbc",

          "accent": "#ffe8bc",

          "neutral": "#29242d",

          "base-100": "#f8f1f9",

          "info": "#75a4d7",

          "success": "#79e6b7",

          "warning": "#e09010",

          "error": "#eb4750",
        },
      },
    ],
  },
}
