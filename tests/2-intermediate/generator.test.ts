import { describe, it, expect } from "vitest";
import { idGenerator } from "../../src/2-intermediate/generators";

describe("idGenerator", () => {
  it("should yield incremental IDs", () => {
    const gen = idGenerator();

    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(3);
    expect(gen.next().value).toBe(4);
  });

  it("should continue indefinitely", () => {
    const gen = idGenerator();

    for (let i = 1; i <= 100; i++) {
      expect(gen.next().value).toBe(i);
    }
  });
});
