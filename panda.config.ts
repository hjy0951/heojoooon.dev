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

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

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
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "1.2",
          },
        },
        "prose.h2": {
          value: {
            fontSize: "32px",
            fontWeight: "800",
            lineHeight: "1.2",
          },
        },
        "prose.h3": {
          value: {
            fontSize: "26px",
            fontWeight: "800",
            lineHeight: "1.3",
          },
        },
        "prose.h4": {
          value: {
            fontSize: "20px",
            fontWeight: "800",
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

      semanticTokens: {
        colors: {
          callout: {
            bg: {
              undefined: { value: "#9F9F9F" },
              warn: { value: { base: "#FFC0B1", _dark: "#F24822" } },
              check: { value: { base: "#9BDAB9", _dark: "#14AE5C" } },
              light: { value: { base: "#FFF0BE", _dark: "#ddaa11" } },
            },
            icon: {
              undefined: { value: "#9F9F9F" },
              warn: { value: { base: "#F24822", _dark: "#FFC0B1" } },
              check: { value: { base: "#14AE5C", _dark: "#9BDAB9" } },
              light: { value: { base: "#FFCD29", _dark: "#FFF0BE" } },
            },
          },
          background: {
            primary: { value: { base: "#fdfdfd", _dark: "#121212" } },
            reverse: { value: { base: "#303030", _dark: "#fdfdfd" } },
            blockquote: { value: { base: "#1C212B", _dark: "#D6E4FF" } },
            divider: { value: "#000000" },
            code: { value: { base: "#dedede", _dark: "#292927" } },
            customLink: {
              primary: { value: "#ff6a00" },
              secondary: { value: "#303030" },
            },
            badge: { value: { base: "#303030", _dark: "#D6E4FF" } },
            sns: { value: { base: "#e0e0e0", _dark: "#70707080" } },
          },
          border: {
            blockquote: { value: { base: "#194D7C", _dark: "#5B8DF6" } },
            header: {
              value: {
                base: "rgba(0, 0, 0, 0.1)",
                _dark: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
          prose: {
            text: { value: { base: "#202125", _dark: "#fdfdfd" } },
            secondary: { value: { base: "#585858", _dark: "#a5a5a5" } },
            border: { value: "#c0c0c0" },
            highlight: { value: "#c8c8ff1a" },
            normal: { value: { base: "#000000", _dark: "#fdfdfd" } },
            reverse: { value: { base: "#fdfdfd", _dark: "#000000" } },
            code: { value: "#de645b" },
            customLink: {
              primary: { value: "#ff6a00" },
              secondary: { value: { base: "#303030", _dark: "#dedede" } },
            },
            caption: { value: { base: "#868686" } },
            title: { value: { base: "#121212", _dark: "#F1F1F1" } },
            description: { value: { base: "#4B4B4B", _dark: "#a5a5a5" } },
            lineNumber: { value: "gray" },
            toc: {
              title: { value: { base: "#404040", _dark: "#ededed" } },
              inactive: { value: { base: "#606060", _dark: "#b0b0b0" } },
              active: { value: { base: "#DE645B" } },
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
