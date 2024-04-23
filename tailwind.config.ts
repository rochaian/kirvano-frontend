import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        b600: '#3182CE',
        c300: '#E2E8F0',
        c600: '#718096',
        v500: '#38B2AC', //verde
        c700: '#4A5568',
        b800: '#2D3748',
        light: '#f8fafc',  // Cor personalizada clara
        DEFAULT: '#000000', // Cor padrão
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        'custom': '0px 4px 4px 0px #00000040', // Sombra personalizada
      },
    },
  },
  plugins: [],
};
export default config;
