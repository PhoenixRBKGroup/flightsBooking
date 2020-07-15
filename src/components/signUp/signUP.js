import React from "react";
import Navbar from "../NavBar/NavBar.js";
import "./style.css";
const axios = require("axios");

//chang the name of componet to singUP
class SingUP extends React.Component {
  constructor(props) {
    super(props);
    //change to shcema
    this.state = {
      name: "",
      password: "",
      email: "",
      isExist: true,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  // checkemail = () => {
  //   axios
  //     .get(`http://localhost:3800/api/users/${this.state.email}`)
  //     .then((result) => {
  //       console.log("get reat", result);
  //       console.log("the email is available ");
  //     })
  //     .catch((err) => {
  //       console.log("ERROR the email is used ", err);
  //       this.setState({ isExist: false });
  //     });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    // if (this.isExist) {
    //change the root to APi/users
    axios
      .post("http://localhost:3800/api/users", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        console.log("result   ", result);
      })
      .catch((err) => {
        console.log("ERROR FROM AXIOS ", err);
      });
    // } else {
    //   alert("The email is aready used");
    // }
  };

  render() {
    const { name, password, email } = this.state;
    const values = { name, password, email };
    return (
      <div>
        <Navbar />
        <form id="signup">
          <h1 className="header"> sign up </h1>
          <label id="label">User Name</label>
          <input
            className="user_input"
            type="text"
            placeholder="Enter You UserName "
            defaultValue={values.name}
            id="name"
            onChange={this.handleChange}
          ></input>
          <br />
          <br />
          <label id="label">Email</label>
          <input
            className="email_input"
            type="email"
            placeholder="Enter Your email "
            defaultValue={values.email}
            id="email"
            onChange={this.handleChange}
          ></input>
          <br />
          <br />
          <label id="label"> Password</label>
          <input
            className="password_input"
            type="password"
            placeholder="Enter Your Password "
            defaultValue={values.password}
            id="password"
            onChange={this.handleChange}
          ></input>
          <br />
          <button
            className="sigup_button"
            onClick={this.handleSubmit.bind(this)}
          >
            signUp
          </button>
        </form>
      </div>
    );
  }
}

export default SingUP;
