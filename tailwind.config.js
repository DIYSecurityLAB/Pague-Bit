/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: 'var(--color-orange-50)',
          100: 'var(--color-orange-100)',
          200: 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
          500: 'var(--color-orange-500)', // #ff6e2c
          600: 'var(--color-orange-600)',
          700: 'var(--color-orange-700)',
          800: 'var(--color-orange-800)',
          900: 'var(--color-orange-900)',
        },
      },
    },
  },
  plugins: [],
};
