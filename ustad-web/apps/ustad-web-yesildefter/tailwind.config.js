/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../shared/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)',
          green: 'var(--primary-green)',
          orange: 'var(--primary-orange)',
        },
      },
      spacing: {
        32: '8rem',
        48: '12rem',
        64: '16rem',
        96: '24rem',
      },
    },
  },
  plugins: [],
};
