/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#4B1C2F',
        lavender: '#A89FCE',
        gold: '#D4AF37',
        ivory: '#F8F5EF',
      },
    },
  },
  plugins: [],
}

