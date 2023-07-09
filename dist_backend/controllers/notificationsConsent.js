"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setNotificationConsent;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function setNotificationConsent(req, res) {
  var _req$body$params = req.body.params,
    ntfId = _req$body$params.ntfId,
    consent = _req$body$params.consent;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, 'notifications_set_consent(?, ?, ?, ?)', [req.userId, 0, ntfId, consent]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 63, 24, ntfId, [err]]);
  })["finally"](function () {
    connection.end();
  });
}