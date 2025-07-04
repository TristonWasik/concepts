import { describe, it, expect } from "vitest";
import { Observable } from "../../src/4-patterns/observer";

describe("Observer", () => {
  it("should notify all listeners", () => {
    const obs = new Observable();
    const results: string[] = [];
    obs.subscribe((msg) => results.push("A:" + msg));
    obs.subscribe((msg) => results.push("B:" + msg));

    obs.notify("hello");
    expect(results).toEqual(["A:hello", "B:hello"]);
  });
});
