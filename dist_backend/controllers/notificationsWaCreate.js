"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createWaNotification;
var _index = _interopRequireDefault(require("../db/index.js"));
var _xlsx = _interopRequireDefault(require("xlsx"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function createWaNotification(req, res) {
  var _req$files, _req$files$;
  var _req$body = req.body,
    content = _req$body.content,
    userRule = _req$body.userRule,
    clientRule = _req$body.clientRule,
    custom = _req$body.custom,
    consent = _req$body.consent;
  if (req.files.length === 0) {
    (0, _index["default"])('notifications_wa_add(?, ?, ?, ?, ?, ?, ?)', [req.userId, req.orgId, userRule, clientRule, custom === 'false' ? 0 : 1, content, consent === 'false' ? 0 : 1]).then(function () {
      res.sendStatus(200);
    })["catch"](function (err) {
      console.log(err);
      (0, _index["default"])("logs_add(?, ?, ?, ?, ?)", [req.userId, 57, 24, null, [err]])["catch"](function (err) {
        return console.log(err);
      });
      res.sendStatus(500);
    });
  } else if (((_req$files = req.files) === null || _req$files === void 0 ? void 0 : (_req$files$ = _req$files[0]) === null || _req$files$ === void 0 ? void 0 : _req$files$.mimetype) === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    var workbook = _xlsx["default"].readFile(req.files[0].path);
    var sheet = workbook.Sheets[workbook.SheetNames[0]];
    var rows = JSON.stringify(_xlsx["default"].utils.sheet_to_json(sheet));
    (0, _index["default"])('notifications_wa_add_from_file(?, ?, ?, ?, ?)', [req.userId, req.orgId, content, rows, consent === 'false' ? 0 : 1]).then(function () {
      return res.sendStatus(200);
    })["catch"](function (err) {
      console.log(err);
      (0, _index["default"])("logs_add(?, ?, ?, ?, ?)", [req.userId, 57, 24, null, [err]])["catch"](function (err) {
        return console.log(err);
      });
      res.sendStatus(500);
    })["finally"](function () {
      _fs["default"].rm(req.files[0].path, function (err) {
        if (err) console.log(err);
      });
    });
  } else {
    res.sendStatus(400);
  }
}