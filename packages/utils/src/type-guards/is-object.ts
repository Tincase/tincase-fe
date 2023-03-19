/**
 * Determines if an argument is an object (excluding Array).
 *
 * @param arg The value to check
 */
// prettier-ignore
export function isObject(arg: any): arg is Record<string, any> {
  if (arg == null)          return false
  if (Array.isArray(arg))   return false

  const type = typeof arg
  
  return type === 'object' || type === 'function'
}
