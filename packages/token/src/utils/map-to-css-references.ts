export interface MapToCssReferencesProps<T> {
  token: T;
  prefix?: string;
}

export function mapToCssReferences<T>({
  token,
  prefix,
}: MapToCssReferencesProps<T>) {
  return iterate(token, `--${prefix}`);
}

function iterate<T>(obj: T, parentKey = ''): T {
  let result: Record<string, any> = {};

  for (const key in obj) {
    const nestedObj = obj[key];
    const newKey = `${parentKey}-${key}`;

    if (typeof nestedObj === 'object') {
      result[key] = iterate(nestedObj, newKey);
    } else {
      result[key] = `var(${newKey})`;
    }
  }

  return result as T;
}
