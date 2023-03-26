import type { CustomGlobalStyle } from '@tincase/token';

export interface TinCaseProviderProps {
  global?: CustomGlobalStyle;
  children: React.ReactNode;
}
