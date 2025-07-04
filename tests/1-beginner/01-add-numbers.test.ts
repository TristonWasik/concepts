import { describe, it, expect } from "vitest";
import { addNumbers } from "../../src/1-beginner/01-add-numbers";

describe("addNumbers", () => {
  it("should return the sum of two numbers", () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  it("should return the sum of negative numbers", () => {
    expect(addNumbers(-2, -3)).toBe(-5);
  });

  it("should return the sum of a positive and a negative number", () => {
    expect(addNumbers(2, -3)).toBe(-1);
  });

  it("should return zero when both numbers are zero", () => {
    expect(addNumbers(0, 0)).toBe(0);
  });
});
