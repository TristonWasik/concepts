import { describe, it, expect } from "vitest";
import { partialUser } from "../../src/1-beginner/06-types-01";
import { User } from "../../src/utils/types";

const user: User = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: false,
};

describe("Types-01", () => {
  it("should allow missing properties", () => {
    const partial = partialUser(user);
    expect(partial).toHaveProperty("name", "John Doe");
  });

  it("should allow completely empty object", () => {
    const partial = partialUser(user);
    expect(partial).toEqual({});
  });
});
