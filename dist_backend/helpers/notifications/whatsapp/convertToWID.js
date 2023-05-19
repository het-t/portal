"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var convertToWid = function convertToWid(contactNo) {
  contactNo = contactNo.replace(/[+\s]/g, '');
  if (contactNo.length == 10) contactNo = "91".concat(contactNo);
  if (contactNo.indexOf('@') == -1) contactNo = "".concat(contactNo, "@c.us");
  return contactNo;
};
var _default = convertToWid;
exports["default"] = _default;