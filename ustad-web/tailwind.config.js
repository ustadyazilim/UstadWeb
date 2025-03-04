/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/ustad-web-yesildefter/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
    // Add other paths if necessary
  ],
  safelist: [
    {
      pattern: /bg-(?:background|white)/,
    },
    {
      pattern:
        /text-(?:sm|gray-700|gray-900|gray-50|gray-300|blue-300|blue-800)/,
    },
    {
      pattern: /rounded-lg/,
    },
    {
      pattern: /shadow-(?:sm|md)/,
    },
    {
      pattern: /transition-shadow/,
    },
    {
      pattern: /max-w-4xl/,
    },
    {
      pattern: /p-6/,
    },
    {
      pattern: /m-1/,
    },
    {
      pattern: /block/,
    },
    {
      pattern: /w-full/,
    },
    {
      pattern: /cursor-pointer/,
    },
    {
      pattern:
        /focus:(outline-none|border-transparent|ring-4|ring-blue-300|ring-blue-800)/,
    },
    {
      pattern: /dark:(text-gray-400|focus:ring-blue-800)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
