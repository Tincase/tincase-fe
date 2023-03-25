import { useTheme as useEmotionTheme } from '@emotion/react';
import { Token } from '@tincase/token';

export function useTheme(): Token {
  return useEmotionTheme();
}
