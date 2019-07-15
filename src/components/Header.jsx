import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import store from "../stores/store";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="header">
        <div className="brand">MyBucks</div>
        <div style={{ flex: "1 1 auto" }} />
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navButton">Home</div>
        </Link>
        {store.authStore.isAuthenticated && (
          <Link to="/addexpenses" style={{ textDecoration: "none" }}>
            <div className="navButton">Add expenses</div>
          </Link>
        )}
        {store.authStore.isAuthenticated && (
          <Link to="/myfinancials" style={{ textDecoration: "none" }}>
            <div className="navButton">My Financials</div>
          </Link>
        )}
        {store.authStore.isAuthenticated ? (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div
              className="navButton"
              onClick={() => {
                if (window.confirm("Do you really want to log out?")) {
                  store.authStore.logout();
                }
              }}
            >
              Log out
            </div>
          </Link>
        ) : (
          <React.Fragment>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="navButton">Log in</div>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <div className="navButton">Sign up</div>
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default observer(Header);
