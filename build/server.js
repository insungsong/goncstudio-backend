"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

require("./db");

var _User = _interopRequireDefault(require("./model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());

_dotenv["default"].config();

app.post("/signUp", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var jobCategory, email, password, companyEmail, isCurrency, isChoiceYear, isUser, newUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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