import styled from '@emotion/styled';
import { useTheme } from '@tincase/provider';
import { Stack } from '@tincase/ui';

import { NavBar } from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();

  return (
    <Stack
      direction="column"
      style={{
        minHeight: '100%',
        flex: 1,
        margin: 'auto',
        maxWidth: theme.breakpoint.desktop,
      }}
    >
      <header>
        <NavBar />
      </header>
      <Main>{children}</Main>
    </Stack>
  );
};

/* Styled-Components */

const Main = styled.main`
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
`;
