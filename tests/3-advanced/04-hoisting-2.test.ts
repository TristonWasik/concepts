import { describe, it, expect } from "vitest";
import { getGreeting } from "../../src/3-advanced/04-hoisting-2";

describe("getGreeting", () => {
  it("should return greeting", () => {
    expect(getGreeting()).toBe("Hello, World!");
  });
});
