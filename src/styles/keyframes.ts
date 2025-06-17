import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  bounce: {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-6px)",
    },
  },

  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },

  flickerEffect: {
    "0%": {
      opacity: 1,
    },
    "25%": {
      opacity: 0.3,
    },
    "40%": {
      opacity: 0.9,
    },
    "50%": {
      opacity: 0.4,
    },
    "55%": {
      opacity: 0.8,
    },
    "65%": {
      opacity: 0.2,
    },
    "80%": {
      opacity: 0.8,
    },
    "100%": {
      opacity: 0.3,
    },
  },
  bounceRight: {
    "0%": {
      transform: "translateX(0)",
    },
    "30%": {
      transform: "translateX(8px)",
    },
    "50%": {
      transform: "translateX(4px)",
    },
    "70%": {
      transform: "translateX(8px)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },

  slideInFromRight: {
    "0%": { transform: "translateX(20px)", opacity: "0" },
    "100%": { transform: "translateX(0)", opacity: "1" },
  },

  slideInFromLeft: {
    "0%": { transform: "translateX(-20px)", opacity: "0" },
    "100%": { transform: "translateX(0)", opacity: "1" },
  },

  slideInFromTop: {
    "0%": { transform: "translateY(-8px)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" },
  },

  slideUp: {
    "0%": {
      transform: "translateY(0)",
      opacity: "0",
    },
    "100%": {
      transform: "translateY(-24px)",
      opacity: "1",
    },
  },
});
