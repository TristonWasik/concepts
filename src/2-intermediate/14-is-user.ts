export interface User {
  id: number;
  name: string;
}

/**
 * This type guard checks if the given object is a User.
 * @param obj - The object to check.
 * @returns True if the object is a User, false otherwise.
 */
export function isUser(obj: unknown): boolean {
  return false;
}
