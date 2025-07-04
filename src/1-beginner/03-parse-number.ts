/**
 * Parses a string into a number.
 * If the string is not a valid number, it returns 0.
 * @param str - The string to parse as a number.
 * @returns
 */
export function parseNumber(str: any) {
  if (/^\d+$/.test(str)) {
    return Number(str);
  }
  return null;
}
