import { describe, it, expect } from "vitest";
import { compose } from "../../src/2-intermediate/16-composition";

describe("compose", () => {
  const double = (x: number) => x * 2;
  const square = (x: number) => x * x;

  it("should compose functions left to right", () => {
    const doubleThenSquare = compose(square, double);
    expect(doubleThenSquare(3)).toBe(36);

    const squareThenDouble = compose(double, square);
    expect(squareThenDouble(3)).toBe(18);
  });

  it("should work with strings", () => {
    const shout = (s: string) => s.toUpperCase();
    const greet = (s: string) => "Hi, " + s;
    const shoutThenGreet = compose(greet, shout);
    expect(shoutThenGreet("alice")).toBe("Hi, ALICE");
  });
});
