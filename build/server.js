"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

require("./db");

var _User = _interopRequireDefault(require("./model/User"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());

_dotenv["default"].config();

app.post("/signUp", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var jobCategory, email, password, companyEmail, isCurrency, isChoiceYear, isUser, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            jobCategory = req.query.jobCategory;
            email = req.query.email;
            password = req.query.password;
            companyEmail = req.query.companyEmail;
            isCurrency = req.query.isCurrency;
            isChoiceYear = req.query.isChoiceYear; //user가 있는지 확인하는 것

            _context.next = 9;
            return _User["default"].findOne({
              email: email
            });

          case 9:
            isUser = _context.sent;

            if (!isUser) {
              _context.next = 15;
              break;
            }

            isUser.save();
            res.redirect("http://localhost:3000/SignIn");
            _context.next = 21;
            break;

          case 15:
            _context.next = 17;
            return _User["default"].create({
              jobCategory: jobCategory,
              email: email,
              password: password,
              companyName: companyEmail,
              monetaryUnit: isCurrency,
              establishment: isChoiceYear
            });

          case 17:
            newUser = _context.sent;
            console.log(isUser);
            console.log("newUser", newUser);

            if (isUser || isUser) {
              res.redirect("http://localhost:3000/SignUpSuccess");
            } else {
              res.redirect("http://localhost:3000/SignUpFail");
            }

          case 21:
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 23]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(process.env.PORT, function () {
  console.log("\u2705 Listening on Server: http://localhost:".concat(process.env.PORT));
});