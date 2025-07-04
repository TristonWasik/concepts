import { describe, it, expect } from "vitest";
import { isUser, User } from "../../src/2-intermediate/14-is-user";

describe("isUser", () => {
  it("should validate correct object", () => {
    const maybe: unknown = { id: 1, name: "Alice" };
    expect(isUser(maybe)).toBe(true);
  });

  it("should reject invalid object", () => {
    const bad1: unknown = { id: "wrong", name: "Alice" };
    const bad2: unknown = { id: 2 };
    const bad3: unknown = null;
    expect(isUser(bad1)).toBe(false);
    expect(isUser(bad2)).toBe(false);
    expect(isUser(bad3)).toBe(false);
  });

  it("should narrow type after check", () => {
    const maybe: unknown = { id: 1, name: "Bob" };
    if (isUser(maybe)) {
      const user: User = maybe;
      expect(user.id).toBe(1);
      expect(user.name).toBe("Bob");
    } else {
      throw new Error("should be a User");
    }
  });
});
