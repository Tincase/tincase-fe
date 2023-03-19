/*
 * This code is based on the `z-index.ts` from `chakra-ui`.
 * See https://github.com/chakra-ui/chakra-ui for more information.
 * Licensed under the MIT License.
 */

import { ZIndex } from "../types";

// prettier-ignore
export const zIndex: ZIndex = {
  auto:        "auto",
  hide:            -1,
  background:       0,
  dropdown:       100,
  sticky:         110,
  banner:         120,
  overlay:        130,
  modal:          140,
  popover:        150,
  skipLink:       160,
  toast:          170,
  tooltip:        180,
} as const;
