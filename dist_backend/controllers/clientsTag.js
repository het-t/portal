"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = clientsTag;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function clientsTag(req, res) {
  var clientId = req.body.params.id;
  (0, _index["default"])('clients_master_change_tag(?, ?, ?)', [req.userId, clientId, req.body.params.tagId]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 66,
    //activityId
    3,
    //tableid
    clientId,
    //tablePkId
    [err] //details
    ]);

    res.sendStatus(500);
  });
}