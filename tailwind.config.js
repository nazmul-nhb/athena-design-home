/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        athena: '#0db9dd',
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