import type { TinCaseProviderProps } from './types';

import { ThemeProvider } from '@emotion/react';
import { token } from '@tincase/token';

import { GlobalStyles } from './GlobalStyles';

export const TinCaseProvider = ({ global, children }: TinCaseProviderProps) => {
  return (
    <ThemeProvider theme={token}>
      <GlobalStyles customGlobalStyle={global} />
      {children}
    </ThemeProvider>
  );
};
