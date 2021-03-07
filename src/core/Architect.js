"use strict";

const { Tray, Notification } = require("electron");
const { loadTray, loadIcon } = require("./loader");
const { appletMenu } = require("../menu");

module.exports = {
  /**
   * @returns {Tray}
   */
  createApplet: () => {
    const m_tray = new Tray(loadTray());
    m_tray.setContextMenu(appletMenu);
    m_tray.setToolTip("Hydrate");
    return m_tray;
  },
  /**
   * @param {string} title
   * @param {string} body
   * @returns {Notification}
   */
  createAlert: (title, body) => {
    return new Notification({ title, body, icon: loadIcon() });
  },
};
