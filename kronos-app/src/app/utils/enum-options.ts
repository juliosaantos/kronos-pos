export function enumToOptions<T extends Record<string, string>>(enumObj: T) {
  return Object.entries(enumObj).map(([value, label]) => ({
    label,
    value,
  }));
}
