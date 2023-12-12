import React from "react";
// import logo from './logo.svg';
import "./HomePage.css";
import { Button } from "react-bootstrap";
import Header from "../../Components/Navbar2/NavBar2";
import Search from "../../Components/SearchBar/SearchBar";
import Footer from "../../Components/Footer/Footer";
import Stats from "../../Components/Stats/Stats";

// const pledgePilotVideo = require("../../assets/videos/pledge-pilot-landing-page.mp4");
// import Test from './components/Test';

function HomePage() {
  return (
    <>
      <div className="home-page">
        {/* NavBar */}
        {/* <Header /> */}
        {/* Search Bar */}
        <div className="hero-section">
          {/* <video id="home-page-video" muted  autoPlay loop>
            <source src={pledgePilotVideo} type="video/mp4"></source>
          </video> */}
          <div className="stats-container">
            <Stats />
            <Button variant="warning" className="dive_button">
              Dive into PledgePilot
            </Button>
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
