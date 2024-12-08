/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideRightLeft: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        slideRightLeft: 'slideRightLeft 0.7s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};