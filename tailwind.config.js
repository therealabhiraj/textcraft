/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
    ,

    flowbite.content()

  ],
  theme: {
    extend: {
      colors: {
        cgray: '#131718', // You can name it anything you like
        lgray:'#222627'
      },
    },
  },
  plugins: [flowbite.plugin()],
}

