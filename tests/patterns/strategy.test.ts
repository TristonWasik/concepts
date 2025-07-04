import { describe, it, expect } from "vitest";
import {
  NumberCollection,
  AscendingSort,
  DescendingSort,
} from "../../src/4-patterns/strategy";

describe("Strategy", () => {
  it("should sort ascending", () => {
    const nc = new NumberCollection(new AscendingSort());
    expect(nc.sort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  it("should sort descending", () => {
    const nc = new NumberCollection(new DescendingSort());
    expect(nc.sort([3, 1, 2])).toEqual([3, 2, 1]);
  });
});
