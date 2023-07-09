"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = editClient;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit client
 * @param {*} req 
 * @param {*} res 
 */

function editClient(req, res) {
  var _req$body$params = req.body.params,
    clientId = _req$body$params.clientId,
    clientName = _req$body$params.clientName,
    clientTypeId = _req$body$params.clientTypeId,
    cin = _req$body$params.cin,
    firmName = _req$body$params.firmName,
    firmAddress = _req$body$params.firmAddress,
    caEmail = _req$body$params.caEmail,
    caPan = _req$body$params.caPan,
    conName = _req$body$params.conName,
    conEmail = _req$body$params.conEmail,
    conPhone = _req$body$params.conPhone;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "clients_master_edit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, clientId, clientName, cin, clientTypeId, firmName, firmAddress, caPan, caEmail, conName, conEmail, conPhone]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 14,
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