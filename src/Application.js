const { Window } = require("./Window");

// window settings
const settings = {
  width: 0,
  height: 0,
  frame: false,
  show: false,
  movable: false,
  transparent: true,
  webPreferences: {
    webSecurity: true,
    contextIsolation: true,
    worldSafeExecuteJavaScript: true,
    nodeIntegration: false,
    nodeIntegrationInWorker: false,
    enableRemoteModule: false,
    allowRunningInsecureContent: false,
    plugins: false,
    experimentalFeatures: false,
  },
};

class Application extends Window {
  constructor() {
    super("index", settings);
  }
}

module.exports = { Application };
