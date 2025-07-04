import { describe, expect, it } from "vitest";
import { asyncFetchData } from "../../src/2-intermediate/fetch";

describe("fetch", () => {
  it("should fetch data", async () => {
    const data = asyncFetchData();
    expect(data).toBe("fetched data");
  });

  it("should return a promise", () => {
    const result = asyncFetchData();
    expect(result).toBeInstanceOf(Promise);
  });

  it("should resolve after a small delay", async () => {
    const start = Date.now();
    await asyncFetchData();
    const duration = Date.now() - start;
    expect(duration).toBeLessThanOrEqual(50);
  });

  it("should not throw an error", async () => {
    await expect(asyncFetchData()).resolves.not.toThrow();
  });
});
