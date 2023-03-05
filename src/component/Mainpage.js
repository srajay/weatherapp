import React from "react";
import Sidenav from "./Sidenav";
import Body from "./Body";
import "./mainpage.css";

const Mainpage = () => {
  return (
    <div className="mainpage-container">
      <div className="sidenav-container">
        <Sidenav />
      </div>
      <div className="body-container">
        <Body />
      </div>
    </div>
  );
};

export default Mainpage;
