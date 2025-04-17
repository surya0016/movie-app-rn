/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: '#030014',
        secondary: '#151312',
        accent: "#ab8bff",
        light:{
          100: '#d6c6ff',
          200: '#a8b5db',
          300: '#9ca4ab', 
        },
        dark:{
          100: '#221f3d',
          200: '#0f0d23',
        },
      },
    },
  },
  plugins: [],
}

