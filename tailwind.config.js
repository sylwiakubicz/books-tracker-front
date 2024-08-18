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
      'desktop': '1260px'
    },
    extend: {
      colors: {
        'primary-color': "#F8EDE3",
        'secondary-color': '#E8DFCA',
        'akcent-color': "#4F6F52",
        "additional-color": '#1A4D2E'
      },
    },
  },
  plugins: [],
}

