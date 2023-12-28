import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { LoginResponse, User } from "../../types/User";
import { UserState, userLogout } from "../../store/UserSlice";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
// const logo = require("../../assets/logo.png");
const logo = require("../../assets/nav-logo.png");
// const logoText = require("../../assets/pledge-pilot-text.png");
// const logoSpacer = require("../../assets/spacer.png");

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const loggedInUser: UserState = useSelector(
    (state: RootState) => state.user as UserState
  );
  const userString = sessionStorage.getItem("user") ?? "";
  let user :User | null = null;
  if (sessionStorage.getItem("user")) {
      
    user = JSON.parse(userString);
  }
  const handleProfileClick = () => {
    navigate('/profile')
    return
  }

  const handleLogout = () => {
    dispatch(userLogout());

    user = null;

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
  function redirectToDashboard(): void {
    navigate("/dashboard");
    handleOpenMenu();
  }

  return (
    <header className="header">
      <nav className="navbar-component">
        <div id="logo-container">
          <img onClick={() => navigate("/")} id="logo-img" src={logo} alt="" />
          {/* <img className="img-logo" id="img-logo-spacer" src={logoSpacer} alt="" />
        <img className="img-logo" id="img-logo-text" src={logoText} alt="" /> */}
          {/* <div id="nav-search">
          <input id="search-bar" type="text" placeholder="Search" />
        </div> */}
        </div>
        <div className="nav-links-container">
          <div className="nav-links">
            {" "}
            <Link to={`/`}>Home</Link>
          </div>
          <div className="nav-links" id="discover-link">
            <Link to={`/discover`}>Discover</Link>
          </div>

          {/* Your other content */}
          <div className="nav-links" id="profile-container">
            <div id="profile" className="nav-links">
              {userString ? (
                <div onClick={handleOpenMenu}>{user?.firstName}</div>
              ) : (
                <div onClick={navigateToLogin}>Login</div>
              )}
              <div className="dropdown">
                {loggedInUser.loginResponse || user ? (
                  <>
                    <div
                      onClick={redirectToDashboard}
                      className="dropdown-options"
                    >
                      Dashboard
                    </div>
                    <div className="dropdown-options" onClick={handleProfileClick}>Profile</div>
                    <div
                      id="logout"
                      className="dropdown-options"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
