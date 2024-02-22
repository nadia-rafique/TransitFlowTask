/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          '250': 'rgba(9, 18, 66, 0.25)',
          '350': '#666C89',
          '450': '#091242'
        },
        customgray: {
          '150': 'rgba(255, 255, 255, 0.2)',
          '225':'rgba(232, 232, 232, 0.5)',
          '250': '#E8E8E8',
          '350': '#D8D8D8',
          '450':' #D9D9D9',
          '850': '#1C1F35',
          '950': '#23212A'
         }
      },
    },
  },
  plugins: [],
}

