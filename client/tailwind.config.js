const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#f8efe6",
              100: "#edd8c2",
              200: "#e3c19f",
              300: "#d8ab7c",
              400: "#ce9458",
              500: "#c37d35",
              600: "#a1672c",
              700: "#7f5122",
              800: "#5d3b19",
              900: "#3b2610",
              foreground: "#000",
              DEFAULT: "#c37d35",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: "#f8efe6",
              100: "#edd8c2",
              200: "#e3c19f",
              300: "#d8ab7c",
              400: "#ce9458",
              500: "#c37d35",
              600: "#a1672c",
              700: "#7f5122",
              800: "#5d3b19",
              900: "#3b2610",
              foreground: "#000",
              DEFAULT: "#c37d35",
            },
            background: "#505052",
          },
        },
      },
    }),
  ],
};
