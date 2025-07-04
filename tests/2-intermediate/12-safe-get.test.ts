import { describe, it, expect } from "vitest";
import { safeGet } from "../../src/2-intermediate/12-safe-get";

describe("safeGet", () => {
  it("should get value by key", () => {
    const user = { name: "Alice", age: 30 };
    expect(safeGet(user, "name")).toBe("Alice");
    expect(safeGet(user, "age")).toBe(30);
  });

  it("should infer correct type", () => {
    const user = { id: 1, active: true };
    const id = safeGet(user, "id");
    const active = safeGet(user, "active");
    type IdType = typeof id; // number
    type ActiveType = typeof active; // boolean
    const x: IdType = 123;
    const y: ActiveType = false;
    expect(typeof x).toBe("number");
    expect(typeof y).toBe("boolean");
  });
});
