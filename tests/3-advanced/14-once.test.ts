import { describe, it, expect, vi } from "vitest";
import { once } from "../../src/3-advanced/14-once";

describe("once", () => {
  it("should only call original function once", () => {
    const mock = vi.fn((x: number) => x * 2);
    const wrapped = once(mock);

    expect(wrapped(3)).toBe(6);
    expect(wrapped(4)).toBe(6); // should return first result
    expect(wrapped(5)).toBe(6);

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should support functions with no arguments", () => {
    const mock = vi.fn(() => "hello");
    const wrapped = once(mock);

    expect(wrapped()).toBe("hello");
    expect(wrapped()).toBe("hello");
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
