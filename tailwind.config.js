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

          "primary": "#ffc9f1",

          "secondary": "#a449dd",

          "accent": "#28af87",

          "neutral": "#212235",

          "base-100": "#302957",

          "info": "#6282cb",

          "success": "#1b9872",

          "warning": "#b99213",

          "error": "#e14768",
        },
      },
    ],
  },
}
