import React from "react";
import "./footer.css";
import { Outlet, Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer">
      <ul className="container list">
        <li>
          <p>Conact: </p>
          <p>
            <a href="tel:+4733378901">+47 333 78 901</a>
          </p>
        </li>
        <li>
          <p>Socail Media:</p>
          <p><a href="https://www.facebook.com/groups/elderorphans/">Facebook</a></p>
	  <a href="https://www.facebook.com/groups/elderorphans/">Insagram</a>
        </li>
        <li>
          <p>Address:</p>
          <p>Laxminagar Ghatkopar East Mumbai 75</p>
        </li>
        <li>
          <p>Email:</p>
          <p>abc@gmail.com</p>
        </li>
 	<li>
          <p>Links:</p>
          <p><Link to="/about">About</Link></p>
	  <p><Link to="/gallery">Gallery</Link></p>
	  <p><Link to="/donation">Donation</Link></p>
        </li>
	<li>
          <img src="https://picsum.photos/id/1/30/30" />
        </li>
      </ul>
      <p className="bottomCopy">@copyRight from 2024 </p>
    </div>
  );
};

export default Footer;
