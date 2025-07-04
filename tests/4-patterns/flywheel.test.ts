import { describe, it, expect } from "vitest";
import { Icon } from "../../src/4-patterns/flywheel";

describe("Flyweight", () => {
  it("should share same SharedData for same type", () => {
    const icon1 = new Icon("folder");
    const icon2 = new Icon("folder");
    const icon3 = new Icon("file");

    expect(icon1.sharedData).toBe(icon2.sharedData);
    expect(icon1.sharedData).not.toBe(icon3.sharedData);
  });
});
