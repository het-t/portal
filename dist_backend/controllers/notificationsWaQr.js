"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _createClient = _interopRequireDefault(require("../helpers/notifications/whatsapp/createClient.js"));
var _promises = _interopRequireDefault(require("fs/promises"));
var _qrcode = _interopRequireDefault(require("qrcode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _default(req, res) {
  var date = Date.now();
  var clientObj = (0, _createClient["default"])("".concat(req.orgId, "-").concat(date), 'for-qr');
  var client = clientObj.client,
    clientId = clientObj.clientId;
  console.log("".concat(clientId, " auth kickstart in notificationsWaQr"));
  client.on('qr', function (qr) {
    console.log("".concat(clientId, " qr sent"));
    _qrcode["default"].toDataURL(qr, function (err, url) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(url);
      }
    });
  });
  client.on('authenticated', function () {
    console.log("client for ".concat(clientId, " authenticated"));
  });
  client.on('auth_failure', function (error) {
    console.log("".concat(clientId, " Authentication failure: ").concat(error));
  });
  client.on('ready', function () {
    console.log("client for ".concat(clientId, " ready"));
    client.sendMessage('8849210989@c.use', "working ");

    // return fs.rename(
    //     `./auth-for-qr/session-${clientId}`, 
    //     `./auth-for-use/session-admin-${req.orgId}-${Date.now()}`
    // ).then(() => {
    //     console.log('File renamed successfully');
    //     client.destroy()
    //         .catch(err => {
    //             console.log(err)
    //         });
    // }).catch(err => {
    //     console.log(err);
    // });
    // client.destroy()
    // .catch(err => {
    //     console.log(err)
    // })
    // .finally(() => {
    //     return fs.rename(
    //         `./auth-for-qr/session-${clientId}`, 
    //         `./auth-for-use/session-admin-${req.orgId}-${Date.now()}`
    //     )
    // })
  });

  client.initialize();
  //     .catch(err => {
  //     console.log(err)
  // })
}