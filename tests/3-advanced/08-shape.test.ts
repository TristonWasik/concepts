import { describe, it, expect } from "vitest";
import { Circle, Rectangle, Square } from "../../src/3-advanced/08-shape";

describe("Shape classes", () => {
  it("Circle should compute area", () => {
    const c = new Circle(2);
    expect(c.area()).toBeCloseTo(Math.PI * 4);
  });

  it("Square should compute area", () => {
    const s = new Square(3);
    expect(s.area()).toBe(9);
  });

  it("Rectangle should compute area", () => {
    const r = new Rectangle(4, 5);
    expect(r.area()).toBe(20);
  });
});
