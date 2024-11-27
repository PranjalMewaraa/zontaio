/* eslint-disable */

import plugin from "tailwindcss/plugin";
import { indigo, sky, teal, amber, rose } from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

import svgToDataUri from "mini-svg-data-uri";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/layouts/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./themes/**/**/*.{js,ts,jsx,tsx,html}",
];
export const darkMode = "class";
export const theme = {
  extend: {
    container: {
      center: true,
    },
    fontSize: {
      xs: "0.6rem",
      sm: "0.7rem",
      md: "0.75rem",
      base: "0.8rem",
      lg: "0.9rem",
      xl: "1rem",
      "2xl": "1.2rem",
      "3xl": "1.4rem",
      "4xl": "1.6rem",
      "5xl": "1.8rem",
      "6xl": "2rem",
      "7xl": "2.2rem",
      "8xl": "2.4rem",
      "9xl": "2.6rem",
      "10xl": "2.8rem",
    },
    spacing: {
      sm: "6.4px",
      md: "9.6px",
      lg: "12px",
      xl: "16px",
      px: "0.75px",
      0.5: "0.1rem",
      1: "0.2rem",
      1.5: "0.3rem",
      2: "0.4rem",
      2.5: "0.5rem",
      3: "0.6rem",
      3.5: "0.7rem",
      4: "0.8rem",
      5: "1rem",
      6: "1.2rem",
      7: "1.4rem",
      8: "1.6rem",
      9: "1.8rem",
      10: "2rem",
      11: "2.2rem",
      12: "2.4rem",
      14: "2.8rem",
      16: "3.2rem",
      20: "4rem",
      24: "4.8rem",
      28: "5.6rem",
      32: "6.4rem",
      36: "7.2rem",
      40: "8rem",
      44: "8.8rem",
      48: "9.6rem",
      52: "10.4rem",
      56: "11.2rem",
      60: "12rem",
      64: "12.8rem",
      72: "14.4rem",
      80: "16rem",
      96: "19.2rem",
    },
    screens: {
      xss: { max: "280px" },
      xs: { min: "280px", max: "479px" },
      sm: "480px",
      md: "768px",
      mdp: { raw: "(min-width: 768px) and (orientation: portrait)" },
      mdl: { raw: "(min-width: 768px) and (orientation: landscape)" },
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      ptablet: {
        raw: "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)",
      },
      ltablet: {
        raw: "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)",
      },
      smdp: { raw: "(min-width: 640px) and (orientation: portrait)" },
      smdl: { raw: "(min-width: 640px) and (orientation: landscape)" },
      hdpi: {
        raw: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
    colors: {
      muted: {
        50: "#f9f9fa",
        100: "#f3f3f4",
        150: "#ededee",
        200: "#dfdfe1",
        300: "#cfcfd3",
        400: "#9e9ea7",
        500: "#6e6e76",
        600: "#4b4b55",
        700: "#3f3f46",
        800: "#27272a",
        850: "#252529",
        900: "#1c1c1f",
        950: "#141416",
        1000: "#0b0b0d",
      },
      primary: indigo,
      info: sky,
      success: teal,
      warning: amber,
      danger: rose,
    },
    typography: (theme: (arg0: string) => any) => ({
      DEFAULT: {
        css: {
          maxWidth: "inherit",
          lineHeight: theme("lineHeight.snug"),
          h1: {
            color: theme("colors.zinc.800"),
            marginTop: theme("margin.8"),
            marginBottom: theme("margin.6"),
          },
          h2: {
            color: theme("colors.zinc.800"),
            marginTop: theme("margin.8"),
            marginBottom: theme("margin.6"),
          },
        },
      },
      dark: {
        css: {
          color: theme("colors.zinc.200"),
          strong: { color: theme("colors.zinc.100") },
          h1: { color: theme("colors.zinc.100") },
        },
      },
    }),
    gridTemplateColumns: {
      fluid:
        "repeat(auto-fit, minmax(var(--tw-fluid-col-min, 20rem), var(--tw-fluid-col-max, 1fr)))",
    },
    keyframes: {
      wave: {
        "0%": { transform: "scale(1)", opacity: "1" },
        "100%": { transform: "scale(4.5)", opacity: "0" },
      },
    },
    animation: {
      wave: "wave 1s infinite",
    },
  },
};
export const plugins = [
  plugin(function ({ addUtilities, e }) {
    addUtilities({
      ".custom-utility": {
        backgroundColor: "blue",
      },
    });
  }),
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "bg-grid": (value: string) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value: string) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value: string) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  }),
];
