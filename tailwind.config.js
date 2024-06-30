/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:["poppins"]
      },
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'none': 'none',
        'custom-light': '2px 2px 4px rgba(255, 255, 255, 0.5)',
        'custom-dark': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'custom-emerald': '4px 4px 8px rgba(16, 185, 129, 0.5)',
        'custom-red': '2px 2px 4px rgba(239, 68, 68, 0.5)',
      },
      borderRadius: {
        'fancy': '75% 25% 46% 54% / 48% 25% 75% 52%  ',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}