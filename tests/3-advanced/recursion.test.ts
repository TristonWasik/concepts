import { describe, it, expect } from "vitest";
import { flattenArray } from "../../src/3-advanced/recursion";

describe("flattenArray", () => {
  it("should flatten a shallow array", () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should flatten a nested array", () => {
    expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it("should flatten deeply nested arrays", () => {
    expect(flattenArray([1, [2, [3, [4]], 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle empty arrays", () => {
    expect(flattenArray([])).toEqual([]);
    expect(flattenArray([[], 1, [2, []]])).toEqual([1, 2]);
  });
});
