import { describe, it, expect, vi } from "vitest";
import { debounce } from "../../src/1-beginner/10-debounce";

describe("debounce", () => {
  it("should call function only once after delay", async () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    const debounced = debounce(mock, 100);

    debounced("a");
    debounced("b");
    debounced("c");

    expect(mock).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("c");

    vi.useRealTimers();
  });

  it("should debounce multiple series of calls", async () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    const debounced = debounce(mock, 100);

    debounced("first");
    vi.advanceTimersByTime(100);
    expect(mock).toHaveBeenCalledWith("first");

    debounced("second");
    vi.advanceTimersByTime(50);
    debounced("third");
    vi.advanceTimersByTime(100);
    expect(mock).toHaveBeenCalledWith("third");

    expect(mock).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });
});
