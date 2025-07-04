import { describe, it, expect } from "vitest";
import { MyPartial } from "../../src/2-intermediate/13-custom-partial";

describe("MyPartial", () => {
  it("should make all properties optional", () => {
    type User = { id: number; name: string };
    type PartialUser = MyPartial<User>;

    const user1: PartialUser = {};
    const user2: PartialUser = { name: "Alice" };
    expect(user2.name).toBe("Alice");
  });
});
