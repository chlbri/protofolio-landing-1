const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx,json}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins_: ['Poppins'],
      },
      container: {
        padding: '1rem',
      },
      aspectRatio: {
        '478/393': '478/393',
        '536/346': '536/346',
      },
      // screens: {
      //   '3xl': '2000px',
      // },
    },
  },
  variants: {
    extend: {
      // animation: ['group-hover', 'responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
