import { describe, it, expect } from "vitest";
import { Counter } from "../../src/2-intermediate/15-static-counter";

describe("Counter with static total", () => {
  it("should track individual counts", () => {
    const a = new Counter();
    const b = new Counter();
    a.increment();
    a.increment();
    b.increment();
    expect(a.getCount()).toBe(2);
    expect(b.getCount()).toBe(1);
  });

  it("should track total across all counters", () => {
    const a = new Counter();
    const b = new Counter();
    a.increment();
    b.increment();
    b.increment();
    expect(Counter.getTotal()).toBe(3);
  });
});
