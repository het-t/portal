"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getProfilePic;
var _index = _interopRequireDefault(require("../db/index.js"));
var fs = _interopRequireWildcard(require("fs/promises"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getProfilePic(req, res) {
  var _req$query = req.query,
    width = _req$query.width,
    height = _req$query.height,
    userId = _req$query.userId;
  userId == -1 ? userId = req.userId : userId = userId;
  (0, _index["default"])("users_settings_profile_pic_get(?, ?)", [req.userId, userId]).then(function (results) {
    if ((results === null || results === void 0 ? void 0 : results.length) == 0) throw 'NO_PROFILE_PIC_FOUND';
    var filePath = "./uploads/pics/users/".concat(results[0].picPath, "_").concat(width, "x").concat(height, ".txt");
    return fs.readFile(filePath);
  }).then(function (data) {
    res.send({
      dim: "".concat(userId, "_").concat(width, "x").concat(height),
      data: "data:image/jpeg;base64,".concat(data)
    });
  })["catch"](function (err) {
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 55, 27, 7, [err]])["catch"](function (err) {
      return console.log(err);
    });
    if (err == 'NO_PROFILE_PIC_FOUND') res.sendStatus(404);else res.sendStatus(500);
  });
}