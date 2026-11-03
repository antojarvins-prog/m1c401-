/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#101d17',
          900: '#182b23',
          850: '#1e342b',
          800: '#233d32', // Primary brand forest
          700: '#2e4d40',
          600: '#3c6152',
          500: '#4b7563',
          100: '#e5ede8',
          50: '#f2f7f4',
        },
        sage: {
          900: '#3c4738',
          800: '#4b5947',
          700: '#5c6e57',
          600: '#697c63',
          500: '#788a73', // Brand Sage
          400: '#96a791',
          300: '#b4c2b0',
          200: '#d1dbce',
          100: '#e8ede6',
          50: '#f4f7f3',
        },
        linen: {
          400: '#cfc8b4',
          300: '#ded8c7',
          200: '#e9e5d9', // Brand Linen
          150: '#f0ece1',
          100: '#f4f1ea',
          50: '#faf8f4',
        },
        ivory: {
          DEFAULT: '#faf9f5', // Brand Ivory
          soft: '#f7f6f0',
          pure: '#ffffff',
        },
        bronze: {
          900: '#5c4327',
          800: '#7a5a35',
          700: '#93724c',
          600: '#a68157',
          500: '#b58f65', // Brand Bronze
          400: '#c7a57e',
          300: '#d9bd9d',
          200: '#ebd8c2',
          100: '#f6ecdf',
          50: '#fcf8f3',
        },
        charcoal: {
          950: '#0e1411',
          900: '#16201b',
          800: '#222d27',
          700: '#344039',
          600: '#49554e',
          500: '#606c65',
          400: '#7b8780',
          300: '#9ca7a1',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
