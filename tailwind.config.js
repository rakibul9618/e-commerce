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
        "17p": "17%",
        "90p": "90%",
      },
      colors: {
        bl: "#dfecfa",
        pp: "#c5c0e5",
        prod: "#84adea",
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
        "-100": "-100rem",
        "20p": "20%",
        "61p": "61.5%",
        "64p": "64.5%",
        "70p": "70%",
        "83p": "83%",
        "87p": "87%",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
