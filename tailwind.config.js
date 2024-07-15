/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        athena: '#0d042e',
      },
      backgroundImage: {
        athenaBG: 'linear-gradient(to right, #1ad5bc, #07aee9)',
      },
      fontFamily: {
        yesevaOne: '"Yeseva One", serif;',
        montserrat: '"Montserrat", sans- serif;',
        poppins: ' "Poppins", sans-serif;'
      },
    },
  },
  plugins: [],
};