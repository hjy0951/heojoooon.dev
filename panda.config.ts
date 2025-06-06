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
      keyframes,

      breakpoints: {
        xs: "660px",
        sm: "760px",
        md: "1024px",
        lg: "1400px",
      },

      textStyles: {
        "prose.h1": {
          value: {
            fontSize: "36px",
            fontWeight: "800",
            lineHeight: "1.2",
          },
        },
        "prose.h2": {
          value: {
            fontSize: "28px",
            fontWeight: "800",
            lineHeight: "1.3",
          },
        },
        "prose.h3": {
          value: {
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "1.4",
          },
        },
        "prose.p": {
          value: {
            fontSize: "16px",
            lineHeight: "1.8",
          },
        },
      },

      tokens: {
        colors: {
          callout: {
            undefined: { value: "#9F9F9F" },
            warn: { value: "#FFC0B1" },
            check: { value: "#9BDAB9" },
            light: { value: "#FFF0BE" },
          },
          background: {
            primary: { value: "#fdfdfd" },
            blockquote: { value: "#1C212B" },
            divider: { value: "#000000" },
            header: { value: "#fdfdfd" },
            code: { value: "#dedede" },
            customLink: {
              primary: { value: "#ff6a00" },
              secondary: { value: "#303030" },
            },
            badge: { value: "#303030" },
          },
          border: {
            blockquote: { value: "#194D7C" },
          },
          prose: {
            text: { value: "#202125" },
            secondary: { value: "#585858" },
            border: { value: "#c0c0c0" },
            highlight: { value: "#c8c8ff1a" },
            normal: { value: "#000000" },
            reverse: { value: "#fdfdfd" },
            code: { value: "#de645b" },
            customLink: {
              primary: { value: "#ff6a00" },
              secondary: { value: "#303030" },
            },
            caption: { value: "#868686" },
            description: { value: "#4B4B4B" },
            lineNumber: { value: "gray" },
            toc: {
              title: { value: "#404040" },
              inactive: { value: "#606060" },
              active: { value: "#DE645B" },
            },
          },
        },
        spacing: {
          prose: {
            heading: { value: "52px" },
            block: { value: "20px" },
            text: { value: "16px" },
            small: { value: "8px" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "./styled-system",
});
