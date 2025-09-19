import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "https://picsum.photos/id/1011/400/300",
    "https://picsum.photos/id/1012/400/300",
    "https://picsum.photos/id/1013/400/300",
    "https://picsum.photos/id/1015/400/300",
  ];

  return (
    <div className="container">
      <h2>Gallery</h2>
      <span className="seprator"></span>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
