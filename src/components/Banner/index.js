import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>Together We Can Make a Difference</h1>
          <p>Join us in helping those in need with your kind donations</p>
          <Link to="/donation" className="donate-btn">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
