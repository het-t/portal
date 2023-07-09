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
var _clientsDelete = _interopRequireDefault(require("../controllers/clientsDelete.js"));
var _clientsTag = _interopRequireDefault(require("../controllers/clientsTag.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/types', _clientsTypes["default"]);
router.get('/count', _clientsCount["default"]);
router.get('/', _clientsList["default"]);
router.post('/', _clientsCreate["default"]);
router.put('/:id', _clientsEdit["default"]);
router.patch('/:id', _clientsTag["default"]);
router["delete"]('/:id', _clientsDelete["default"]);
var _default = router;
exports["default"] = _default;