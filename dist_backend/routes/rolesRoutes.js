"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _roleCreate = _interopRequireDefault(require("../controllers/roleCreate.js"));
var _roleEdit = _interopRequireDefault(require("../controllers/roleEdit.js"));
var _roleDelete = _interopRequireDefault(require("../controllers/roleDelete.js"));
var _roleData = _interopRequireDefault(require("../controllers/roleData.js"));
var _roleCount = _interopRequireDefault(require("../controllers/roleCount.js"));
var _roleList = _interopRequireDefault(require("../controllers/roleList.js"));
var _rightsList = _interopRequireDefault(require("../controllers/rightsList.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/create-role', _auth["default"], _roleCreate["default"], _sendResponse["default"]);
router.get('/', _auth["default"], _roleList["default"], _sendResponse["default"]);
router.post('/delete-role', _auth["default"], _roleDelete["default"], _sendResponse["default"]);
router.get('/edit-role', _auth["default"], _roleData["default"], _sendResponse["default"]);
router.get('/count', _auth["default"], _roleCount["default"], _sendResponse["default"]);
router.post('/edit-role', _auth["default"], _roleEdit["default"], _sendResponse["default"]);
router.get('/get-rights', _auth["default"], _rightsList["default"], _sendResponse["default"]);
var _default = router;
exports["default"] = _default;