import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <section className="main container">
      <h2>Our Experience</h2>
      <p className="subtitle">
        With years of dedication, our foundation has been working tirelessly 
        to bring hope and support to those in need. Learn more about our journey.
      </p>
      <div className="buttonAbout">
        <Link to="/about">Learn More</Link>
      </div>
    </section>
  );
};

export default Main;
