/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8621A',
          'orange-dark': '#C4521A',
          'orange-light': '#F07830',
          charcoal: '#1A1A1A',
          dark: '#111111',
          'dark-2': '#1E1E1E',
          'dark-3': '#252525',
          'dark-4': '#2D2D2D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
