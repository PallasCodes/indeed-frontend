/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2557a7',
        primaryHover: '#164081',
        grayIndeed: '#e4e2e0',
      },
      fontSize: {
        smd: '14px',
      },
      fontFamily: {
        sans: 'Noto Sans',
      },
    },
  },
  plugins: [],
}
