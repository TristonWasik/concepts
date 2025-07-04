import { describe, it, expect } from "vitest";
import { sanitizeObject } from "../../src/1-beginner/types-04";

describe("sanitizeObject", () => {
  it("should remove password", () => {
    const user = {
      name: "bob",
      password: "secret",
      email: "bob@x.com",
      age: 30,
      isAdmin: false,
    };
    const safeUser = sanitizeObject(user);
    expect(safeUser).toEqual({
      name: "bob",
      email: "bob@x.com",
      age: 30,
      isAdmin: false,
    });
  });

  it("should not include password key", () => {
    const user = {
      name: "bob",
      password: "secret",
      email: "bob@x.com",
      age: 30,
      isAdmin: false,
    };
    const safeUser = sanitizeObject(user);
    expect("password" in safeUser).toBe(false);
    expect(Object.keys(safeUser)).not.toContain("password");
    expect(Object.keys(safeUser)).toEqual(["name", "email", "age", "isAdmin"]);
  });
});
