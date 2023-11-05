/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        primary: '#0d2240',
        offblue: '#A9A9AF',
        accent: ' #f7a800',
        info: '#00a8e1',
        offwhite: '#fbfbf8',
        offgray: '#F8F8F8',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
