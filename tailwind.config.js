/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#AED6D6',
        secondary: '#D2FFAD',
        accent: '#FDC4C0'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Custom font stack
      },
    },
  },
  plugins: [],
}

