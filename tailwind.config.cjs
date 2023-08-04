/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/flowbite/**/*.js'],
	theme: {
    colors: {
      'background': {
        1: '#131313',
        2: '#161617',
        3: '#16161730',
        4: '#16161750',
        5: '#c4a7e70d'
      },
      'primary': {
        1: '#00DDFF',
        2: '#00AAFF',
        3: '#00AAFF30',
        4: '#00AAFF50',
        5: '#00AAFF10',
        6: '#00AAFF20',
        7: '#00AAFF95',
      }
    },
		extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
	},
	plugins: [
    require('flowbite/plugin')
  ],
}