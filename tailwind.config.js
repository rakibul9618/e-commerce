module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        70: "17.5rem",
      },
      height: {
        92: "23rem",
      },
      colors: {
        bl: "#dfecfa",
        pp: "#c5c0e5",
      },
      borderWidth: {
        12: "12px",
      },
      screens: {
        xs: "460px",
      },
      inset: {
        "-22": "-5.5rem",
        "-18": "-4.375rem",
        "20p": "20%",
        "61p": "61.5%",
        "64p": "64.5%",
        "70p": "70%",
        "72p": "72.5%",
        "78p": "78%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
