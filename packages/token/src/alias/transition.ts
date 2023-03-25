import {
  Transition,
  TransitionDuration,
  TransitionProperty,
  TransitionTimingFunction,
} from '../types';

const SEPARATOR = ', ';

// prettier-ignore
const transitionProperty: TransitionProperty = {
  common:         ['background-color', 'border-color', 'color', 'fill', 'stroke', 'opacity', 'box-shadow', 'transform'].join(SEPARATOR),
  colors:         ['background-color', 'border-color', 'color', 'fill', 'stroke'].join(SEPARATOR),
  dimensions:     ['width', 'height'].join(SEPARATOR),
  position:       ['left', 'right', 'top', 'bottom'].join(SEPARATOR),
  background:     ['background-color', 'background-image', 'background-position'].join(SEPARATOR),
};

// prettier-ignore
const transitionDuration: TransitionDuration = {
  'ultra-fast':   '50ms',
  faster:         '100ms',
  fast:           '150ms',
  normal:         '200ms',
  slow:           '300ms',
  slower:         '400ms',
  'ultra-slow':   '500ms',
};

// prettier-ignore
const transitionTimingFunction: TransitionTimingFunction = {
  'ease-in':      'cubic-bezier(0.4, 0, 1,   1)',
  'ease-out':     'cubic-bezier(0,   0, 0.2, 1)',
  'ease-in-out':  'cubic-bezier(0.4, 0, 0.2, 1)',
};

// prettier-ignore
export const transition: Transition = {
  property:       transitionProperty,
  duration:       transitionDuration,
  easing:         transitionTimingFunction,
};
