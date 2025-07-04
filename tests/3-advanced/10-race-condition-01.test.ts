import { describe, it, expect, beforeEach } from "vitest";
import {
  incrementCounter,
  getCounter,
  resetCounter,
} from "../../src/3-advanced/10-race-condition-01";

describe("incrementCounter", () => {
  beforeEach(() => {
    resetCounter();
  });

  it("should correctly count increments when called sequentially", async () => {
    await incrementCounter();
    await incrementCounter();
    await incrementCounter();
    expect(getCounter()).toBe(3);
  });

  it("should correctly count increments when called concurrently", async () => {
    const increments = Array.from({ length: 50 }, () => incrementCounter());
    await Promise.all(increments);
    expect(getCounter()).toBe(50);
  });
});
