import { describe, it, expect } from "vitest";
import { parseNumberOrString } from "../../src/1-beginner/parse-values";

describe("parseNumberOrString", () => {
  it("should return number unchanged", () => {
    expect(parseNumberOrString(42)).toBe(42);
  });

  it("should parse numeric string", () => {
    expect(parseNumberOrString("123")).toBe(123);
  });

  it("should return null for invalid string", () => {
    expect(parseNumberOrString("abc")).toBeNull();
  });
});
