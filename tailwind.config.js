/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leather: {
          50: '#fbf9f6',
          100: '#f7f2ed',
          200: '#eeded2',
          300: '#dfc2ad',
          400: '#c2946e',
          500: '#A47148', // Primary brand saddle leather
          600: '#925f38',
          700: '#7a4e2d',
          800: '#623e24',
          900: '#482d1a',
          950: '#2d1b0f',
        },
        brass: {
          light: '#f3e5ab',
          DEFAULT: '#c5a059',
          dark: '#99732f',
        },
        cognac: {
          light: '#b86b3b',
          DEFAULT: '#934b22',
          dark: '#6a3112',
        }
      },
      fontFamily: {
        brand: ['"Bodoni Moda"', 'Didot', '"Bodoni MT"', 'Georgia', 'serif'],
        bodoni: ['"Bodoni Moda"', 'Didot', '"Bodoni MT"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(34, 19, 14, 0.15)',
        'luxury-lg': '0 30px 60px -15px rgba(34, 19, 14, 0.25)',
      }
    },
  },
  plugins: [],
}
