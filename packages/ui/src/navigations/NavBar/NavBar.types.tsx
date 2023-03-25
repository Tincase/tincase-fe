// prettier-ignore
export interface NavBarProps {
  logo:       React.ReactNode;
  navMenu:    NavMenu;
  rightMenu:  React.ReactNode;
}

export type NavMenu = NavMenuItem[];

export type NavMenuItem = React.ReactNode;
