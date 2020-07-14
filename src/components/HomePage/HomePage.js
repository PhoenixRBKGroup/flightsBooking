import React from "react";
import ReactDOM from "react-dom";
import Departure from "../departure/departure.js";
import Arrival from "../arrival";
const axios = require("axios");

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(data) {
    this.setState(this.setState({ message: data }));
  }
  callbackFunction = (childData) => {
    this.setState({ message: childData });
    console.log(this.state.message);
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Departure onChange={(value) => alert(value)} />
      </div>
    );
  }
}

export default AppComponent;
