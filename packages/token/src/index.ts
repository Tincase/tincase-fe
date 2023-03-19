import { aliasToken } from "./alias";

export * from "./types";

export const token = {
  ...aliasToken,
};

export type Token = typeof token;

export * from "./types";
export * from "./utils";
