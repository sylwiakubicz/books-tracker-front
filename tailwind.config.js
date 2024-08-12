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
        'primary-color': "#F8EDE3",
        'secondary-color': '#BDD2B6',
        'akcent-color': "#A2B29F",
        "additional-color": '#798777'
      },
    },
  },
  plugins: [],
}

