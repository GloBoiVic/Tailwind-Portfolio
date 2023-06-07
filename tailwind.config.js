/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    colors: {
      primary: "#0d2240",
      offblue: "#A9A9AF",
      accent: " #f7a800",
      info: "#00a8e1",
      white: "#fbfbf8",
      gray: "#F8F8F8",
      html: "#f76336",
    },
  },
  plugins: [],
};
