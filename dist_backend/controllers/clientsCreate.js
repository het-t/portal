"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createClient;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * create client
 * @param {*} req 
 * @param {*} res 
 */

function createClient(req, res) {
  var _req$body$params = req.body.params,
    clientName = _req$body$params.clientName,
    clientTypeId = _req$body$params.clientTypeId,
    cin = _req$body$params.cin,
    firmName = _req$body$params.firmName,
    firmAddress = _req$body$params.firmAddress,
    caEmail = _req$body$params.caEmail,
    caPan = _req$body$params.caPan,
    conName = _req$body$params.conName,
    conEmail = _req$body$params.conEmail,
    conPhone = _req$body$params.conPhone,
    status = _req$body$params.status;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "clients_master_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, clientName, cin, clientTypeId, firmName, firmAddress, caPan, caEmail, conName, conEmail, conPhone, status]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 13,
    //activityId
    3,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}