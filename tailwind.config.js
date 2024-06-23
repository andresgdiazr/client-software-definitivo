/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: theme =>({
      ...colors,
      fullred: '#C5313D',
      lightred: '#FF4051',
      fullblue: '#121660',
      lightblue: '#7173A0',
      fullyellow: '#FFD140',
      lightyellow: '#FFE79D',
    }),
  },
  plugins: [],
}

