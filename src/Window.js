"use strict";

const { BrowserWindow } = require("electron");
const { loadView } = require("./loader");

class Window extends BrowserWindow {
  constructor(name, settings) {
    super(settings);
    this.loadFile(loadView(name));
    this.once("ready-to-show", () => {
      this.focus();
    });
  }
}

module.exports = { Window };
