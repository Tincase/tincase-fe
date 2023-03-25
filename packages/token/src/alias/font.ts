/*
 * This code is based on the `typography.ts` from `chakra-ui`.
 * See https://github.com/chakra-ui/chakra-ui for more information.
 * Licensed under the MIT License.
 */

import { primitive } from '../primitive';
import { Font } from '../types';

// prettier-ignore
export const font: Font = {
  fontFamily: {
    heading: `"Noto Sans KR", Pretendard, serif`,
    body: `"Noto Sans KR", Pretendard, serif`
  },

  fontSize: {
    xs:       primitive.size[12],
    sm:       primitive.size[14],
    md:       primitive.size[16],
    lg:       primitive.size[18],
    xl:       primitive.size[24],
    "2xl":    primitive.size[28],
    "3xl":    primitive.size[36],
  },

  fontWeight: {
    light:    300,
    regular:  400,
    medium:   500,
    bold:     700,
  },

  lineHeight: {
    none:     1,
    short:    1.4,
    default:  1.5,
    large:    1.7,
  },

  letterSpacing: {
    tighter:  "-0.05em",
    tight:    "-0.025em",
    normal:    "0",
    wide:      "0.025em",
    wider:     "0.05em",
    widest:    "0.1em",
  }
} as const;
