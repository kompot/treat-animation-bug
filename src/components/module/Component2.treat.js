import { style } from 'treat';

export const container = style({
  "@keyframes": {
    from: {
      strokeDashoffset: 125,
    },
    to: {
      strokeDashoffset: 20,
    },
  },

  animationName: "@keyframes",
  animationDuration: "6s",
  animationTimingFunction: "linear",
  animationFillMode: "forwards",
  animationIterationCount: "infinite",
});
