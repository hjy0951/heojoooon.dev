import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
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
});
