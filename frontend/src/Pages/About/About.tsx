import React from "react";
import "./About.css";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
function About() {
  const deepansh = require("../../assets/deepansh.jpeg");
  const kartikey = require("../../assets/kartikey.jpeg");
  const aaryan = require("../../assets/aaryan.jpeg");
  const kartik = require("../../assets/kartik.jpeg");
  const loggedInUser = sessionStorage.getItem("user");
  const navigate = useNavigate();
  function redirectUser(): void {
    if (loggedInUser) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }
  return (
    <section className="about-us">
      <h2>About PledgePilot</h2>
      <div className="mission-statement">
        <p>
          PledgePilot solves the problem of... (Briefly explain the problem and
          its impact). We believe in... (Highlight your core values). That's why
          we created a platform... (Describe your unique value proposition and
          how it benefits both backers and creators).
        </p>
      </div>
      <div className="highlights">
        <h3>Why Choose PledgePilot?</h3>
        <ul>
          <li>Benefit 1: Shorten the fundraising journey...</li>
          <li>Benefit 2: Build trust and transparency...</li>
          <li>Benefit 3: Foster a supportive community...</li>
        </ul>
      </div>
      <div className="team">
        <section className="developers">
          <h2>Meet the Founders!</h2>
          <div className="developer-photos">
            <img src={deepansh} alt="Developer 1" />
            <img src={kartikey} alt="Developer 2" />
            <img src={aaryan} alt="Developer 3" />
            <img src={kartik} alt="Developer 4" />
          </div>
        </section>
      </div>
      <div className="success-stories">
        <h3>Hear from our community</h3>
        <div className="story-card">
          <p>
            "PledgePilot helped me achieve my dream of... Thank you!" - Backer
          </p>
        </div>
      </div>
      <Button onClick={redirectUser} variant="contained" color="primary">
        Get Started Today
      </Button>
    </section>
  );
}

export default About;
