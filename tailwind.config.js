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
      fontFamily: {
        yesevaOne: '"Yeseva One", serif;',
        montserrat: '"Montserrat", sans- serif;',
        poppins: ' "Poppins", sans-serif;'
      },
    },
  },
  plugins: [],
};