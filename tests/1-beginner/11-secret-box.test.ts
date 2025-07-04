import { describe, it, expect } from "vitest";
import { SecretBox } from "../../src/1-beginner/11-secret-box";

describe("SecretBox", () => {
  it("should return secret via method", () => {
    const box = new SecretBox("hidden");
    expect(box.reveal()).toBe("hidden");
  });

  it("should not allow direct access to secret", () => {
    const box = new SecretBox("topSecret");
    expect(box.secret).toBeUndefined();
  });
});
