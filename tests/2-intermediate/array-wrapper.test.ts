import { describe, it, expect } from "vitest";
import { wrapInArray } from "../../src/2-intermediate/array-wrapper";

describe("wrapInArray", () => {
  it("should wrap single item", () => {
    expect(wrapInArray(5)).toEqual([5]);
  });

  it("should return array unchanged", () => {
    expect(wrapInArray(["a", "b"])).toEqual(["a", "b"]);
  });
});
