import React from "react";
import "./list.css";

const List = (props) => {
  return (
    <div className="container">
      <ul className="list">
        <li>
          <div>
            <img src="https://picsum.photos/id/1/300/300" />
            <h3>Visit</h3>
            <span>Here you can view all the images Lorem Picsum provides</span>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/id/1/300/300" />
            <h3>Visit</h3>
            <span>Here you can view all the images Lorem Picsum provides</span>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/id/1/300/300" />
            <h3>Visit</h3>
            <span>Here you can view all the images Lorem Picsum provides</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List;
