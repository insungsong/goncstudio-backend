"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var UserSchema = new _mongoose["default"].Schema({
  jobCategory: String,
  email: String,
  password: String,
  companyName: String,
  monetaryUnit: String,
  establishment: String
});

var model = _mongoose["default"].model("User", UserSchema);

var _default = model;
exports["default"] = _default;