/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {customDark: '#030712'},
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
}