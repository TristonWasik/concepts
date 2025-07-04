import { describe, expect, it } from "vitest";
import { User } from "../../src/utils/types";
import { onlyCertainProperties } from "../../src/1-beginner/07-types-02";

describe("Specific Types", () => {
  it("should return only age and name from user", () => {
    const user: User = {
      name: "John",
      age: 30,
      email: "test@test.com",
      isAdmin: false,
    };
    const result = onlyCertainProperties(user);
    expect(result).toEqual({ name: "John", age: 30 });
    expect(Object.keys(result)).toEqual(["name", "age"]);
    expect(Object.keys(result)).not.toContain("email");
    expect(Object.keys(result)).not.toContain("isAdmin");
  });
});
