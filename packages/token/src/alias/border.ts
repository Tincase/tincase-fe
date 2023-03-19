/*
 * This code is based on the `borders.ts` from `chakra-ui`.
 * See https://github.com/chakra-ui/chakra-ui for more information.
 * Licensed under the MIT License.
 */

import { primitive } from "../primitive";
import { Border } from "../types";

export const border: Border = {
  none: 0,
  level1: `${primitive.size[1]} solid`,
  level2: `${primitive.size[2]} solid`,
  level3: `${primitive.size[4]} solid`,
  level4: `${primitive.size[8]} solid`,
} as const;
