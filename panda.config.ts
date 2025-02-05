import { keyframes } from "@/styles/keyframes";
import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    w: "full",
    h: "full",
  },
});

export default defineConfig({
  globalCss,

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "760px",
        md: "1024px",
      },
      keyframes,
    },
  },

  // The output directory for your css system
  outdir: "./styled-system",
});
