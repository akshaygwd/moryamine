import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./boundryLess.css";
const BoundryLess = (props) => {
  return (
    <div className="boundryless">
      <div className="left">
        <img src="https://picsum.photos/id/1/500" />
      </div>
      <div className="right">
        <h3>Our Gallary</h3>
        <span className="seprator"></span>
        <p>Browse through our extensive gallery of high quality images.</p>
        <div className="buttonAbout">
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default BoundryLess;
