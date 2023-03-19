import { Global } from "@emotion/react";
import { getCssVariables, token } from "@tincase/token";

import { GlobalStylesProps } from "./GlobalStyles.types";

export const GlobalStyles = ({ root = ":host, :root" }: GlobalStylesProps) => {
  const selector = [root, "[data-theme]"].join(",");

  const cssVariables = getCssVariables({ token, prefix: "tincase" });

  return <Global styles={{ [selector]: cssVariables }} />;
};
