import { describe, it, expect, vi } from "vitest";
import { SecretProxy, Secret } from "../../src/4-patterns/proxy";

describe("Proxy", () => {
  it("should reveal secret and log access", () => {
    const spy = vi.spyOn(console, "log");
    const proxy = new SecretProxy(new Secret());

    expect(proxy.reveal()).toBe("42");
    expect(spy).toHaveBeenCalledWith("Accessed reveal()");
    spy.mockRestore();
  });
});
