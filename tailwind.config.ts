import type { Config } from "tailwindcss";

const config: Config = {
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
        header: "#3C3C3B",
        "netzet-green": "#03C100",
        "clock-yellow": "#FBBA00",
        "clock-black": "#2F2F2F",
        "card-yellow": "#FFF8EA",
        electric: "#68C7CD",
        blood: "#EA4335",
        ginger: "#F5773D",
        light: "#FFFCF5",
        "light-gray": "#8D8D8D",
        "dark-electric": "#0EA8B3",
      },
    },
  },
  plugins: [],
};
export default config;
