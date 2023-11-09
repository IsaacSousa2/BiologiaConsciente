/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '920px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
        'mm': {'max' : '380px'},
      },
      colors : {

        'azul' : '#5A81FA',
        'azulCinza' : '#CACCFF',
        'cinza' : '#A8B1CE',
        'cinzaClaro' : '#F2F5FF'

      },
    }
    ,
  },
  plugins: [],
}

