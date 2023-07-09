"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = organizationsCount;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function organizationsCount(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, 'organizations_count(?)', [req.userId]).then(function (results) {
    return res.send({
      count: results[0].count
    });
  })["catch"](function (err) {
    res.sendStatus(500);
  })["finally"](function () {
    connection.end();
  });
}