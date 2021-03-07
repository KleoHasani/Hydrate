"use strict";

const { Timeout } = require("../src/core/Timeout");

describe("TIMEOUT", () => {
  const timeout = new Timeout();
  it("Should init timeout", () => {
    expect(typeof timeout).toBe("object");
    expect(timeout).toBeInstanceOf(Timeout);
    expect(timeout.length).toEqual(1000 * 60 * 30);
    expect(timeout.id).toBe(null);
  });

  it("Should set time out on 1000 * 60 * 60 and timeout.id should not be null", () => {
    timeout.setTimeoutLength(60);
    console.log(timeout.id);
    expect(timeout.length).toEqual(1000 * 60 * 60);
    expect(timeout.id).not.toBe(null);
  });

  it("Should clear timeout, timeout.id should be a number", () => {
    timeout.clearTimeoutInterval();
    expect(typeof timeout.id).toBe("number");
  });
});
