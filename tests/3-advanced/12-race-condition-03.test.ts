import { describe, it, expect, beforeEach } from "vitest";
import {
  add,
  getTotal,
  resetTotal,
} from "../../src/3-advanced/12-race-condition-03";

describe("add", () => {
  beforeEach(() => resetTotal());

  it("should add numbers sequentially", async () => {
    await add(1);
    await add(2);
    expect(getTotal()).toBe(3);
  });

  it("should correctly add numbers concurrently", async () => {
    await Promise.all([add(1), add(2), add(3)]);
    expect(getTotal()).toBe(6);
  });
});
