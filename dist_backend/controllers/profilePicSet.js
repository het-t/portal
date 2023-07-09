"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setProfilePic;
var _index = _interopRequireDefault(require("../db/index.js"));
var _resizeImage = _interopRequireDefault(require("../helpers/resizeImage.js"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
function setProfilePic(req, res) {
  var fileName = "".concat(req.userId, "_").concat(req.orgId);
  var tempPath = _path["default"].join(__dirname, '../uploads/temp');
  var fileData = _fs["default"].readFileSync("".concat(tempPath, "/").concat(req.file.filename));
  fileData = Buffer.from(fileData, 'base64');
  var ext = 'txt';
  var picPath = _path["default"].join(__dirname, '../uploads/pics/users', fileName);
  var connection = (0, _conDb["default"])();
  Promise.all([(0, _resizeImage["default"])(fileData, 100, 100, "".concat(picPath, "_100x100.").concat(ext)), (0, _resizeImage["default"])(fileData, 50, 50, "".concat(picPath, "_50x50.").concat(ext))]).then(function () {
    return (0, _index["default"])(connection, "settings_set(?, ?)", [req.userId, JSON.stringify({
      "key": 7,
      "value": fileName
    })]);
  }).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 52, 27, 7, [err]]);
  })["finally"](function () {
    _fs["default"].rm(_path["default"].join(tempPath, req.file.filename), function (err) {
      if (err) console.log(err);
      connection.end();
    });
  });
}