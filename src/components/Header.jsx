import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="header">
        <div className="brand">MyBucks</div>
        <div style={{ flex: "1 1 auto" }} />
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navButton">Home</div>
        </Link>
        <Link to="/addexpenses" style={{ textDecoration: "none" }}>
          <div className="navButton">Add expenses</div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="navButton">Log in</div>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className="navButton">Sign up</div>
        </Link>
      </div>
    </nav>
  );
};

export default observer(Header);
