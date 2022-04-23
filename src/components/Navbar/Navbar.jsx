import React from "react";
import icon from "./favicon-32x32.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand ml-2">
          Metagascar
        </Link>
        <div id="navbar" className="navbar">
          <ul
            style={{ fontSize: "0.8rem", letterSpacing: "0.2rem" }}
            className="navbar-nav ml-auto"
          >
            <li className="nav-item">
              <Link to="/vr" className="nav-link">
                Virtual Reality
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mint" className="nav-link">
                View Property
              </Link>
            </li>
            <li className="nav-item">
              <Link to="nftrade" className="nav-link">
                Marketplace
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-tokens" className="nav-link">
                My Properties
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
