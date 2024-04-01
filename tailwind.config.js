/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50':'#fe7867',
          '100': '#fad400',
          '200': '#25564b',
          '300': '#19536b',
          '400': '#458c7e',
          '500': '#91d4c4',
        },
        secundary: {
          '50':  '#23303e',
          '100': '#5a636c',
          '200': '#818498',
          '300': '#a7abae',
          '400': '#ffffff',
        },
   
      },
      fontFamily: {
        bd: ['Barlow' , 'sans-serif'],
        title: ['Fraunces']
     }
    },
  },
  plugins: [],
}

