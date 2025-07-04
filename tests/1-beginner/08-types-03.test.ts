import { describe, it, expect } from "vitest";
import { createRoleMap } from "../../src/1-beginner/08-types-03";

describe("createRoleMap", () => {
  it("should have all roles", () => {
    let roles = createRoleMap(["admin", "user", "guest"]);
    expect(roles).toHaveProperty("admin", 1);
    expect(roles).toHaveProperty("user", 1);
    expect(roles).toHaveProperty("guest", 1);

    roles = createRoleMap(["user", "guest"]);
    expect(roles).toHaveProperty("admin", 0);
    expect(roles).toHaveProperty("user", 1);
    expect(roles).toHaveProperty("guest", 1);
  });

  it("should have number values", () => {
    const roles = createRoleMap(["user", "guest"]);
    expect(typeof roles.admin).toBe("number");
    expect(typeof roles.user).toBe("number");
    expect(typeof roles.guest).toBe("number");
  });
});
