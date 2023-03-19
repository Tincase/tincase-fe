export function isInteger(arg: any): arg is number {
  return typeof arg === "number" && Number.isInteger(arg);
}
