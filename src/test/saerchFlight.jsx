import React from "react";
const axios = require("axios");

class AppComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocation: "",
      id: "",
      loc: "",
    };
  }

  getLocation() {
    axios({
      method: "GET",
      url:
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "85e53cb1c3mshad66830f9fbfb7ep15d454jsnfb85dc92d3c9",
        useQueryString: true,
      },
      params: {
        query: this.state.searchLocation,
      },
    })
      .then((response) => {
        this.setState({ loc: response.data.Places });
        console.log();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.getLocation();
  }
  check = () => {
    console.log(this.state.loc);
  };
  handellist = () => {
    const { loc } = this.state.loc;

    return (
      <ul>
        {loc.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="searchLocation"
          value={this.state.searchLocation}
          onChange={this.handleChange.bind(this)}
        />
        {this.handellist.bind(this)}
        {this.getLocation.bind(this)}
        <button onClick={this.handellist.bind(this)}>submit</button>
      </div>
    );
  }
}

export default AppComponent4;
