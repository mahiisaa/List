/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgColor: "#edeff1",
      primary: "#2B58C4",
      primaryDark: "#1e3d7d",
      secondColor: "#ffb703",
      myblack: "#0d0d0f",
      mygray: "#dfe0e5",
    },
    fontSize: {
      xs: ["12px", "20.73px"],
      sm: ["14px", "24.18px"],
      base: ["16px", "27.64px"],
      xl: ["20px", "34.55px"],
    },
    fontFamily: {
      yekan: ["Yekan"],
    },
    extend: {
      spacing: {
        "2XL": "50px",
        XL: "40px",
        L: "32px",
        M: "24px",
        S: "16px",
        XS: "8px",
        XXS: "4px",
      },
    },
  },
  plugins: [],
};

