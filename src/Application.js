const { Window } = require("./Window");
const { appIcon } = require("./loader");

// window settings
const settings = {
  width: 0,
  height: 0,
  frame: false,
  show: false,
  movable: false,
  transparent: false,
  icon: appIcon,
  webPreferences: {
    nodeIntegration: false,
    webSecurity: true,
    enableRemoteModule: false,
    contextIsolation: true,
    worldSafeExecuteJavaScript: true,
  },
};

class Application extends Window {
  constructor() {
    // Name of window (same name as the HTML file without extentions) and settings for the window
    super("index", settings);
  }
}

module.exports = { Application };
