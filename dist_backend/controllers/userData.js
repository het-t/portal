"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getData;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get user data to show in edit user screen
 * @param {*} req 
 * @param {*} res 
 */

function getData(req, res) {
  var userId = req.params.id;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "users_user_data(?, ?)", [req.userId, userId]).then(function (results) {
    res.send(results[0]);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 25,
    //activityId
    15,
    //tableid
    userId,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}