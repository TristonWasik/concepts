import { describe, it, expect } from "vitest";
import { emojiDecorator, Greeter } from "../../src/4-patterns/decorator";

describe("Decorator", () => {
  it("should add emoji to greeting", () => {
    const greeter = new Greeter();
    const decorated = emojiDecorator(greeter);
    expect(decorated.greet()).toBe("Hello 😊");
  });
});
