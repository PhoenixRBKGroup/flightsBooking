import React from "react";
import "./style.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: this.props.user,
    };
  }

  render() {
    return (
      <header className="navbar">
        <div className="logo">FlightBooking</div>
        <div className="navbar_item">
          <a href="/">Home </a>
        </div>
        <div className="navbar_item">
          <a href="/Signin">Sign In</a>
        </div>
        <div className="navbar_item">
          <a href="/Signup">Sign Up</a>
        </div>
      </header>
    );
  }
}

export default NavBar;
