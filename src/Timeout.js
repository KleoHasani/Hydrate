class Timeout {
  /**
   * @param {Number} time;
   */
  constructor(time = 30) {
    this.length = 1000 * 60 * time;
    this.id = null;
  }

  /**
   * @param {Number} time;
   * @param {Notification} notification;
   */
  settimeoutLength(time, notification) {
    this.clearTimeoutInterval(this.id);
    this.length = 1000 * 60 * time;
    this.startTimeoutInterval(notification);
  }

  /**
   *
   * @param {Number} timeout
   */
  clearTimeoutInterval() {
    clearInterval(this.id);
  }

  /**
   *
   * @param {Notification} notification;
   */
  startTimeoutInterval(notification) {
    this.id = setInterval(() => {
      if (notification) notification.show();
    }, this.length);
  }
}

module.exports = { Timeout };
