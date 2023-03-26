import type { GlobalStylesProps } from './GlobalStyles.types';

import { Global } from '@emotion/react';

export const GlobalStyles = ({ customGlobalStyle }: GlobalStylesProps) => {
  return <Global styles={(theme) => theme.style.global(customGlobalStyle)} />;
};
