import React from "react";
// import logo from './logo.svg';
import "./HomePage.css";
import { Button } from "react-bootstrap";
import Header from "../../Components/Navbar2/NavBar2";
import Search from "../../Components/SearchBar/SearchBar";
import Footer from "../../Components/Footer/Footer";
import Stats from "../../Components/Stats/Stats";
import { Link } from 'react-router-dom'

// // const pledgePilotVideo = require("../../assets/videos/pledge-pilot-landing-page.mp4");
// import Test from './components/Test';
const pledgePilotVideo = require("../../assets/videos/landing.gif");

function HomePage() {
  return (
    <>
      <div className="home-page">
        {/* NavBar */}
        {/* <Header /> */}
        {/* Search Bar */}
        <div className="hero-section">
          <img id="home-page-video" src={pledgePilotVideo} alt="landing-gif" />
          {/* <video id="home-page-video" muted autoPlay loop>
            <source src={pledgePilotVideo} type="video/gif"></source>
          </video> */}
          <div className="stats-container">
            <Stats />
            <Link to='/login'>
              <Button variant="warning" className='dive_button'>Dive into PledgePilot</Button>{' '}
            </Link>
          </div>
        </div>
        {/* <Stats /> */}
        {/* <Search /> */}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
