import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greyy : '#00000099',
        RED : "#FF3333",
        BORDER: "#0000001A"
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        integral: ['Integral CF', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
