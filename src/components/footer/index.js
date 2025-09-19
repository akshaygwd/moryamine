import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="container list">
        <li>
          <h4>Contact</h4>
          <p>
            <a href="tel:+4733378901">+47 333 78 901</a>
          </p>
        </li>
        <li>
          <h4>Social Media</h4>
          <p>
            <a href="https://www.facebook.com/groups/elderorphans/">Facebook</a>
          </p>
          <p>
            <a href="https://www.facebook.com/groups/elderorphans/">Instagram</a>
          </p>
        </li>
        <li>
          <h4>Address</h4>
          <p>Laxminagar, Ghatkopar East, Mumbai - 75</p>
        </li>
        <li>
          <h4>Email</h4>
          <p>
            <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </p>
        </li>
        <li>
          <h4>Quick Links</h4>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/gallery">Gallery</Link></p>
          <p><Link to="/donation">Donation</Link></p>
        </li>
        <li className="footer-logo">
          <img src="https://picsum.photos/id/1/80/80" alt="Logo" />
        </li>
      </ul>
      <p className="bottomCopy">© 2024 Morya Samajik Seva Sanstha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
