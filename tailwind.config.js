/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      "font-montserrat": ["Montserrat", "sans-serif"]
    },
    screens: {
      'tablet': '744px',
      'laptop': '1024px',
    },
    extend: {
      colors: {
        'custom-gray': '#d5d5d5',
      },
    },
  },
  plugins: [],
}

