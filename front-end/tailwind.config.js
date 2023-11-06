/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xxl: "5px 10px 8px #888888",
      },
      fontSize: {
        sm: "30px",
        xl: "35px",
      },
      colors: {
        accent: "#A18A68",
        light_gray: "#707070",
        grays: "#D8D8D8",
        layer: "rgba(245, 239, 239, 0.9)",
        gray_light: "#efefef",
      },
    },
  },
  plugins: [],
};
