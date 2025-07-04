import { describe, it, expect } from "vitest";
import { curry } from "../../src/3-advanced/13-currying";

describe("curry", () => {
  function add(a: number, b: number): number {
    return a + b;
  }

  it("should support calling as curried", () => {
    const curriedAdd = curry(add);
    const add5 = curriedAdd(5);
    expect(add5(3)).toBe(8);
  });

  it("should support calling all at once", () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(2, 4)).toBe(6);
  });
});
