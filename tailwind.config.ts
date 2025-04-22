import type { Config } from "tailwindcss";

const config = { // Removed : Config type annotation
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        golden: "#F6C583",
        skyBlue: "#B8C8D9",
        beige: "#E8D9C5",
        roseGold: "#D9BDAD",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Pretendard", "sans-serif"],
        myeongjo: ["Nanum Myeongjo", "serif"],
      },
    },
  },
  plugins: [],
  safelist: [ // Safelist 추가
    'bg-gradient-to-b',
    'from-white',
    'via-beige',
    'to-golden/30',
    'from-skyBlue',
    'to-golden',
    'from-roseGold/30',
    'to-skyBlue/30',
    'from-golden/50',
    'to-roseGold/30', // from-golden/50 과 함께 사용됨
    'from-skyBlue/50',
    'to-purple-400/30',
    'from-golden/60',
    'to-purple-500/40',
    'to-golden/20',
  ],
} as any; // Added 'as any' type assertion
export default config;