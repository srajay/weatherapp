import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Location from "./Location";
import "./body.css";

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/location" exact element={<Location />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
