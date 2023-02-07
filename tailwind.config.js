/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,
  prefix: "tw-",
  container: {
    center: true,
    padding: "1rem",
  },
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: { max: "576px" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xxs: "0.625rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        bgMainColor: "#ececec",
        colorInput: "#40414a",
      },
    },
  },
  plugins: [],
};
