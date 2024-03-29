import styled from '@emotion/styled';

const token = {
  paddingHorizontal: 40,
  gap: 16,
  sideSection: {
    width: 200,
  },
} as const;

/* ----------------------------------------
 * Layouts
 * ----------------------------------------*/

// prettier-ignore
export const Nav = styled.nav`
  max-width:  ${({ theme }) => theme.breakpoint.desktop};
  height:     ${({ theme }) => theme.size[64]};
  box-sizing: border-box;
  
  padding:    0 ${({ theme }) => theme.spacing[token.paddingHorizontal]};

  display:    flex;
  gap:        ${({ theme }) => theme.spacing[token.gap]};

  & > section {
    display:        flex;
    align-items:    center;

    &:not(:nth-child(2)) {
      width:  ${({ theme }) => theme.size[token.sideSection.width]};
    }
  }
`;

export const LogoSection = styled.section``;
export const NavMenuSection = styled.section`
  flex: 1;
  justify-content: center;
`;
export const RightMenuSection = styled.section`
  gap: ${({ theme }) => theme.spacing[8]};
  justify-content: flex-end;
`;

/* ----------------------------------------
 * Styled-Components
 * ----------------------------------------*/

// prettier-ignore
export const NavMenu = styled.ul`
  all:      unset;

  display:  flex;
  justify-content: center;
  gap:      ${({ theme }) => theme.spacing[8]};
`;
export const NavItem = styled.li`
  all: unset;
`;
