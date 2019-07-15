import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="bg">
        <div className="welcome-title">
          Welcome to <span style={{ color: "#27ae60" }}>MyBucks</span>!
          <div className="welcome-subtitle">
            The one and only financial app you will ever use
          </div>
          <div className="welcome-join-button">
            <Link to="/signup">
              <button>Join now for free</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
