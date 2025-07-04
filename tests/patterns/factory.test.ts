import { describe, it, expect } from "vitest";
import { animalFactory } from "../../src/4-patterns/factory";

describe("Factory", () => {
  it("should create a dog", () => {
    expect(animalFactory("dog").speak()).toBe("Woof");
  });

  it("should create a cat", () => {
    expect(animalFactory("cat").speak()).toBe("Meow");
  });
});
