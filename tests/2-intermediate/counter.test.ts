import { describe, it, expect } from "vitest";
import { Counter } from "../../src/2-intermediate/counter";

describe("Counter", () => {
  it("should increment correctly when called externally", () => {
    const c = new Counter();
    const inc = c.increment;
    inc();
    expect(c.count).toBe(1);
  });
});
