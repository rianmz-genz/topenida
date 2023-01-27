/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F8F9',
        darkblue: '#1F4590',
        orange: '#FFA451',
        silver: '#F7F8F9',
        blue: '#0166FF',
        yellow: '#FFD05A',
        thegray: '#222222'
      },
      fontFamily:{
        'opensans': ['Open Sans'],
        'raleway': ['Raleway'],
      }
    },
  },
  plugins: [],
}