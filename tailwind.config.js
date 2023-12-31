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
      keyframes: {
        showSideBar:{
          '0%': { transform: 'translateY(-400px)', opacity: '0' },
        '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        removeSideBar:{
        '100%' :{ transform: 'translateY(0px)', opacity:'1'},
          '0%' :{ transform: 'translateY(-400)', opacity:'0'},
        },
      },
      animation:{
        "showsidebar": "showSideBar 0.5s linear",
        "removesidebar": "removeSideBar 0.5s linear"
      },
    }
    ,
  },
  plugins: [],
}

