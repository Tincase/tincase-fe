import { isArray } from '@tincase/utils';

import * as S from './NavBar.styles';
import { NavBarProps } from './NavBar.types';

export const NavBar = ({ logo, navMenu, rightMenu }: NavBarProps) => {
  return (
    <S.Nav>
      <LogoSection logo={logo} />
      <NavMenuSection navMenu={navMenu} />
      <RightMenuSection rightMenu={rightMenu} />
    </S.Nav>
  );
};

/* Child-Components */

const LogoSection = ({ logo }: Pick<NavBarProps, 'logo'>) => {
  if (!logo) return <></>;

  return <S.LogoSection>{logo}</S.LogoSection>;
};

const NavMenuSection = ({ navMenu }: Pick<NavBarProps, 'navMenu'>) => {
  if (!navMenu) return <></>;

  return (
    <S.NavMenuSection>
      {isArray(navMenu) && <S.NavMenu>{navMenu}</S.NavMenu>}
    </S.NavMenuSection>
  );
};

const RightMenuSection = ({ rightMenu }: Pick<NavBarProps, 'rightMenu'>) => {
  if (!rightMenu) return <></>;

  return <S.RightMenuSection>{rightMenu}</S.RightMenuSection>;
};
