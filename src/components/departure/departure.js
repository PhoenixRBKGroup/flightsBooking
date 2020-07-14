import React, { useState, Component } from "react";
import Arrival from "../arrival";
import ReactDOM from "react-dom";
const airports = require("airport-data");


var airportName = [];
airports.map((element) => {
  var elements = [element.country, element.name, element.iata].join(" ");
  airportName.push(elements);
});

class Departure extends React.Component {
  constructor(props) {
    super(props);
    this.items = airportName;
    this.state = {
      suggestions: [],
      departure: "",
      arrival: "",
      depDate: "",
      value: "",
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

  render() {
    return (
      <div>
        <input
          value={this.state.departure}
          onChange={this.onTextChanged}
          type="text"
          name="departure"
        />
        {this.renderSuggestions()}
        <input
          type="date"
          name="depDate"
          value={this.state.depDate}
          onChange={this.handleChange.bind(this)}
          onChange={this.handleChanges}
        ></input>
        <Arrival data={this.state} />
        <button
          onClick={() => {
            console.log(this.state.suggestions);
          }}
        >
          deportt
        </button>
      </div>
    );
  }
}

export default Departure;
