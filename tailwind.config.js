/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        400: "400px",
        "1/1": "100%",
        17: "70px",
        79: "310",
      },
      colors: {
        baseRed: "#f02d34",
      },
    },
  },
  plugins: [],
};
