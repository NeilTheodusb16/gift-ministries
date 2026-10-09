/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#dce5f0',
          700: '#244e6b',
          800: '#17324d',
          900: '#0f2338',
          950: '#0a1726',
        },
        churchBlue: {
          400: '#4288b3',
          500: '#2f6f95',
          600: '#245978',
        },
        cream: {
          50: '#fcfbf8',
          100: '#f8f5ef',
          200: '#ede6d6',
        },
        gold: {
          200: '#f5e9c9',
          300: '#e8d39f',
          400: '#d9c58f',
          500: '#c9a45c',
          600: '#b08b43',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
