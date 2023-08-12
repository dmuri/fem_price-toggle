import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "980px",
      },
      colors: {
        // Primary colors
        "primary-gradient-start": "hsl(236, 69%, 74%)",
        "primary-gradient-end": "hsl(239, 59%, 69%)",

        // Neutral colors
        "very-light-grayish-blue": "hsl(240, 78%, 98%)",
        "light-grayish-blue": "hsl(234, 14%, 74%)",
        "grayish-blue": "hsl(233, 13%, 49%)",
        "dark-grayish-blue": "hsl(232, 13%, 33%)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
      },
    },
  },
  plugins: [],
};
export default config;
