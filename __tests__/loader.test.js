const { loadView, appIcon, trayIcon } = require("../src/loader");

describe("LOADER", () => {
  it('loadview() - Should return a string containing "../views/index.html"', () => {
    const view = loadView("index");
    const regex = /^([a-zA-Z]:)?((\\)+|(\/)+)(\w+((\\)+|(\/)+))+index.html$/g;
    expect(typeof view).toBe("string");
    expect(new RegExp(regex).test(view)).toBe(true);
    expect(view).toMatch("index.html");
  });

  it('appIcon - Should return a string containing "../icons/*/icon or 256x256.*"', () => {
    const regex = /^([a-zA-Z]:)?((\\)+|(\/)+)(\w+((\\)+|(\/)+))+([0-9]*x[0-9]*)?|(icon)?.(png|ico|icns)$/g;
    expect(typeof appIcon).toBe("string");
    expect(new RegExp(regex).test(appIcon)).toBe(true);
    expect(appIcon).toMatch("256x256.png");
  });

  it('trayIcon - Should return a string containing "../icons/*/icon or 32x32.*"', () => {
    const regex = /^([a-zA-Z]:)?((\\)+|(\/)+)(\w+((\\)+|(\/)+))+([0-9]*x[0-9]*)?|(icon)?.(png|ico|icns)$/g;
    expect(typeof trayIcon).toBe("string");
    expect(new RegExp(regex).test(trayIcon)).toBe(true);
    expect(trayIcon).toMatch("32x32.png");
  });
});
