"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//.env에 접근하기 위해 사용
_dotenv["default"].config();

_mongoose["default"].connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;

var handleOpenDB = function handleOpenDB() {
  console.log("\u2705 connect to DB");
};

var handleError = function handleError(error) {
  console.log("\uD83D\uDE22Error on DB Connection:".concat(error));
};

db.once("open", handleOpenDB);
db.on("error", handleError);