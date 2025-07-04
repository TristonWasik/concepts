import { User } from "../utils/types";

export function getAgeInYears(user: Partial<User>) {
  return user.age + 0;
}
