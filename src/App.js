import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/signin/signin.js"
import HomePage from "./components/homepage/home";
//  [e.target.id]: e.target.checked
function App() {
  return (
    <div className="App">
      <h1>Hi Rula</h1>
      <Signin/>
      <HomePage/>
    </div>
  );
}

export default App;
