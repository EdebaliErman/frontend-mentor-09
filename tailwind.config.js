/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        daniel: "#733fc8",
        jonatan: "#49556b",
        patrick: "#18202d",
        background: "#edf2f8"
      }

    },
    screens: {
      '2xl': { 'max': '1535px' },
    }
  },
  plugins: [],
}

