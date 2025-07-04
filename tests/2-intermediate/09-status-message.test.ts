import { describe, it, expect } from "vitest";
import { getStatusMessage } from "../../src/2-intermediate/09-status-message";

describe("getStatusMessage", () => {
  it("should handle loading", () => {
    expect(getStatusMessage({ status: "loading" })).toBe("Loading...");
  });

  it("should handle success", () => {
    expect(getStatusMessage({ status: "success", data: "Done!" })).toBe(
      "Success: Done!"
    );
  });

  it("should handle error", () => {
    expect(getStatusMessage({ status: "error", message: "Failed" })).toBe(
      "Error: Failed"
    );
  });
});
