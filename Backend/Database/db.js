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
  Name: String,
  Password: String,
  Email: String,
});

let UserScema = mongoose.model("user", userScema);

module.exports = UserScema;
