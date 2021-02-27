const { resolve } = require("path");
const { app } = require("electron");

const base = resolve(app.getAppPath());

module.exports = {
  /**
   * @param {string} name
   * @returns {string}
   */
  loadView: (name) => {
    return resolve(base, "views", `${name}.html`);
  },

  /**
   * @returns {string}
   */
  loadIcon: () => {
    switch (process.platform) {
      case "win32":
        return resolve(base, "icons", "win", "icon.ico");
      case "darwin":
        return resolve(base, "icons", "mac", "icon.icns");
      default:
        return resolve(base, "icons", "png", "icon.png");
    }
  },

  /**
   * @returns {string}
   */
  loadTray: () => {
    return resolve(base, "icons", "png", "tray.png");
  },
};
