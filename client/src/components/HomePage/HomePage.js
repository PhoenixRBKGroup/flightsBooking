import React from "react";
import Navbar from "../NavBar/NavBar.js";
import "./style.css";
const airports = require("airport-data");
const axios = require("axios");

var airportName = [];
var airportcode = [];
airports.map((element) => {
  var elements = [element.city, element.name, element.iata].join(" ");
  var elm = { name: element.name, code: element.iata };
  airportcode.push(elm);
  return airportName.push(elements);
});

class HomePage extends React.Component {
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
      trip: "",
      dataRn: [],
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
          <li
            className="item-list"
            key={i}
            onClick={() => this.suggestionSelected(item)}
          >
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
      <ul className="list">
        {suggestions2.slice(0, 5).map((item, i) => (
          <li
            className="item-list"
            key={i}
            onClick={() => this.suggestionSelected2(item)}
          >
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
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${depcode}/${arrcode}/${this.state.depDate}?inboundpartialdate=${this.state.arrDate}`,
      headers: {
        // "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "c8d544a811mshc700b88f27c3a80p18b95bjsnd6e8e3db1374",
        // useQueryString: true,
      },
    })
      .then((response) => {
        this.setState({
          dataTicket: response.data,
        });
      })
      .then(() => {
        if (this.state.dataTicket.length === 0) {
          this.setState({
            trip: "There are no flights available on this date",
          });
        } else {
          this.setState({
            trip: "",
          });
          var data = [];
          for (var i = 0; i < this.state.dataTicket.Quotes.length; i++) {
            data.push({
              cost: this.state.dataTicket.Quotes[i].MinPrice,
              Carrier: this.state.dataTicket.Quotes[i].OutboundLeg
                .CarrierIds[0],
              DepartureDate: this.state.dataTicket.Quotes[i].QuoteDateTime,
            });
          }
          for (var k = 0; k < data.length; k++) {
            for (var j = 0; j < this.state.dataTicket.Carriers.length; j++) {
              if (
                this.state.dataTicket.Carriers[j].CarrierId === data[k].Carrier
              ) {
                console.log(data[k].Carrier);
                data[k].Carrier = this.state.dataTicket.Carriers[j].Name;
              }
            }
          }

          for (var l = 0; l < data.length; l++) {
            data[l].DepartureDate = data[l].DepartureDate.split("T");
          }
          this.setState({ dataRn: data });

          console.log(this.state.dataRn);

          // console.log(this.state.dataTicket);
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          trip: "There are no flights available on this date",
        });
      });
  };
  //--------------------------------------------------------

  render() {
    const data = this.state.dataRn;

    const table1 = data.map((item, i) => (
      <form>
        <div className="container">
          <lab className="Carrier">{item.Carrier}</lab>
          <span className="date">
            <label className="date">{item.DepartureDate[0]}</label>
            <br />
            <label className="hours">{item.DepartureDate[1]}</label>
          </span>
          <span id="price" className="wholePrice">
            <label id="price"> price </label>
            <h1 className="pricem">{item.cost}</h1>
          </span>
        </div>
      </form>
      // <div>
      //   <form>
      //     <table id="info">
      //       <tbody  >
      //         <tr  >
      //           <td  style={{ width: "50px", padding: "20px" }}>
      //             {item.QuoteId}
      //           </td>
      //           <td  style={{ width: "50px", padding: "20px" }}>
      //             {item.Direct.toString()}
      //           </td>
      //           <td    style={{ width: "50px", padding: "20px" }}>
      //             {item.MinPrice}
      //           </td>
      //           <td    style={{ width: "50px", padding: "20px" }}>
      //             {item.OutboundLeg.DepartureDate}
      //           </td>
      //           <td   style={{ width: "50px", padding: "20px" }}>
      //             {item.QuoteDateTime}
      //           </td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </form>
      // </div>
    ));
    return (
      <div>
        <Navbar />
        <div className="main">
          <label>Depart</label>
          <input
            className="from input1"
            value={this.state.departure}
            onChange={this.onTextChanged}
            type="text"
            name="departure"
          />
          {this.renderSuggestions()}
          <label>From</label>

          <input
            className="depart input1"
            type="date"
            value={this.state.depDate}
            onChange={this.handleChange}
            name="depDate"
          />
          <br></br>
          <label>Return</label>
          <input
            className="to input1"
            value={this.state.arrival}
            onChange={this.onTextChanged2}
            type="text"
            name="arrival"
          />
          {this.renderSuggestions2()}
          <label>To</label>
          <input
            className="return input1"
            type="date"
            value={this.state.arrDate}
            onChange={this.handleChange}
            name="arrDate"
          />
          <br />
          <button className="check_button" onClick={() => this.submit()}>
            Check
          </button>
          <br></br>
          {this.state.trip}
          <br></br>
          {table1}
        </div>
      </div>
    );
  }
}

export default HomePage;
