/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },

      xsm: { max: "339px" },
    },

    colors: {
      primary: "#0d1117",
      dark: "#111827",
      light: "#d0dfff",
      secondary: "#242c38",
      ternary: "#9cb6dd",
      red: "#EF3B36",
      blue: "#636FA4",
      skin: "#E8CBC0",
      lightBlue: "#3494E6",
      pink: "#EC6EAD",
      textMain: "#d0dfff",
      textSecondary: "#6b7280",
      white: "#ffffff",
      black: "#000000",
      carrot: "#f7797d",
      gold: "#FBD786",
      aqua: "#C6FFDD",
      snow: "#F4F1F1",
      cobalt: "#E5E5FF",
    },

    extend: {},
  },
  plugins: [],
};