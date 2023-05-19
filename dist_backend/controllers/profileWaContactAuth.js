"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sendWaAuthOtp;
var _index = _interopRequireDefault(require("../db/index.js"));
var _convertToWID = _interopRequireDefault(require("../helpers/notifications/whatsapp/convertToWID.js"));
var _otpGen = _interopRequireDefault(require("../helpers/otpGen.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function sendWaAuthOtp(req, res) {
  var otp = (0, _otpGen["default"])();
  var wid = (0, _convertToWID["default"])(req.query.value);
  (0, _index["default"])('authentications_wid(?, ?, ?, ?)', [req.userId, req.orgId, wid, otp]).then(function () {
    return res.sendStatus(200);
  })["catch"](function (err) {
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 60, 23, null, [err]])["catch"](function (err) {
      return console.log(err);
    });
    res.sendStatus(500);
  });
}