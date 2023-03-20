import { ThemeProvider } from '@emotion/react';
import { tokenCssReferences } from '@tincase/token';

import { TinCaseProviderProps } from './types';

import { GlobalStyles } from './GlobalStyles';

export const TinCaseProvider = ({ children }: TinCaseProviderProps) => {
  return (
    <ThemeProvider theme={tokenCssReferences}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
