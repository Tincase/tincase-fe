/**
 * Determines if a value is an array.
 *
 * @param value The value to check
 */
// prettier-ignore
export function isArray(arg: any): arg is any[] {
  return Array.isArray(arg)
}
