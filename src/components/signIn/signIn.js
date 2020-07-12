import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
const axios = require("axios");

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:3800/signin/${this.state.email}`)
      .then((result) => {
        console.log("password ", result.data);

        if (result.data == this.state.password) {
          console.log("welcome");
          alert("you have been sucessfully signed up!");
        } else {
          console.log("wrong password");
          alert("wrong password");
        }
      })
      .catch((err) => {
        console.log("err signing in!" + err);
      });
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <label htmlFor="pass">password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <button onClick={this.handleSubmit.bind(this)}>Sign In</button>
        </form>
      </div>
    );
  }
}

export default Signin;
