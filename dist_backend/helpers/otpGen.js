"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = otpGen;
var _otpGenerator = require("otp-generator");
function otpGen() {
  return (0, _otpGenerator.generate)(5, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: true,
    specialChars: false,
    digits: true
  });
}