"use strict";

const { loadIcon, loadTray } = require("../src/core/loader");

describe("LOADER", () => {
  it('loadIcon - Should return a string containing "../icons/*/icon.*"', () => {
    const regex = /^([a-zA-Z]:)?((\\)+|(\/)+)(\w+((\\)+|(\/)+))+(icon)?.(png|ico|icns)$/g;
    const appIcon = loadIcon();
    expect(typeof appIcon).toBe("string");
    expect(new RegExp(regex).test(appIcon)).toBe(true);
  });

  it('loadTray - Should return a string containing "../icons/*/icon.*"', () => {
    const regex = /^([a-zA-Z]:)?((\\)+|(\/)+)(\w+((\\)+|(\/)+))+(tray)?.(png)$/g;
    const trayIcon = loadTray();
    expect(typeof trayIcon).toBe("string");
    expect(new RegExp(regex).test(trayIcon)).toBe(true);
  });
});
