"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = clientsTag;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function clientsTag(req, res) {
  var clientId = req.body.id;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, 'clients_master_change_tag(?, ?, ?)', [req.userId, clientId, req.body.tagId]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 66,
    //activityId
    3,
    //tableid
    clientId,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}