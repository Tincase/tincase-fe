import { isObject } from "../type-guards";

export interface FlattenProps {
  target: Record<string, any>;
  maxDepth?: number;
}

/**
 * Flattens a nested object with dot notation keys.
 *
 * @param target The object to flatten
 * @param maxDepth The maximum depth to flatten the object
 *
 * @example { ["color.gray.500"]: "#999" }
 */
export function flatten({
  target,
  maxDepth = Infinity,
}: FlattenProps): Record<string, any> {
  if (!isObject(target) && !Array.isArray(target)) return target;
  if (!maxDepth) return target;

  const entries = Object.entries(target);

  return flattenReduceEntries(entries, maxDepth);
}

// prettier-ignore
function flattenReduceEntries<T>(entries: [string, T][], maxDepth: number): Record<string, any> {
  return entries.reduce((result, [key, value]) => {
    if (isObject(value) || Array.isArray(value)) {
      const childEntries = Object.entries(
        flatten({ target: value, maxDepth: maxDepth - 1 })
      );

      childEntries.forEach(([childKey, childValue]) => {
        const nestedKey     = `${key}.${childKey}`    // e.g. color.gray.500
        result[nestedKey]   = childValue
      });
    } else { result[key]    = value; }                   // e.g. transparent

    return result;
  }, {} as any);
}
