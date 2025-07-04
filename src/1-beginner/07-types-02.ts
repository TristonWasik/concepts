import { User } from "../utils/types";

export function onlyCertainProperties(
  user: User
): Pick<User, "name" | "email"> {
  return user;
}
