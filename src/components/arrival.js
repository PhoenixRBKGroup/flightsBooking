import React from "react";
import ReactDOM from "react-dom";
import { type } from "jquery";
const airports = require("airport-data");

var airportName = [];
airports.map((element) => {
  airportName.push(element.name);
});

class Arrival extends React.Component {
  constructor() {
    super();
    this.items = airportName;
    this.state = {
      suggestions: [],
      arrival: "",
    };
  }
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, arrival: value }));
  };
  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
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
          value={this.state.arrival}
          onChange={this.onTextChanged}
          type="text"
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default Arrival;
