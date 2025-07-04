import { describe, it, expect } from "vitest";
import { greetUser } from "../../src/1-beginner/greet-user";

describe("greetUser", () => {
  it("should greet the user with a given name", () => {
    expect(greetUser("Alice")).toBe("Hello, Alice!");
  });

  it("should handle empty names", () => {
    expect(greetUser("")).toBe("Hello, !");
  });

  it("should handle names with special characters", () => {
    expect(greetUser("O'Connor")).toBe("Hello, O'Connor!");
  });

  it("should not allow null or undefined names", () => {
    expect(() => greetUser(null as any)).toThrow(
      "Name cannot be null or undefined"
    );
    expect(() => greetUser(undefined as any)).toThrow(
      "Name cannot be null or undefined"
    );
  });

  it("should handle names with leading and trailing spaces", () => {
    expect(greetUser("  Bob  ")).toBe("Hello, Bob!");
  });

  it("should only allow apostrophe and remove other special characters", () => {
    expect(greetUser("O'Connor")).toBe("Hello, O'Connor!");
    expect(greetUser("Bob@123")).toBe("Hello, Bob!");
  });
});
