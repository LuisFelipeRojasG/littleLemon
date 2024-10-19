/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", "./public/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Karla': ["karla", "sans-serif"],
      'Markazy': ["Markazi Text", "serif"]
    },
    colors: {
      'greenlim': '#495E57',
      'yellowlim': '#F4CE14',
      'whitelim': '#EDEFEE',
      'blacklim': '#333333',
      'graylim': '#f2efef'
    }
  },
  plugins: [],
}

