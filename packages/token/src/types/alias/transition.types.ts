// prettier-ignore
export type TransitionProperty = {
  common:         string;
  colors:         string;
  dimensions:     string;
  position:       string;
  background:     string;
};

// prettier-ignore
export type TransitionDuration = {
  'ultra-fast':   string;
  faster:         string;
  fast:           string;
  normal:         string;
  slow:           string;
  slower:         string;
  'ultra-slow':   string;
};

// prettier-ignore
export type TransitionTimingFunction = {
  'ease-in':      string;
  'ease-out':     string;
  'ease-in-out':  string;
};

// prettier-ignore
export type Transition = {
  property:       TransitionProperty;
  duration:       TransitionDuration;
  easing:         TransitionTimingFunction;
};
