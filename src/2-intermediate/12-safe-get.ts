/**
 * This funciotn safely retrieves a value from an object using a key.
 * @param obj
 * @param key
 * @returns
 */
export function safeGet(obj: any, key: any): any {
  return obj[key];
}
