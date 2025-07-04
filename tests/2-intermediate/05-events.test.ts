import { describe, it, expect, vi } from "vitest";
import { SimpleEventEmitter } from "../../src/2-intermediate/05-events";

describe("SimpleEventEmitter", () => {
  it("should call subscribed listeners when emitting", () => {
    const emitter = new SimpleEventEmitter();
    const listener = vi.fn();

    emitter.subscribe(listener);
    emitter.emit("hello");

    expect(listener).toHaveBeenCalledWith("hello");
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("should not call unsubscribed listeners", () => {
    const emitter = new SimpleEventEmitter();
    const listener = vi.fn();

    emitter.subscribe(listener);
    emitter.unsubscribe(listener);
    emitter.emit("bye");

    expect(listener).not.toHaveBeenCalled();
  });

  it("should call multiple listeners", () => {
    const emitter = new SimpleEventEmitter();
    const listener1 = vi.fn();
    const listener2 = vi.fn();

    emitter.subscribe(listener1);
    emitter.subscribe(listener2);
    emitter.emit("event");

    expect(listener1).toHaveBeenCalledWith("event");
    expect(listener2).toHaveBeenCalledWith("event");
  });
});
