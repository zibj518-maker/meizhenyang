/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d0e0c',
        paper: '#f2f0e9',
        acid: '#d9f95b',
        line: 'rgba(242, 240, 233, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'Noto Sans SC', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
