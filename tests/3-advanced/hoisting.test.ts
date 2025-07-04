import { describe, it, expect } from "vitest";
import { hoistingTest } from "../../src/3-advanced/hoisting";

describe("hoistingTest", () => {
  it("should return correct values", () => {
    expect(hoistingTest()).toEqual([5, 10]);
  });
});
