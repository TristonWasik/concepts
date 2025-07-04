import { describe, it, expect } from "vitest";
import {
  SpamHandler,
  ImportantHandler,
} from "../../src/4-patterns/chain-of-responsibility";

describe("Chain of Responsibility", () => {
  it("should handle spam", () => {
    const spam = new SpamHandler();
    const important = new ImportantHandler();
    spam.setNext(important);

    expect(spam.handle("spam")).toBe("Blocked spam");
  });

  it("should handle important", () => {
    const spam = new SpamHandler();
    const important = new ImportantHandler();
    spam.setNext(important);

    expect(spam.handle("important")).toBe("Handled important");
  });

  it("should return undefined for unknown", () => {
    const spam = new SpamHandler();
    const important = new ImportantHandler();
    spam.setNext(important);

    expect(spam.handle("other")).toBeUndefined();
  });
});
