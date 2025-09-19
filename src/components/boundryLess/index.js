import React from "react";
import { Link } from "react-router-dom";
import "./boundryLess.css";

const BoundryLess = () => {
  return (
    <section className="boundryless">
      <div className="left">
        <img 
          src="https://picsum.photos/id/1018/800/600" 
          alt="Gallery preview" 
        />
      </div>
      <div className="right">
        <h3>Our Gallery</h3>
        <span className="separator"></span>
        <p>
          Browse through our extensive gallery of high-quality images showcasing
          the impact of Morya Samajik Seva Sanstha’s initiatives.
        </p>
        <div className="buttonAbout">
          <Link to="/gallery">Explore Gallery</Link>
        </div>
      </div>
    </section>
  );
};

export default BoundryLess;
