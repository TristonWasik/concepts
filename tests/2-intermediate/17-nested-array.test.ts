import { describe, it, expect } from "vitest";
import { NestedArray } from "../../src/2-intermediate/17-nested-array";

describe("NestedArray", () => {
  it("should allow single item", () => {
    const n1: NestedArray<number> = 1;
    expect(n1).toBe(1);
  });

  it("should allow nested arrays", () => {
    const n2: NestedArray<number> = [1, 2, [3, [4, 5]]];
    expect(n2[0]).toBe(1);
    expect(Array.isArray(n2)).toBe(true);
  });

  it("should allow deeply nested", () => {
    const n3: NestedArray<string> = [[[[["a"]]]]];
    expect(n3[0][0][0][0][0]).toBe("a");
  });
});
