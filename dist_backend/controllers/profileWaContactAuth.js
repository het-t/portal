"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sendWaAuthOtp;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
var _convertToWID = _interopRequireDefault(require("../helpers/notifications/whatsapp/convertToWID.js"));
var _otpGen = _interopRequireDefault(require("../helpers/otpGen.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function sendWaAuthOtp(req, res) {
  var otp = (0, _otpGen["default"])();
  var wid = (0, _convertToWID["default"])(req.query.value);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, 'authentications_wid(?, ?, ?, ?)', [req.userId, req.orgId, wid, otp]).then(function () {
    return res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 60, 23, null, [err]]);
  })["finally"](function () {
    connection.end();
  });
}