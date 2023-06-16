import React from "react";
import logo from "../Assets/Logo.svg";
import "../Styles/Navbar.css";
import Spense from "../Assets/Capterra Logo.svg";
import Fiber from "../Assets/Fiber_Icon.svg";
import Gradie from "../Assets/Gradie_Icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar-logo">
        <img src={logo} alt="Logo" />
      </a>
      <ul className="navbar-nav">
        <li className="navbar-item-products">
          <a href="#" className="navbar-link">
            Products
          </a>
          <ul className="navbar-dropdown">
            <ul className="navbar-dropdown-content">
              <li className="dropdown-item">
                <img src={Spense} />
              </li>
              <li className="dropdown-item"></li>
              <img src={Fiber} />
              <li className="dropdown-item">
                <img src={Gradie} />
              </li>
            </ul>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Challenges
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Resources
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Other Links
          </a>
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="navbar-button-signin">Sign in</button>
        <button className="navbar-button-try">Try for free</button>
      </div>
    </div>
  );
};

export default Navbar;
