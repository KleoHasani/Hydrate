const { Notification, dialog, NativeImage } = require("electron");

const TDialog = {
  ERROR: "error",
  WARNING: "warning",
};

/**
 *
 * @param {String} title
 * @param {String} body
 * @param {NativeImage} icon
 */
function createNotification(title, body, icon) {
  return new Notification({
    title,
    body,
    icon,
  });
}

/**
 * @param {BrowserWindow} context
 * @param {String} title
 * @param {String} message
 * @param {*} type
 */
function createDialog(context, title, message, type = TDialog.ERROR) {
  return dialog.showMessageBox(context, {
    title,
    message,
    type,
  });
}

module.exports = { createNotification, createDialog, TDialog };
