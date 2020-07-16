import React from "react";
import { Button } from "react-bootstrap";

import Navbar from "../NavBar/NavBar.js";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./style.css";
const axios = require("axios");

// initializing firebase
firebase.initializeApp({
  apiKey: "AIzaSyCKD1Uydm10LcXglQPGFWYqDDEuy1hAnu8",
  authDomain: "reactlogin-c308d.firebaseapp.com",
});

//chang the name of componet to singUP
class SingUP extends React.Component {
  constructor(props) {
    super(props);
    //change to shcema
    this.state = {
      name: "",
      password: "",
      email: "",
      step: 0,
      isExist: true,
      isSignedIn: false,
      singup: "",
    };
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  //Load data from a remote endpoint
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

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
      .post("/api/users", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        console.log("result   ", result);
        this.setState({ singup: "sign up success please sign in" });
        setTimeout(function () {
          window.location.href = "/Signin";
        }, 2000);
      })
      .catch((err) => {
        console.log("ERROR FROM AXIOS ", err);
        this.setState({ singup: "please use a different email or user name" });
        setTimeout(function () {
          window.location.href = "/Signup";
        }, 2000);
      });
    // } else {
    //   alert("The email is aready used");
    // }
  };

  render() {
    const { name, password, email, step } = this.state;
    const values = { name, password, email, step };
    return (
      <div>
        <Navbar />
        <form id="signup">
          <h1 className="header"> sign up </h1>
          <h2>{this.state.singup}</h2>
          <label id="label">User Name</label>
          <input
            className="user_input input"
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
            className="email_input input"
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
            className="password_input input"
            type="password"
            placeholder="Enter Your Password "
            defaultValue={values.password}
            id="password"
            onChange={this.handleChange}
          ></input>
          <br />
          <button
            className="sigup_button input"
            onClick={this.handleSubmit.bind(this)}
          >
            signUp
          </button>

          <div>
            {this.state.isSignedIn ? (
              <span>
                <div>
                  Signed in succssufully
                  <h3>
                    Welcome {firebase.auth().currentUser.displayName}
                  </h3>{" "}
                  <br></br>
                  <form>
                    <Button
                      variant="btn btn-success"
                      className="btn1 "
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/";
                      }}
                    >
                      {" "}
                      Next
                    </Button>
                    <Button
                      variant="btn btn-success"
                      className="btn2"
                      onClick={() => firebase.auth().signOut()}
                    >
                      Logout
                    </Button>
                  </form>
                  {/* <img
                  alt="profile picture"
                  src={firebase.auth().currentUser.photoURL}
                /> */}
                </div>
              </span>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default SingUP;
