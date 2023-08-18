/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ['Dancing Script', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      container: {
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
        },
      },
      gridTemplateAreas: {},
      gridTemplateRows: {},
    },
    colors: {
      base: '#0A1524',
      'dark-blue': '#0A1524',
      'navy-blue': '#1F2937',
      'blue-gray': '#1C2129',
      'light-blue': '#E4F1FF',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'light', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
