/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'titles': ["Abolition Test"],
      'sourcecode': ["Source Code Pro ExtraLight"],
    },
    extend: {
      animation: {
        "typewriter": "typewriter 3.5s steps(23) forwards",
        "blink": "blink 500ms steps(23) forwards infinite"
      },
      keyframes:{
        typewriter: {
          to: { left: '100%' },
        },
        blink: {
          to: { backgroundColor: "transparent" },
        },
      },
      backgroundImage: {
        'backgroundimage': "url('/public/cool-background.svg')"
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
