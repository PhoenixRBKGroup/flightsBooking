import React from "react";
import ReactDOM from "react-dom";
import Departure from "../departure/departure.js";
import Arrival from "../arrival";
const axios = require("axios");


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      arrival: "",
      dateDeparture: "",
      dateArrival: "",
    };
  }
  submit = () => {
    axios({
      method: "GET",
      url:
        "https://api.flightapi.io/onewaytrip/5f0aed5adb9e9a675a0ec225/LOND/LAX/2020-10-11/2/0/1/Economy/USD",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Departure />
        <br />
        <br />
        <Arrival />
        <br />
        <br />
        <input type="date" name="date" />
        <button onClick={() => this.submit()}>submit</button>
      </div>
    );
  }
}

export default AppComponent;
