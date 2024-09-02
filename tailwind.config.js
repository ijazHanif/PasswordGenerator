/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope:['Manrope', 'sans-serif'],
      },
      colors:{
        primary:'#4A5B5C'
      }
    },
  },
  plugins: [],
}

// xamp , composer , mpdf gene