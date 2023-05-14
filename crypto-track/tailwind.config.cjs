/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    backgroundImage: {
      'banner': "url('/banner.jpeg')",
    },
    screens:{
      'xs': {'max': '450px'},
      'sm': {'max': '660px'},
      'md': {'max': '770px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
    }
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
