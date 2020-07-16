import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import Signup from "./components/signup/signup.js";
import Signin from "./components/signin/signin.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
