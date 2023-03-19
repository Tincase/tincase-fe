import { ThemeProvider } from "@emotion/react";

import { TinCaseProviderProps } from "./types";

import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

export const TinCaseProvider = ({ children }: TinCaseProviderProps) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
