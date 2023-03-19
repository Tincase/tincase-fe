import { flatten, escape } from "@tincase/utils";

import { Token } from "../index";

export interface GetCssVariablesProps {
  token: Token;
  prefix?: string;
}

// prettier-ignore
export function getCssVariables({
  token,
  prefix,
}: GetCssVariablesProps): Record<string, any> {
  let cssVariables: Record<string, any> = {};

  const flatTokens            = flatten({ target: token });

  for (const [tokenKey, tokenValue] of Object.entries(flatTokens)) {
    const identifier          = getTokenIdentifier(tokenKey, prefix);
    cssVariables[identifier]  = tokenValue;
  }

  return cssVariables;
}

// prettier-ignore
function getTokenIdentifier(key: string, prefix: string = ""): string {
  const DELIMITER     = "-";

  const processedKey  = String(key).replace(/\./g, DELIMITER);
  const cssVariable   = [prefix, processedKey].join(DELIMITER);

  return escape(`--${cssVariable}`);
}
