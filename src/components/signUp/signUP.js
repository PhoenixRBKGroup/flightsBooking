import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
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
      <div classname="signIn">
        <form>
          <h1> sign up </h1>
          <label classname="label">User Name</label>
          <input
            type="text"
            placeholder="Enter the user name "
            defaultValue={values.name}
            id="name"
            classname="input1"
            onChange={this.handleChange}
          ></input>
          <br />
          <br />
          <label classname="label">Email</label>
          <input
            type="text"
            placeholder="Enter your email "
            defaultValue={values.email}
            id="email"
            classname="input1"
            onChange={this.handleChange}
          ></input>
          <br />
          <br />
          <label classname="label"> Password</label>
          <input
            type="password"
            placeholder="Enter the password "
            defaultValue={values.password}
            id="password"
            classname="input1"
            onChange={this.handleChange}
          ></input>
          <br />
          <button onClick={this.handleSubmit.bind(this)}>sign up</button>
        </form>
      </div>
    );
  }
}

export default SingUP;
