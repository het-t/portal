"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _default(orgId, usecase) {
  var user = "session-admin-".concat(orgId);
  var folderPath = "./auth-".concat(usecase);
  var subFolders = _fs["default"].readdirSync(folderPath, {
    withFileTypes: true
  }).filter(function (dirent) {
    return dirent.isDirectory();
  }).map(function (dirent) {
    return dirent.name;
  });

  // Filter the list to find the folders that belong to the specific user
  var userFolders = subFolders.filter(function (folderName) {
    return folderName.startsWith(user);
  });

  // Determine the latest folder created by that user
  var latestFolder = userFolders.reduce(function (latest, folderName) {
    var folderStat = _fs["default"].statSync(_path["default"].join(folderPath, folderName));
    var latestStat = _fs["default"].statSync(_path["default"].join(folderPath, latest));
    return folderStat.birthtimeMs > latestStat.birthtimeMs ? folderName : latest;
  }, userFolders[0]);
  if (latestFolder) latestFolder = latestFolder.replace('session-', '');
  return latestFolder;
}