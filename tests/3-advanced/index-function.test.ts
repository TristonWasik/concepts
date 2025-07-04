import { describe, it, expect } from "vitest";
import { createIndexFunctions } from "../../src/3-advanced/index-function";

describe("createIndexFunctions", () => {
  it("should return functions that return correct indexes", () => {
    const fns = createIndexFunctions();
    expect(fns[0]()).toBe(0);
    expect(fns[1]()).toBe(1);
    expect(fns[2]()).toBe(2);
  });
});
