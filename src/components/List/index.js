import React from "react";
import "./list.css";

const List = () => {
  return (
    <div className="container">
      <h2 className="list-heading">Our Initiatives</h2>
      <ul className="list">
        <li>
          <div className="card">
            <img src="https://picsum.photos/id/1011/400/300" alt="Initiative 1" />
            <h3>Community Support</h3>
            <span>Providing essential aid and resources to families in need.</span>
          </div>
        </li>
        <li>
          <div className="card">
            <img src="https://picsum.photos/id/1025/400/300" alt="Initiative 2" />
            <h3>Healthcare Camps</h3>
            <span>Organizing medical checkups and wellness programs.</span>
          </div>
        </li>
        <li>
          <div className="card">
            <img src="https://picsum.photos/id/1041/400/300" alt="Initiative 3" />
            <h3>Education for All</h3>
            <span>Helping children access quality education and resources.</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List;
