import { Global } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <Global styles={{ ":root, :host, [data-theme]": { "--test": "test" } }} />
  );
};
