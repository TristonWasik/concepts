import { describe, it, expect } from "vitest";
import { format } from "../../src/3-advanced/format";

describe("format", () => {
  it("should format numbers with commas", () => {
    expect(format(1000000)).toBe("1,000,000");
  });

  it("should format numbers with decimals", () => {
    expect(format(1234.56)).toBe("1,234.56");
  });

  it("should format numbers with negative values", () => {
    expect(format(-1234.56)).toBe("-1,234.56");
  });

  it("should uppercase strings", () => {
    expect(format("hello")).toBe("HELLO");
  });
});
