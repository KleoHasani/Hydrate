const { resolve, join } = require("path");
const { app } = require("electron");

/**
 * @param {String} name
 */
function loadView(name) {
  if (process.env.NODE_ENV === "production") {
    return process.platform === "win32"
      ? resolve(
          join(
            app.getAppPath(),
            "resources",
            "app.asar",
            "views",
            `${name}.html`
          )
        )
      : resolve(join(app.getAppPath(), "views", `${name}.html`));
  } else {
    return resolve(join(app.getAppPath(), "views", `${name}.html`));
  }
}

/**
 * @param {String} name
 */
function load(name) {
  if (process.env.NODE_ENV === "production") {
    switch (process.platform) {
      case "win32":
        return resolve(
          join(
            app.getAppPath(),
            "resources",
            "app.asar",
            "icons/win",
            "icon.ico"
          )
        );
      case "darwin":
        return resolve(join(app.getAppPath(), "resources", "app.asar", "icons/mac", "icon.icns"));
      case "linux":
        return resolve(join(app.getAppPath(), "resources", "app.asar","icons/mac", "icon.icns"));
      default:
        return resolve(join(app.getAppPath(), "resources", "app.asar", "icons/png", "32x32.png"));
    }
  } else {
    return resolve(join(app.getAppPath(), "icons/png", `${name}.png`));
  }
}

const appIcon = load("256x256");
const trayIcon = load("32x32");

module.exports = { loadView, appIcon, trayIcon };
