import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./HomePage.css";

import Header from "../../Components/Navbar2/NavBar2";
import Search from "../../Components/SearchBar/SearchBar";
import Footer from "../../Components/Footer/Footer";
import Stats from "../../Components/Stats/Stats";
import { Link, useNavigate } from "react-router-dom";
import { UserState } from "../../store/UserSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FaPlus, FaShareAlt, FaTrophy } from "react-icons/fa";
import { Button } from "@mui/material";
import CampaignTile from "../../Components/Campaign/CampaignTile";
import { discoverCampaign } from "../../services/discoverServices";

const pledgePilotVideo = require("../../assets/videos/pledge-pilot-landing-page.mp4");
const deepansh = require("../../assets/deepansh.jpeg");
const kartikey = require("../../assets/kartikey.jpeg");
const aaryan = require("../../assets/aaryan.jpeg");
const kartik = require("../../assets/kartik.jpeg");
// import Test from './components/Test';
// const pledgePilotVideo = require("../../assets/videos/landing.gif");

function HomePage() {
  const loggedInUser = sessionStorage.getItem("user")
  const navigate = useNavigate();
  function redirectUser(): void {
    if (loggedInUser) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }

  const [campaigns, setCampaigns] = useState<any>();

  // onpageload operations
  useEffect(() => {
    const fetchAllCampaigns = async () => {
      // call Discover API
      // const campaignsResponse = await fetch('http://localhost:3001/campaigns/discover')
      const campaignsData = await discoverCampaign();
      // get the response in json
      // const campaignsData = await campaignsResponse.json()
      console.log(campaignsData);
      // set the campaignData to the state to be received by the UI
      setCampaigns(campaignsData);
    };
    fetchAllCampaigns();
    // below empty array is called dependecy list which tells about how many times the useEffect needs to be called. Not defining this will cause an infinte loop of useEffects being called. Empty array signifies that call useEffect only once at
  }, []);

  return (
    <>
      <div className="home-page">
        {/* NavBar */}
        {/* <Header /> */}
        {/* Search Bar */}
        <div className="hero-section">
          {/* <img id="home-page-video" src={pledgePilotVideo} alt="landing-gif" /> */}
          <video id="home-page-video" muted autoPlay loop>
            <source src={pledgePilotVideo} type="video/mp4"></source>
          </video>
          <div className="stats-container">
            <Stats />
            <Button
              onClick={redirectUser}
              variant="outlined"
              sx={{
                backgroundColor: "#EF476F",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#D3365E",
                },
              }}
              size="large"
            >
              Dive into PledgePilot
            </Button>
          </div>
        </div>
      </div>
      <section className="browse-campaigns">
        <h2>Browse Featured Campaigns</h2>
        <div className="card-container-home">
          {campaigns &&
            campaigns.map((campaign: any, index: number) => {
              if (index < 3) {
                return (
                  <CampaignTile key={campaign._id} campaignObject={campaign} />
                );
              }
            })}
        </div>
      </section>
      <section className="how-it-works">
        <h2>How PledgePilot Works</h2>
        <div className="steps-wrapper">
          <div className="step">
            <FaPlus />
            <h3>Create Your Campaign</h3>
            <p>
              Tell your story, set your funding goal, and offer exciting
              rewards.
            </p>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </div>
          <div className="step">
            <FaShareAlt />
            <h3>Spread the Word</h3>
            <p>Share your campaign on social media, email, and your network.</p>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </div>
          <div className="step">
            <FaTrophy />
            <h3>Pledges and Rewards</h3>
            <p>Backers support your campaign and receive your rewards.</p>
            <Button variant="contained" color="primary">
              Learn About Rewards
            </Button>
          </div>
        </div>
      </section>
      <section className="developers">
        <h2>Meet the Founders!</h2>
        <div className="developer-photos">
          <img src={deepansh} alt="Developer 1" />
          <img src={kartikey} alt="Developer 2" />
          <img src={aaryan} alt="Developer 3" />
          <img src={kartik} alt="Developer 4" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
