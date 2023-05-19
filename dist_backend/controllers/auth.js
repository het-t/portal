"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * authenticate user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var auth = function auth(req, res, next) {
  _jsonwebtoken["default"].verify(req.signedCookies._token, 'secert', function (err, decoded) {
    if (err) {
      res.sendStatus(403);
    } else {
      req.userId = decoded.userId;
      req.orgId = decoded === null || decoded === void 0 ? void 0 : decoded.orgId;
      next();
    }
  });
};
var _default = auth;
exports["default"] = _default;