import { ThemeProvider } from '@emotion/react';
import { token } from '@tincase/token';

import { TinCaseProviderProps } from './types';

import { GlobalStyles } from './GlobalStyles';

export const TinCaseProvider = ({ children }: TinCaseProviderProps) => {
  return (
    <ThemeProvider theme={token}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
