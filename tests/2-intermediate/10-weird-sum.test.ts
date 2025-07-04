import { describe, it, expect } from "vitest";
import { weirdSum } from "../../src/2-intermediate/10-weird-sum";

describe("weirdSum", () => {
  it("should return true when comparing weirdSum([]) == 0", () => {
    expect(weirdSum([]) == 0).toBe(true);
  });

  it("should return true when comparing weirdSum({}) == 0", () => {
    expect(weirdSum({}) == 0).toBe(true);
  });
});
