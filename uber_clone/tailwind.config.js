/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter']
      },
      backgroundImage: {
        'uber': "url('/uber_clone/src/assets/bg-uber.png')",
        'city': "url('/uber_clone/src/assets/bg-city.png')",
      }
    },
  },
  plugins: [],
}

