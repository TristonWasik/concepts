import { describe, it, expect } from "vitest";
import { ComputerFacade } from "../../src/4-patterns/facade";

describe("Facade", () => {
  it("should boot computer by calling subsystems", () => {
    const pc = new ComputerFacade();
    const result = pc.boot();
    expect(result).toBe("CPU started -> Memory loaded -> Disk read");
  });
});
