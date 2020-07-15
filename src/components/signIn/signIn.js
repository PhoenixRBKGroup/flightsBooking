import React, { Component } from "react";
import Navbar from "../NavBar/NavBar.js";
import "./style.css";
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
      <form className="login_form">
        <Navbar />
        <div className="login">
          <h1 className="header">Login</h1>
          <label className="email_lab">Email</label>
          <input
            className="email_input"
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Please Enter your email"
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <label className="Password_lab">Password</label>
          <input
            className="password_input"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Please Enter your Password"
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <button
            className="button_signin"
            onClick={this.handleSubmit.bind(this)}
          >
            Sign In
          </button>
        </div>
      </form>
    );
  }
}

export default Signin;
