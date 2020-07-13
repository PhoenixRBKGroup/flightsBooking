import React from "react";
import ReactDOM from "react-dom";
import { type } from "jquery";
import Arrival from "../arrival";
const airports = require("airport-data");
console.log(airports[0]);

var airportName = [];
airports.map((element) => {
  var elements = [element.country, element.name, element.iata].join(" ");
  airportName.push(elements);
});


class Departure extends React.Component {
  constructor() {
    super();
    this.items = airportName;
    this.state = {
      suggestions: [],
      departure: "",
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
        />
        {this.renderSuggestions()}
        <Arrival>{this.props.departure}</Arrival>
      </div>
    );
  }
}

export default Departure;

