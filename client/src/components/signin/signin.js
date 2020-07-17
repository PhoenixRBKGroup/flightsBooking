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
      username: "",
      singip: "",
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
      .post("/signin", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        console.log("result   ", result);
        this.setState({ singip: "sign in success " });
        setTimeout(function () {
          window.location.href = "/";
        }, 2000);
      })
      .then(() => {
        this.finduser();
      })
      .catch((err) => {
        console.log("ERROR FROM AXIOS ", err);
        this.setState({ singip: "Woring Email or Password " });
      });
  }
  finduser() {
    axios
      .get("api/users", {
        params: {
          ID: this.state.email,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => {
        console.log("ERROR FROM AXIOS ", err);
      });
  }
  render() {
    return (
      <div>
        <Navbar user={this.state.email} />
        <form className="login">
          <h1 className="header">LogIn</h1>
          <h2>{this.state.singip}</h2>
          <label className="email_lab">Email</label>
          <input
            className="email_input input"
            type="email"
            name="email"
            placeholder="Please Enter Your Email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <label className="Password_lab">Password </label>
          <input
            className="password_input input"
            type="password"
            name="password"
            placeholder="Please Enter Your Password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <button
            className="button_signin"
            onClick={this.handleSubmit.bind(this)}
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
