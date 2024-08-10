import React from "react";
import "./main.css";
import { Outlet, Link } from "react-router-dom";

const Main = (props) => {
  return (
    <div className="main container">
      <h2>Experience</h2>
      <div className="buttonAbout">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Main;
