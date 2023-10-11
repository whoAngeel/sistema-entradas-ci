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

          "primary": "#2b60d1",

          "secondary": "#29a0c4",

          "accent": "#c93cfc",

          "neutral": "#2c303a",

          "base-100": "#eeeff2",

          "info": "#158def",

          "success": "#45ded1",

          "warning": "#f1a93b",

          "error": "#f74b84",
        },
      },
    ],
  },
}
