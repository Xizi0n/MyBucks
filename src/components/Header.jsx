import React from "react";

import { observer } from "mobx-react";

import { Link, NavLink } from "react-router-dom";
import store from "../stores/store";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="header">
        <div>
          <Link
            to="/"
            exact="true"
            style={{
              textDecoration: "none",
              color: "#27ae60",
              marginLeft: "16px"
            }}
          >
            MyBucks
          </Link>
        </div>
        <div
          style={{
            flex: "1 1 auto"
          }}
        />
        {store.authStore.isAuthenticated && (
          <NavLink
            to="/addfinancials/expense"
            style={{
              textDecoration: "none"
            }}
          >
            <div className="navButton">
              <span>Add expenses</span>
            </div>
          </NavLink>
        )}
        {store.authStore.isAuthenticated && (
          <NavLink
            to="/addfinancials/income"
            style={{
              textDecoration: "none"
            }}
          >
            <div className="navButton">
              <span>Add income</span>
            </div>
          </NavLink>
        )}
        {store.authStore.isAuthenticated && (
          <NavLink
            to="/myfinancials"
            style={{
              textDecoration: "none"
            }}
          >
            <div className="navButton">
              <span>My Financials</span>
            </div>
          </NavLink>
        )}
        {store.authStore.isAuthenticated ? (
          <Link
            to="/login"
            style={{
              textDecoration: "none"
            }}
          >
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
            <NavLink
              to="/login"
              style={{
                textDecoration: "none"
              }}
            >
              <div className="navButton">
                <span>Log in</span>
              </div>
            </NavLink>
            <NavLink
              to="/signup"
              style={{
                textDecoration: "none"
              }}
            >
              <div className="navButton">
                <span>Sign up</span>
              </div>
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default observer(Header);
