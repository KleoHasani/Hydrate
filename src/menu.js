const { Menu, ipcMain } = require("electron");

// Tray Context Menu
const menu = Menu.buildFromTemplate([
  {
    label: "2 Hours",
    type: "radio",
    click: () => {
      ipcMain.emit("timeout_change", 120);
    },
  },
  {
    label: "1 Hour",
    type: "radio",
    click: () => {
      ipcMain.emit("timeout_change", 60);
    },
  },
  {
    label: "* 30 Mins",
    type: "radio",
    checked: true,
    click: () => {
      ipcMain.emit("timeout_change", 30);
    },
  },
  {
    label: "20 Mins",
    type: "radio",
    click: () => {
      ipcMain.emit("timeout_change", 20);
    },
  },
  {
    label: "1 Min",
    type: "radio",
    click: () => {
      ipcMain.emit("timeout_change", 1);
    },
  },
  {
    role: "quit",
  },
]);

module.exports = { menu };
