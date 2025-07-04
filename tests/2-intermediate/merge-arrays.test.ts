import { describe, expect, it } from "vitest";
import { mergeArrays } from "../../src/2-intermediate/merge-arrays";

describe("Merge Arrays", () => {
  it("should merge two arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    expect(mergeArrays(array1, array2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should merge arrays with different types", () => {
    const array1 = [1, "two", true];
    const array2 = [3.14, "four"];
    expect(mergeArrays(array1, array2)).toEqual([1, "two", true, 3.14, "four"]);
  });

  it("should handle empty arrays", () => {
    const array1: number[] = [];
    const array2 = [1, 2, 3];
    expect(mergeArrays(array1, array2)).toEqual([1, 2, 3]);
  });

  it("should handle any number of arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    const array3 = [6, 7];
    const array4 = ["test", "end"];
    expect(mergeArrays(array1, array2, array3, array4)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      "test",
      "end",
    ]);
  });
});
