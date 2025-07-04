import { Role } from "../utils/types";

/**
 * Convert an array of roles to a record with thats initialized to 0. The value is 1 for all roles that exist in the array.
 * @param roles - an array of roles
 * @description Creates a map of roles with their counts initialized to 0.
 * @returns
 */
export function createRoleMap(roles: Role[]) {
  return { admin: 0, user: "true", guest: true };
}
