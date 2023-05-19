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
var _roleList = _interopRequireDefault(require("../controllers/roleList.js"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/create-user', _auth["default"], _userCreate["default"], _sendResponse["default"]);
router.get('/', _auth["default"], _userList["default"], _sendResponse["default"]);
router.get('/get-roles', _auth["default"], _roleList["default"], _sendResponse["default"]);
router.get('/edit', _auth["default"], _userData["default"], _sendResponse["default"]);
router.post('/edit-user', _auth["default"], _userEdit["default"], _sendResponse["default"]);
router.get('/count', _auth["default"], _userCount["default"], _sendResponse["default"]);
router.post('/delete-user', _auth["default"], _userDelete["default"], _sendResponse["default"]);
var _default = router;
exports["default"] = _default;