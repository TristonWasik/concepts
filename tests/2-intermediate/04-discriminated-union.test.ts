import { describe, it, expect } from "vitest";
import { getShapeArea } from "../../src/2-intermediate/04-discriminated-unions";

describe("getShapeArea", () => {
  it("should compute area of circle", () => {
    expect(getShapeArea({ kind: "circle", radius: 2 })).toBeCloseTo(
      Math.PI * 4
    );
  });

  it("should compute area of rectangle", () => {
    expect(getShapeArea({ kind: "rectangle", width: 3, height: 4 })).toBe(12);
  });

  it("should compute area of square", () => {
    expect(getShapeArea({ kind: "square", side: 5 })).toBe(25);
  });
});
