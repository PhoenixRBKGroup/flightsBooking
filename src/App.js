import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/signIn/signIn.js";
import Signup from "./components/signUp/signUP.js";
function App() {
  return (
    <div>
      <Signup />
      <br />
      <Signin />
    </div>
  );
}

export default App;
