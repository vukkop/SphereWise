import { screens as _screens } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"];
export const theme = {
  screens: {
    xs: { min: "430px", max: "639px" },
    ..._screens,
  },
  extend: {
    keyframes: {
      slideLeft: {
        "0%": { marginLeft: "100%" },
        "100%": { marginLeft: "0" },
      },
      slideRight: {
        "0%": { marginLeft: "-100%" },
        "100%": { marginLeft: "0" },
      },
    },
    animation: {
      slideLeft: "slideLeft 1000ms ease-in-out",
      slideRight: "slideRight 1000ms ease-in-out",
    },
  },
};
export const plugins = [require("daisyui")];
