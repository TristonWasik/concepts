import { User } from "../utils/types";

/**
 * Sanitizes a user object by removing sensitive information.
 * @param user - The user object to sanitize.
 * @returns A new object with only the name and email properties.
 */
export function sanitizeObject(user: User): Omit<User, "password"> | null {
  return null;
}
