import { describe, it, expect } from "vitest";
import { tdzExample } from "../../src/3-advanced/09-tdz";

describe("tdzExample", () => {
  it("should return correct value", () => {
    expect(tdzExample()).toBe(15);
  });
});
