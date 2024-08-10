import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import Footer from "../footer";
const Layout = () => {
  return (
    <div>
      <div className="header">
<div className="container">
        <h1>
          <img src="https://picsum.photos/id/5/25" alt="logo" />
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/donation">Donation</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
</div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
