import { describe, it, expect } from "vitest";
import { Animal, Cat, Dog } from "../../src/3-advanced/01-animal";

describe("Animal classes", () => {
  it("Animal should speak generically", () => {
    const a = new Animal("Generic");
    expect(a.speak()).toBe("Generic makes a sound");
    expect(a.Name).toBe("Generic");
  });

  it("Dog should bark", () => {
    const d = new Dog("Rex");
    expect(d.speak()).toBe("Rex barks");
  });

  it("Dog is an animal", () => {
    const d = new Dog("Buddy");
    expect(d instanceof Animal).toBe(true);
  });

  it("Dog should have a breed", () => {
    const d = new Dog("Buddy");
    expect(d.Breed).toBe("Dog");
  });

  it("Cat should meow", () => {
    const c = new Cat();
    expect(c.speak()).toBe("Cat meows");
  });

  it("Cat is an animal", () => {
    const c = new Cat();
    expect(c instanceof Animal).toBe(true);
  });
});
