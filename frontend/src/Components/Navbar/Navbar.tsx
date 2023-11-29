import React from "react";
import "./Navbar.css";
const logo = require("../../assets/images/logo.png");
function Navbar() {
  return (
    <nav>
      <div id="logo-container">
        <img id="img-logo" src={logo} alt="" />
        <div id="nav-search">
          <input id="search-bar" type="text" placeholder="Search" />
        </div>
      </div>
      <div id="home-link"> 
        <a className="nav-links" href="">Home</a>
      </div>
      <div id="categories-link">
        <a className="nav-links" href="">Categories</a>
      </div>
      <div id="profile">
        <a className="nav-links" href="">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;
