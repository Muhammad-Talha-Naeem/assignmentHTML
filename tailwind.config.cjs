/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}","./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Russo: ['Russo One', 'sans-serif'],
        Pacifico:['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}