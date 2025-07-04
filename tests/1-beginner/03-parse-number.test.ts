import { describe, it, expect } from "vitest";
import { parseNumber } from "../../src/1-beginner/03-parse-number";

describe("parseNumber", () => {
  it("should return number for valid numeric string", () => {
    expect(parseNumber("42")).toBe(42);
  });

  it("should return 0 for invalid string", () => {
    expect(parseNumber("abc")).toBe(0);
  });

  it("should return correct type", () => {
    const result = parseNumber("123");
    expect(typeof result).toBe("number");
    expect(result).toBe(123);
  });

  it("should return number unchanged", () => {
    expect(parseNumber(42)).toBe(42);
  });

  it("should parse numeric string", () => {
    expect(parseNumber("123")).toBe(123);
  });
});
