/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Poppins":["Poppins","sans-serif"],
        "Noto-Sans-Bengali":["Noto Sans Bengali","sans-serif"],

      },

      colors:{
        primaryColor:"#F00C89",
        secondaryColor:'#333',
        'btnColor': 'rgba(0, 0, 0, 0.50)',
      },
      backgroundImage:{
        'btn-hover': 'linear-gradient(96deg, #F30B88 0.94%, #9E24B6 94.94%)'
      }
    },
  },
  plugins: [],
}

