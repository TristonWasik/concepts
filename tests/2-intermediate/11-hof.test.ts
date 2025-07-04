import { describe, it, expect, vi } from "vitest";
import { once } from "../../src/2-intermediate/11-hof";

describe("once", () => {
  it("should call the original function only once", () => {
    const spy = vi.fn((a: number, b: number) => a + b);
    const wrapped = once(spy);

    const first = wrapped(2, 3);
    const second = wrapped(100, 200);

    expect(first).toBe(5);
    expect(second).toBe(5);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should always return the first result", () => {
    const wrapped = once(() => Math.random());
    const first = wrapped();
    const second = wrapped();
    const third = wrapped();
    expect(second).toBe(first);
    expect(third).toBe(first);
  });
});
