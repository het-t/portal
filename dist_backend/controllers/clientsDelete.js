"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var deleteClient = function deleteClient(req, res, next) {
  var clientId = req.body.params.clientId;
  (0, _index["default"])("clients_master_delete(?, ?)", [req.userId, clientId]).then(function () {
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 29,
    //activityId
    3,
    //tableid
    clientId,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = deleteClient;
exports["default"] = _default;