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
      'bigMobile': '576px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1200px'
    },
    extend: {
      colors: {
        'custom-gray': '#d5d5d5',
      },
    },
  },
  plugins: [],
}

