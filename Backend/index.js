const express = require("express");
const bodyParser = require("body-parser");
var UserScema = require("./Database/db.js");
const path = require("path");
const app = express();
app.use(express.json());
var port = process.env.PORT || 3800;
app.use(express.static(path.join(__dirname, "build")));

//-------------------------------------------------------------
//for homepage form reactjs
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//-----------------------------------------------
// Get Users from DataBase
app.get("/api/users", function (req, res) {
  UserScema.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    }
    res.send(docs);
    console.log("done", docs);
  });
});
//-------------------------------------------------------
// Add Users to DataBase
app.post("/api/users", function (req, res) {
  console.log(req.body);
  var newUser = new UserScema(req.body);
  console.log(newUser);
  newUser.save(function (err, data) {
    if (err) {
      res.sendStatus(500);
      res.end();
    } else {
      console.log("done");
      res.end();
    }
  });
});
//-------------------------------------------------------
//search for 1 user
app.get("/api/users/:Name", function (req, res) {
  var search = req.params.Name;
  console.log(search);
  UserScema.find({ Name: search }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    res.send(docs);
    console.log("done", docs);
  });
});
//---------------------------------------
//delete user by name
app.delete("/api/users/:Name", function (req, res) {
  UserScema.remove({ Name: req.params.Name }, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(req.body);
    res.end();
  });
});

app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});
