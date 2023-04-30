/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    backgroundImage: {
      'banner': "url('./public/banner.jpeg')",
    },
    screens:{
      'sm': {'max': '640px'},
      'md': {'max': '800px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
    }
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
