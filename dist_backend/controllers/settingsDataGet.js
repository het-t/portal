"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = settingsDataGet;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function settingsDataGet(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "settings_get(?, ?)", [req.userId, parseInt(req.query.pageId)]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 51, 27, null, [err]]);
  })["finally"](function () {
    connection.end();
  });
}