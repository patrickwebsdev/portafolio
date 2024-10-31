/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/flowbite/**/*.js'],
	theme: {
    colors: {
      'background': {
        1: '#131313',
        2: 'linear-gradient(0deg, rgba(22,22,23,1) 23%, rgba(42,57,94,1) 73%, rgba(22,22,23,1) 100%)',
        3: '#16161730',
        4: '#16161750',
        5: '#c4a7e70d',
				6: 'rgba(22,22,23,1)'
      },
			'image': 'linear-gradient(0deg, rgba(22,22,23,1) 23%, rgba(42,57,94,1) 73%, rgba(22,22,23,1) 100%)',
      'primary': {
        1: '#00DDFF',
        2: '#00AAFF',
        3: '#00AAFF30',
        4: '#00AAFF50',
        5: '#00AAFF10',
        6: '#00AAFF20',
        7: '#00AAFF95',
      },
			...colors
    },
		extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(0deg, rgb(22 22 23) 25%, rgb(0 47 86) 75%, rgba(22, 22, 23, 1) 100%)',
      },
    },
	},
	plugins: [
    require('flowbite/plugin')
  ],
}