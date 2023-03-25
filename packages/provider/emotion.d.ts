import '@emotion/react';
import { Token } from '@tincase/token';

declare module '@emotion/react' {
  export interface Theme extends Token {}
}
