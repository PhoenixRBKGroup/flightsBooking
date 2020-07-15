import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
const airports = require("airport-data");
const axios = require("axios");
// import Table from 'react-bootstrap/Table'

var airportName = [];
airports.map((element) => {
  var elements = [element.city, element.name, element.iata].join(" ");
  airportName.push(elements);
});

class Departure extends React.Component {
  constructor(props) {
    super(props);
    this.items = airportName;
    this.state = {
      suggestions: [],
      suggestions2: [],
      departure: "",
      arrival: "",
      depDate: "",
      arrDate: "",
      dataTicket: [],
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, departure: value }));
  };
  suggestionSelected(value) {
    this.setState(() => ({
      departure: value,
      suggestions: [],
    }));
    var code = value.slice(value.length - 3);
    this.setState({ depCode: code });
    console.log(this.state);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.slice(0, 5).map((item, i) => (
          <li key={i} onClick={() => this.suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  //----------------------------------------------------------------------
  onTextChanged2 = (e) => {
    const value = e.target.value;
    let suggestions2 = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions2 = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions2, arrival: value }));
  };
  suggestionSelected2(value) {
    this.setState(() => ({
      arrival: value,
      suggestions2: [],
    }));
  }

  renderSuggestions2() {
    const { suggestions2 } = this.state;
    if (suggestions2.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions2.slice(0, 5).map((item, i) => (
          <li key={i} onClick={() => this.suggestionSelected2(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  //--------------------------------------------------------
  submit = () => {
    var depcode = this.state.departure.slice(this.state.departure.length - 3);
    var arrcode = this.state.arrival.slice(this.state.arrival.length - 3);
    console.log(this.state.depDate);
    axios({
      method: "GET",
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${depcode}/${arrcode}/${this.state.depDate}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "c8d544a811mshc700b88f27c3a80p18b95bjsnd6e8e3db1374",
        useQueryString: true,
      },
      params: {
        inboundpartialdate: this.state.arrDate,
      },
    })
      .then((response) => {
        // this.state.dataTicket.push(response.data);
        // const arr = this.state.dataTicket;
        console.log("dddd", response.data);
        this.setState({
          dataTicket: response.data.Quotes,
        });
        // console.log("++", this.state.dataTicket);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //--------------------------------------------------------

  render() {
    const data = this.state.dataTicket;
    const table1 = data.map((item) => (
      <div>
        <form>
          <table id="info">
            <tbody>
              <tr>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.QuoteId}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.Direct.toString()}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.MinPrice}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.OutboundLeg.DepartureDate}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.QuoteDateTime}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    ));
    // console.log( '++',data);
    return (
      <div className="main">
        <div>
          <input
            className="input"
            value={this.state.departure}
            onChange={this.onTextChanged}
            type="text"
            name="departure"
          />
          {this.renderSuggestions()}
          <input
            className="input"
            type="date"
            value={this.state.depDate}
            onChange={this.handleChange}
            name="depDate"
          />
        </div>
        <input
          className="input"
          value={this.state.arrival}
          onChange={this.onTextChanged2}
          type="text"
          name="arrival"
        />
        {this.renderSuggestions2()}
        <input
          className="input"
          type="date"
          value={this.state.arrDate}
          onChange={this.handleChange}
          name="arrDate"
        />
        <button onClick={() => this.submit()}>Check</button>
        <br></br>
        <br></br>
        <div>
          <table>
            <tbody>
              <tr>
                <td style={{ width: "50px", padding: "20px" }}>ID </td>
                <td style={{ width: "50px", padding: "20px" }}>Direct </td>
                <td style={{ width: "100px", padding: "20px" }}>
                  MinPrice '$'
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  Departure Date{" "}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  Quote Date Time{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <br></br>
          {table1}
        </div>
      </div>
    );
  }
}

export default Departure;
