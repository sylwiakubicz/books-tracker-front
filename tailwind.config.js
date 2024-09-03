  /** @type {import('tailwindcss').Config} */
  import url from "node:url";

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
        "additional-color": '#1A4D2E',
        "admin-primary": '#f7f7f7',
        "admin-secondary": '#22272b',
        "admin-gray": '#25292f',
        "admin-lightgray": '#31363a',
        "admin-akcent-color": '#0072a9'
      },
      backgroundImage: {
        'baner-tlo': "url('/assets/images/baner_tlo1.png')",
      }
    },
  },
  plugins: [],
}

