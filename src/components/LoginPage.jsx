import React, { Component } from "react";
import LoginFormik from "./LoginForm";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div className="login-bg">
        <main className="login-container">
          <LoginFormik />
        </main>
      </div>
    );
  }
}

export default LoginPage;
