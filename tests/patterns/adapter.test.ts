import { describe, it, expect } from "vitest";
import { PrinterAdapter, LegacyPrinter } from "../../src/4-patterns/adapter";

describe("Adapter", () => {
  it("should adapt LegacyPrinter to new interface", () => {
    const adapter = new PrinterAdapter(new LegacyPrinter());
    expect(adapter.print("Hello")).toBe("**Hello**");
  });
});
