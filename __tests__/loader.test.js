const { loadView, loadIcon, loadTray } = require("../src/loader");

describe("LOADER", () => {
  it('loadview("index") - Should return a string containing "../views/index.html"', () => {
    const view = loadView("index");
    const regex = /^([a-zA-Z]:)?((\\)+|(\/)+)(\w+((\\)+|(\/)+))+index.html$/g;
    expect(typeof view).toBe("string");
    expect(new RegExp(regex).test(view)).toBe(true);
    expect(view).toMatch("index.html");
  });

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
