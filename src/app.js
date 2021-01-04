const { app, BrowserWindow, ipcMain } = require("electron");

const { Application } = require("./Application");
const { Timeout } = require("./Timeout");
const { Applet } = require("./Applet");
const { menu } = require("./menu");

const { createNotification, createDialog, TDialog } = require("./Notification");

const { appIcon, trayIcon } = require("./loader");

let tray = null; // Persisit tray in memory
// Start timeout with default 30 minutes interval time.
let timeout = new Timeout(30);

// Quit app, clean interval timout
function exit() {
  if (timeout) {
    timeout.clearTimeoutInterval();
    timeout = null;
  }
  if (tray) {
    tray.destroy();
    tray = null;
  }
  ipcMain.removeAllListeners();
  app.quit();
}

// Initialize
app
  .whenReady()
  .then(() => {
    // Create Application and create Tray applet.
    new Application();
    tray = new Applet(trayIcon, menu);
    // Notify app started succesfully.
    createNotification(
      "Hydrate!",
      "Hydrate has started successfully!",
      appIcon
    ).show();
  })
  .catch((ex) => {
    createDialog(
      BrowserWindow.getFocusedWindow(),
      "Hydrate seems to have run out of water...",
      ex.toString(),
      TDialog.ERROR
    );
    exit();
  });

// After initialization
app.on("ready", () => {
  // Notification Object
  const notification = createNotification(
    "Hydrate!",
    "Don't forget to drink water!",
    appIcon
  );

  // Timeout changed listener
  ipcMain.addListener("timeout_change", (t) => {
    timeout.settimeoutLength(t, notification);
    createNotification(
      "Hydrate!",
      `Time set to ${t} minute(s)`,
      appIcon
    ).show();
  });

  // Start interval timeout
  timeout.startTimeoutInterval(notification);
});

// On Quit
app.on("quit", () => exit());
