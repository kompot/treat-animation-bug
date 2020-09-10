import { style } from 'treat';

export const container = style({
  "@keyframes": {
    from: {
      strokeDashoffset: 125,
      opacity: 1,
    },
    to: {
      strokeDashoffset: 20,
      opacity: 1,
    },
  },

  animationName: "@keyframes",
  animationDuration: "6s",
  animationTimingFunction: "linear",
  animationFillMode: "forwards",
  animationIterationCount: "infinite",
});
