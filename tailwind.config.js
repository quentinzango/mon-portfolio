/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active']
    }
  },
  plugins: [],
}