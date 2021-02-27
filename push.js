var push = require("web-push");

let vapidKeys = {
    publicKey: 'BDfau5pPu_eiLWIOg7WBAAIzwY7ioSz4q5JlIC_rrsPbEruoXgZrqKiUoWaH6v0hCskGEz3OZZt_8IN2vZlF314',
    privateKey: 'H9pTqQRuos-H8RiIDeqIYoogfW-rk4ItN4VdpG8PVpU'
  }

  push.setVapidDetails("mailto:test@code.co.uk", vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};
  push.sendNotification(sub, "test message")