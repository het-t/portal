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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/count', _roleCount["default"]);
router.get('/:id', _roleData["default"]);
router.get('/', _roleList["default"]);
router.post('/', _roleCreate["default"]);
router.put('/:id', _roleEdit["default"]);
router["delete"]('/:id', _roleDelete["default"]);
var _default = router;
exports["default"] = _default;