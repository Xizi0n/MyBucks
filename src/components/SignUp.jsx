import React, { Component } from "react";
import SignupFormik from "./SignUpForm";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="login-bg">
        <main className="login-container">
          <SignupFormik />
        </main>
      </div>
    );
  }
}

export default SignUp;
