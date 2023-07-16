/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ['Dancing Script', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
