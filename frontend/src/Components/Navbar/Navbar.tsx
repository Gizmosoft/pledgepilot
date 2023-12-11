import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { LoginResponse, User } from "../../types/User";
import { UserState, userLogout } from "../../store/UserSlice";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
// const logo = require("../../assets/logo.png");
const logo = require("../../assets/Crowd-funding-logo.png");

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const loggedInUser: UserState = useSelector(
    (state: RootState) => state.user as UserState
  );

  const handleLogout = () => {
    console.log("logout");
    dispatch(userLogout());
    navigate("/login");
    handleOpenMenu();
  };

  const navigateToLogin = () => {
    navigate("/login");
    handleOpenMenu();
  };

  function handleOpenMenu(): void {
    document.querySelector(".dropdown")?.classList.toggle("show");
  }
  return (
    <nav>
      <div className="nav-links" id="logo-container">
        <img id="img-logo" src={logo} alt="" />
        {/* <div id="nav-search">
          <input id="search-bar" type="text" placeholder="Search" />
        </div> */}
      </div>
      <div className="nav-links"> <Link to={`/`}>Home</Link></div>
      <div className="nav-links" id="discover-link">
        <Link to={`/discover`}>Discover</Link>
      </div>

      {/* Your other content */}
      <div className="nav-links" id="profile-container">
        <div id="profile" className="nav-links">
          {loggedInUser.loginResponse ? (
            <div onClick={handleOpenMenu}>
              {loggedInUser.loginResponse?.user.firstName}
            </div>
          ) : (
            <div onClick={navigateToLogin}>Login</div>
          )}
          <div className="dropdown">
            {loggedInUser.loginResponse ? (
              <>
                <div className="dropdown-options">Profile</div>
                <div className="dropdown-options" onClick={handleLogout}>
                  Logout
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
