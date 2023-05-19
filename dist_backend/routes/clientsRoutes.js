"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _clientsTypes = _interopRequireDefault(require("../controllers/clientsTypes.js"));
var _clientsCreate = _interopRequireDefault(require("../controllers/clientsCreate.js"));
var _clientsEdit = _interopRequireDefault(require("../controllers/clientsEdit.js"));
var _clientsList = _interopRequireDefault(require("../controllers/clientsList.js"));
var _clientsCount = _interopRequireDefault(require("../controllers/clientsCount.js"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
var _clientsDelete = _interopRequireDefault(require("../controllers/clientsDelete.js"));
var _clientsTag = _interopRequireDefault(require("../controllers/clientsTag.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/types', _auth["default"], _clientsTypes["default"], _sendResponse["default"]);
router.get('/create-client', _auth["default"], _clientsCreate["default"], _sendResponse["default"]);
router.get('/', _auth["default"], _clientsList["default"], _sendResponse["default"]);
router.get('/count', _auth["default"], _clientsCount["default"], _sendResponse["default"]);
router.get('/edit-client', _auth["default"], _clientsEdit["default"], _sendResponse["default"]);
router.post('/delete-client', _auth["default"], _clientsDelete["default"], _sendResponse["default"]);
router.post('/tag', _auth["default"], _clientsTag["default"]);
var _default = router;
exports["default"] = _default;