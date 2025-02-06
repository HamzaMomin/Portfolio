/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'card': '#69D2E7',
        'dark-card': '#006174',
      },
      screens: {
        'sm-max': { 'max': '767px' },  // max 767px
        'md-range': { 'min': '768px', 'max': '1024px' }, // 768px to 1024px
        'lg-range': { 'min': '1024px', 'max': '1440px' }, // 1024px to 1440px
        'xl-min': { 'min': '1441px' }, // Above 1440px
        '2xl' : {'min':'1920px'}
      },
    },
    
  },
  plugins: [
   
  ],
}