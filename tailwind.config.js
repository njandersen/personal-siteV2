/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4C1D8F",
          200: "#3D1773",
          300: "#2F1259",
        },
        secondary: {
          100: "#4885FF",
          200: "#447EF2",
          300: "#3664BF",
        },
        accent: {
          100: "#05FFE7",
          200: "#05F2DB",
          300: "#04BFAD",
        },
        darkneutral: "#1E1827",
      },
    },
  },
  plugins: [],
};
