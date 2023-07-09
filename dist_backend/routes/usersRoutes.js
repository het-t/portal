"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userCount = _interopRequireDefault(require("../controllers/userCount.js"));
var _userCreate = _interopRequireDefault(require("../controllers/userCreate.js"));
var _userEdit = _interopRequireDefault(require("../controllers/userEdit.js"));
var _userList = _interopRequireDefault(require("../controllers/userList.js"));
var _userData = _interopRequireDefault(require("../controllers/userData.js"));
var _userDelete = _interopRequireDefault(require("../controllers/userDelete.js"));
var _userRightsList = _interopRequireDefault(require("../controllers/userRightsList.js"));
var _roleList = _interopRequireDefault(require("../controllers/roleList.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/count', _userCount["default"]);
router.get('/rights', _userRightsList["default"]);
router.get('/:id', _userData["default"]);
router.get('/', _userList["default"]);
router.post('/', _userCreate["default"]);
router.put('/:id', _userEdit["default"]);
router["delete"]('/:id', _userDelete["default"]);
//
router.get('/get-roles', _roleList["default"]);
var _default = router;
exports["default"] = _default;