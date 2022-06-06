module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255, 70, 66)",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
  ],
};
