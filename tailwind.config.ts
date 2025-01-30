import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenLight: "#D5F5E3",
        purpleLavender: "#E8DAEF",
        blueCalm: "#D4E6F1",
        beige: "#F9E4D7",
        brownEarth: "#a68f71",
        brownEarthStrong: "#5c4736",
        greenOlive: "#556b2f",
        white: "#FFFFFF"
      },
      padding:{
        'standard-lg': '5rem',
        'standard-mobile': '1rem',
      },
      margin:{
        'standard-title': '2rem',
      },
      fontSize:{
        'standard-title-lg': '2rem',
        'standard-title-mobile': '1.5rem',
        'standard-p-lg': '1rem',
        'standard-p-mobile': '.88rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
