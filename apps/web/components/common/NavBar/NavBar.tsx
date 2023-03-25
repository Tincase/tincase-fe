import { Button, NavBar as TinCaseNavBar } from '@tincase/ui';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { NavLinkButtonProps } from './NavBar.types';

export const NavBar = () => {
  const { t } = useTranslation('common');

  return (
    <TinCaseNavBar
      logo={<Link href="/">Logo</Link>}
      navMenu={[
        {
          path: '/',
          label: t('navBar.home'),
        },
        {
          path: '/deck',
          label: t('navBar.deck'),
        },
        {
          path: '/card-maker',
          label: t('navBar.card-maker'),
        },
        {
          path: '/my-page',
          label: t('navBar.my-page'),
        },
      ].map(NavLinkButton)}
      rightMenu={
        <>
          <Button variant="outline">{t('navBar.login')}</Button>
          <Button>{t('navBar.join')}</Button>
        </>
      }
    />
  );
};

/* Sub-Components */

function NavLinkButton({ path, label }: NavLinkButtonProps) {
  return (
    <Link key={path} href={path}>
      <Button variant="text">{label}</Button>
    </Link>
  );
}
