import { describe, it, expect, beforeEach } from "vitest";
import {
  getUser,
  resetUser,
  updateAge,
} from "../../src/3-advanced/11-race-condition-02";

describe("updateAge", () => {
  beforeEach(() => resetUser());

  it("should apply highest age when run sequentially", async () => {
    await updateAge(26);
    await updateAge(30);
    expect(getUser().age).toBe(30);
  });

  it("should apply highest age even when run concurrently", async () => {
    await Promise.all([updateAge(26), updateAge(28), updateAge(30)]);
    expect(getUser().age).toBe(30);
  });
});
