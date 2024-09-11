/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'TweetBtn':'#1C9BF1',
        'Bg1': '#000000',
        'Bg2': '#202327'
      }
    },
  },
  plugins: [],
}