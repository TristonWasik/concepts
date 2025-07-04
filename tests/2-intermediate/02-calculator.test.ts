import { describe, expect, it } from "vitest";
import { calculate } from "../../src/2-intermediate/02-calculator";

describe("Calculator", () => {
  it("should add two numbers", () => {
    const result = calculate(2, 3, "+");
    expect(result).toBe(5);
  });

  it("should subtract two numbers", () => {
    const result = calculate(5, 2, "-");
    expect(result).toBe(3);
  });

  it("should multiply two numbers", () => {
    const result = calculate(2, 3, "*");
    expect(result).toBe(6);
  });

  it("should divide two numbers", () => {
    const result = calculate(6, 2, "/");
    expect(result).toBe(3);
  });

  it("should handle division by zero", () => {
    expect(() => calculate(6, 0, "/")).toThrow("Cannot divide by zero");
  });
});
