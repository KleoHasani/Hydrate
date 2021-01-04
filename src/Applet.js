const { Tray } = require("electron");

class Applet extends Tray {
  /**
   * @param {NativeImage} icon
   * @param {Menu} contextMenu
   */
  constructor(icon, contextMenu) {
    super(icon);
    this.setToolTip("Hydrate");
    this.setContextMenu(contextMenu);
  }
}

module.exports = { Applet };
