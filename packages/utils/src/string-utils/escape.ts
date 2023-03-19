import { isInteger } from "../type-guards";

export interface EscapeOptions {
  replaceValue?: string;
}

export function escape(
  value: string | number,
  options: EscapeOptions = {}
): string {
  const { replaceValue = "-" } = options;

  const valueString = value.toString();
  const escapedValue = valueString.replace(/\s+/g, replaceValue);

  return escapeSymbol(escapeDot(escapedValue));
}

function escapeSymbol(value: string) {
  return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}

function escapeDot(value: string) {
  if (value.includes("\\.")) return value;

  const isDecimal = !isInteger(parseFloat(value.toString()));
  return isDecimal ? value.replace(".", `\\.`) : value;
}
