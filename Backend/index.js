const express = require("express");
const bodyParser = require("body-parser");
var UserScema = require("./Database/db.js");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
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
app.get("/signin/:email", (req, res) => {
  UserScema.find({ email: req.params.email })
    .then((result) => {
      if (!result[0].email) {
        console.log("Wrong email");
      }

      res.status(202).send(result[0].password);
      console.log(result[0].password);
    })
    .catch((err) => {
      res.status(404).send();
    });
});
app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});
