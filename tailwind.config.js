/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'xsm': {'max': '339px'},
        // => @media (max-width: 639px) { ... }
      },

      colors:{
              'white':'#fff',
              'grey':'#666',
              'blue':'#38bdf8',
              'red':{
                500:"#EF4444"
              },
              'violet':{
500:"#8B5CF6"
              },
  
      "primary": {
        50: "#F9F4FB",
        100: "#F2E8F7",
        200: "#E0C6EB",
        300: "#CDA4E0",
        400: "#B476D0",
        500: "#783498",
        600: "#6C2F89",
        700: "#5D2876",
        800: "#481F5B",
        900: "#391948",
        950: "#271131"
      },

      'secondary': {
        '50': '#f2f9f9',
        '100': '#ddeff0',
        '200': '#bfe0e2',
        '300': '#92cace',
        '400': '#5faab1',
        '500': '#438e96',
        '600': '#3b757f',
        '700': '#356169',
        '800': '#325158',
        '900': '#2d464c',
        '950': '#1a2c32',
    },


  
      

      },

    extend: {},
  },
  plugins: [],
}