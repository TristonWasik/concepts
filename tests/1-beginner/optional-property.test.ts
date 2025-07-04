import { describe, it, expect } from "vitest";
import { getAgeInYears } from "../../src/1-beginner/optional-property";

describe("getAgeInYears", () => {
  it("should return age if present", () => {
    expect(getAgeInYears({ name: "Alice", age: 30 })).toBe(30);
  });

  it("should return 0 if age missing", () => {
    expect(getAgeInYears({ name: "Bob" })).toBe(0);
  });
});
