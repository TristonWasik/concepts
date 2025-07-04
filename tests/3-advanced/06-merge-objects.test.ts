import { describe, it, expect } from "vitest";
import { mergeObjects } from "../../src/3-advanced/06-merge-objects";

describe("mergeObjects", () => {
  it("should merge properties", () => {
    const merged = mergeObjects({ a: 1 }, { b: "x" });
    expect(merged).toEqual({ a: 1, b: "x" });
  });

  it("should keep correct types", () => {
    const merged = mergeObjects({ flag: true }, { count: 5 });
    expect(merged.flag).toBe(true);
    expect(merged.count).toBe(5);
    expect(merged).toEqual({ flag: true, count: 5 });
  });

  it("should handle empty objects", () => {
    const merged = mergeObjects({}, { key: "value" });
    expect(merged).toEqual({ key: "value" });
  });

  it("should handle multiple properties", () => {
    const merged = mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
    expect(merged).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it("should handle nested objects", () => {
    const merged = mergeObjects({ a: { x: 1 } }, { b: { y: 2 } });
    expect(merged).toEqual({ a: { x: 1 }, b: { y: 2 } });
  });
});
