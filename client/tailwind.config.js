import { screens as _screens } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"];
export const theme = {
  screens: {
    xs: { min: "430px", max: "639px" },
    ..._screens,
  },
  extend: {},
};
export const plugins = [require("daisyui")];
