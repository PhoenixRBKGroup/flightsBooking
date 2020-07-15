import React from "react";
import { Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import HomePage from "./components/HomePage/HomePage.js";
import Signin from "./components/signIn/signIn.js";
import Signup from "./components/signUp/signUP.js";

// import AppComponent from "./test/saerchFlight.jsx";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
    </Switch>
=======
import Signin from "./components/signin/signin.js"

function App() {
  return (
    <div className="App">
      <h1>Hi Rula</h1>
      <Signin/>
    </div>
>>>>>>> origin/master
  );
}

export default App;
