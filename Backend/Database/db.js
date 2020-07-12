var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/FlyBookingDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

var userScema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: String,
});

let UserScema = mongoose.model("user", userScema);

module.exports = UserScema;
