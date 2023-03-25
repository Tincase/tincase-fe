import styled from '@emotion/styled';
import { useTheme } from '@tincase/provider';
import { Token } from '@tincase/token';

import { NavBar } from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();

  return (
    <Wrapper maxWidth={theme.breakpoint.desktop}>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ maxWidth: Token['breakpoint']['desktop'] }>`
  width: ${({ maxWidth }) => maxWidth};
  margin: auto;
`;
