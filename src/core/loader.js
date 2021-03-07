"use strict";

const { resolve } = require("path");
const { app } = require("electron");

const base = resolve(app.getAppPath());

module.exports = {
  /**
   * @returns {string}
   */
  loadIcon: () => {
    switch (process.platform) {
      case "win32":
        return resolve(base, "static", "icons", "win", "icon.ico");
      case "darwin":
        return resolve(base, "static", "icons", "mac", "icon.icns");
      default:
        return resolve(base, "static", "icons", "png", "icon.png");
    }
  },

  /**
   * @returns {string}
   */
  loadTray: () => {
    return resolve(base, "static", "icons", "png", "tray.png");
  },
};
