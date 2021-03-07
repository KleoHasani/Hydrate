"use strict";

const { app, ipcMain } = require("electron");

const { Timeout } = require("./src/core/Timeout");
const { createAlert, createApplet } = require("./src/core/Architect");

if (app.requestSingleInstanceLock())
  (() => {
    // Start timeout with default 30 minutes interval time.
    this.m_timeout = new Timeout(30);
    // Initialize
    app
      .whenReady()
      .then(() => {
        // Create tray icon
        this.m_app = createApplet();
        // Notify app started successfully.
        createAlert("Hurray!", "Hydrate has started successfully!").show();
      })
      .catch((err) => {
        createAlert("Oops!", "Hydrate crashed! " + err).show();
        exit();
      });

    // After initialization
    app.on("ready", () => {
      // Notification Object
      const m_alert = createAlert("Reminder!", "Don't forget to drink water!");

      // Timeout changed listener
      ipcMain.addListener("timeout_change", (t) => {
        this.m_timeout.setTimeoutLength(t, m_alert);
        createAlert("Updated!", `Time set to ${t} minute(s)`).show();
      });

      // Start interval timeout
      this.m_timeout.startTimeoutInterval(m_alert);
    });

    // Clean up
    app.on("before-quit", () => {
      if (this.m_timeout) this.m_timeout.clearTimeoutInterval();
      this.m_timeout = null;
      this.m_app.destroy();
      this.m_app = null;
      ipcMain.removeAllListeners();
      app.exit(0);
    });
  })();
else app.exit(0);
