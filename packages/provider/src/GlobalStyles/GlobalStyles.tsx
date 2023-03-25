import { Global } from '@emotion/react';

export const GlobalStyles = () => {
  return <Global styles={(theme) => theme.style.global} />;
};
