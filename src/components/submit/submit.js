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
          "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO/JFK-sky/2020-09-01",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key": "c8d544a811mshc700b88f27c3a80p18b95bjsnd6e8e3db1374",
          useQueryString: true,
        },
        params: {
          inboundpartialdate: "2020-12-01",
        },
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
          <button onClick={console.log(this.props.state)}>submit</button>
        </div>
      );
    }
  }
  
  export default AppComponent;
  