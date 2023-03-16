/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'titles': ["Abolition Test"]
    },
    extend: {
      backgroundImage: {
        'backgroundimage': "url('/public/cool-background.svg')"
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui")
  ],
};
