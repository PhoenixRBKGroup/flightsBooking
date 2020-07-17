const express = require("express");
const bodyParser = require("body-parser");
var UserScema = require("./Database/db.js");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(express.json());
var port = process.env.PORT || 5001;
app.use("/", express.static(path.join(__dirname, "/client/build")));
app.use(cors());
//-------------------------------------------------------------
//for homepage form reactjs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
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
  console.log("server", req.body);
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
app.get("/api/users/:name", function (req, res) {
  var search = req.params.name;
  console.log(search);
  UserScema.find({ name: search }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    res.send(docs);
    console.log("done", docs);
  });
});
//---------------------------------------
//delete user by name
app.delete("/api/users/:name", function (req, res) {
  UserScema.remove({ name: req.params.name }, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(req.body);
    res.end();
  });
});
//---------------------------------------------
app.post("/signin", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  UserScema.find({ email: email, password: password })
    .then((result) => {
      console.log(result[0].name);
      res.status(202).send(result[0].name);

      // console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(err);
    });
});
app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});

app.get("/api/users/:email", function (req, res) {
  var search = req.params.email;
  console.log(search);
  UserScema.find({ email: search }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    res.send(docs);
    console.log("done", docs);
  });
});
