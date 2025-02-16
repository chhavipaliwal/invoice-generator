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
            default: {
              50: "#fdfbf9",
              100: "#fbf5f1",
              200: "#f9f0e9",
              300: "#f7eae1",
              400: "#f4e5d9",
              500: "#f2dfd1",
              600: "#c8b8ac",
              700: "#9d9188",
              800: "#736a63",
              900: "#49433f",
              foreground: "#000",
              DEFAULT: "#f2dfd1",
            },
            primary: {
              50: "#f1e9df",
              100: "#ddcab3",
              200: "#c9ab86",
              300: "#b58d59",
              400: "#a16e2d",
              500: "#8d4f00",
              600: "#744100",
              700: "#5c3300",
              800: "#432600",
              900: "#2a1800",
              foreground: "#fff",
              DEFAULT: "#8d4f00",
            },
            background: "#FFFBFF",
            divider: "#F2DFD1",
          },
        },
        dark: {
          colors: {
            default: {
              50: "#181411",
              100: "#26201c",
              200: "#352c26",
              300: "#433730",
              400: "#51433a",
              500: "#6f645c",
              600: "#8e857f",
              700: "#aca6a1",
              800: "#cbc7c4",
              900: "#e9e8e6",
              foreground: "#fff",
              DEFAULT: "#51433a",
            },
            primary: {
              50: "#4d3723",
              100: "#795737",
              200: "#a6784b",
              300: "#d29860",
              400: "#ffb874",
              500: "#ffc48c",
              600: "#ffd1a5",
              700: "#ffddbd",
              800: "#ffead5",
              900: "#fff6ee",
              foreground: "#201B16",
              DEFAULT: "#ffb874",
            },
            background: "#201B16",
            divider: "#F2DFD1",
          },
        },
      },
    }),
  ],
};
