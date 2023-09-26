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

          "primary": "#40edc4",

          "secondary": "#dbea07",

          "accent": "#fcabc1",

          "neutral": "#281a2d",

          "base-100": "#e4e6f1",

          "info": "#31bbdd",

          "success": "#118d6e",

          "warning": "#dc9d09",

          "error": "#f66071",
        },
      },
    ],
  },
}
