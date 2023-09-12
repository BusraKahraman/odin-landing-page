/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'odin-white': '#f9faf8',
      },
      backgroundColor: {
        'odin-blue': '#3882f6',
      },
    },
  },
  plugins: [],
};
