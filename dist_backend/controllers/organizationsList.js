"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = organizationsList;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function organizationsList(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, 'organizations_list(?)', [req.userId]).then(function (results) {
    res.send({
      'orgsList': results
    });
  })["catch"](function (err) {
    res.sendStatus(500);
  })["finally"](function () {
    connection.end();
  });
}