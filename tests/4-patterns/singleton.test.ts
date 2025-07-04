import { describe, it, expect } from "vitest";
import { getConfigInstance } from "../../src/4-patterns/singleton";

describe("Singleton", () => {
  it("should always return the same instance", () => {
    const a = getConfigInstance();
    const b = getConfigInstance();
    expect(a).toBe(b);
    expect(a.value).toBe(b.value);
  });
});
