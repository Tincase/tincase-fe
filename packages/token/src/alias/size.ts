import { Size } from "../types";

import { radius } from "./radius";
import { spacing } from "./spacing";

// prettier-ignore
export const size: Size = {
  ...spacing,

  sm: {
    minWidth:   spacing[64],
    height:     spacing[32],
    paddingX:   spacing[12],
    radius:     radius.sm,
  },

  md: {
    minWidth:   spacing[64],
    height:     spacing[40],
    paddingX:   spacing[16],
    radius:     radius.md,
  },

  lg: {
    minWidth:   spacing[64],
    height:     spacing[48],
    paddingX:   spacing[24],
    radius:     radius.lg,
  },

  min:          "min-content",
  max:          "max-content",
  full:         "100%",
} as const;
