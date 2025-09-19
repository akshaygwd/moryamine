import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./layout.css";
import Footer from "../footer";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="https://picsum.photos/id/5/50" alt="Foundation Logo" />
            <h1>Helping Hands</h1>
          </div>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/donation" onClick={() => setMenuOpen(false)}>Donation</Link>
              </li>
              <li>
                <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
              </li>
            </ul>
          </nav>

          <div 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
