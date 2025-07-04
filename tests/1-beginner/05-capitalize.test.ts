import { describe, it, expect } from "vitest";
import { capitalize } from "../../src/1-beginner/05-capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should not change an already capitalized string", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("should handle empty strings", () => {
    expect(capitalize("")).toBe("");
  });

  it("should handle strings with only spaces", () => {
    expect(capitalize("   ")).toBe("   ");
  });

  it("should handle single character strings", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("Z")).toBe("Z");
  });

  it("should handle strings with special characters", () => {
    expect(capitalize("!hello")).toBe("!hello");
    expect(capitalize("123abc")).toBe("123abc");
    expect(capitalize("a-b-c")).toBe("A-b-c");
  });

  it("should handle multiple words", () => {
    expect(capitalize("hello world")).toBe("Hello World");
  });
});
