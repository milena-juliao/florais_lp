import type { Config } from "tailwindcss";

export default {
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
        brownEarth: "#D7CCC8",
        white: "#FFFFFF"
      },
    },
  },
  plugins: [],
} satisfies Config;
