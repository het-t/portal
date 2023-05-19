"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = organizationsCount;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function organizationsCount(req, res) {
  (0, _index["default"])('organizations_count(?)', [req.userId]).then(function (results) {
    return res.send({
      'count': results[0].count
    });
  })["catch"](function (err) {
    console.log(err);
    res.sendStatus(500);
  });
}