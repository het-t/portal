"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit client
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var editClient = function editClient(req, res, next) {
  var _req$query = req.query,
    clientId = _req$query.clientId,
    clientName = _req$query.clientName,
    clientTypeId = _req$query.clientTypeId,
    cin = _req$query.cin,
    firmName = _req$query.firmName,
    firmAddress = _req$query.firmAddress,
    caEmail = _req$query.caEmail,
    caPan = _req$query.caPan,
    conName = _req$query.conName,
    conEmail = _req$query.conEmail,
    conPhone = _req$query.conPhone;
  (0, _index["default"])("clients_master_edit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, clientId, clientName, cin, clientTypeId, firmName, firmAddress, caPan, caEmail, conName, conEmail, conPhone]).then(function () {
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 14,
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
var _default = editClient;
exports["default"] = _default;