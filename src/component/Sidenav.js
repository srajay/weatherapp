import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
// import home_img from "../asset/home.png";

const Sidenav = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="logo-section">
          <h1>A S T R O</h1>
        </div>
        <div className="nav-list">
          <div>
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
          <div>
            <Link to="/location">
              <p>Connect</p>
            </Link>
          </div>
        </div>
        <div className="footer">
          <p>All rights reserved</p>
          <h1>R E C O</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
