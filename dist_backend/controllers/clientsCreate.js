"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * create client
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var createClient = function createClient(req, res, next) {
  var _req$query = req.query,
    clientName = _req$query.clientName,
    clientTypeId = _req$query.clientTypeId,
    cin = _req$query.cin,
    firmName = _req$query.firmName,
    firmAddress = _req$query.firmAddress,
    caEmail = _req$query.caEmail,
    caPan = _req$query.caPan,
    conName = _req$query.conName,
    conEmail = _req$query.conEmail,
    conPhone = _req$query.conPhone,
    status = _req$query.status;
  (0, _index["default"])("clients_master_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, clientName, cin, clientTypeId, firmName, firmAddress, caPan, caEmail, conName, conEmail, conPhone, status]).then(function (results) {
    var resKey = 'clientCreated';
    var resData = results[0].clientId;
    if (_typeof(req === null || req === void 0 ? void 0 : req.logs) == "object") {
      req.logs.push({
        resKey: resKey,
        resData: resData
      });
    } else {
      req.logs = [{
        resKey: resKey,
        resData: resData
      }];
    }
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 13,
    //activityId
    3,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = createClient;
exports["default"] = _default;