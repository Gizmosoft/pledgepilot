import React from "react";
import "./Rewards.css";
function Rewards() {
  const deepansh = require("../../assets/deepansh.jpeg");
  const kartik = require("../../assets/kartik.jpeg");
  return (
    <section className="rewards">
      <h2>Unlock Exclusive Rewards</h2>

      <div className="tier">
        <h3>Silver Champion ($100-$249)</h3>
        <div className="offer-card">
          {/* <img src={deepansh} alt="E-book" /> */}
          <p>
            Download the exclusive "Making of X-men" e-book (available at $100
            minimum)
          </p>
          <a href="#" className="btn">
            Claim Reward
          </a>
        </div>
        <div className="offer-card">
          {/* <img src={deepansh} alt="Video message" /> */}
          <p>
            Receive a personalized video message from the creator (available at
            $150 minimum)
          </p>
          <a href="#" className="btn">
            Claim Reward
          </a>
        </div>
        <div className="offer-card">
          {/* <img src={deepansh} alt="Merchandise" /> */}
          <p>
            Get a limited-edition Deepansh Figurine (available at $200 minimum)
          </p>
          <a href="#" className="btn">
            Claim Reward
          </a>
        </div>
        <div className="offer-card">
          {/* <img src={deepansh} alt="Beta access" /> */}
          <p>
            Be one of the first to try the beta version and provide feedback
            (available at $249 minimum)
          </p>
          <a href="#" className="btn">
            Claim Reward
          </a>
        </div>
      </div>

      <div className="tier">
        <h3>Gold Patron ($250-$499)</h3>
        <div className="offer-card">
          {/* <img src={kartik} alt="Event invitation" /> */}
          <p>
            Attend an exclusive event hosted by the creators (available at $250
            minimum)
          </p>
          <a href="#" className="btn">
            Claim Reward
          </a>
        </div>
        <div className="offer-card">
          {/* <img src={kartik} alt="Project credits" /> */}
          <p>
            Get your name listed on something (available at $300
            minimum)
          </p>
          <a href="#" className="btn">
            Claim Reward
          </a>
        </div>
        <div className="offer-card">
          {/* <img src={kartik} alt="Behind-the-scenes tour" /> */}
          <p>
            Enjoy a guided tour of the project's workspace or set (available at
            $400 minimum)
          </p>
          <a href="#" className="btn">
            Claim Reward
          </a>
        </div>
        <div className="offer-card">
          {/* <img src={kartik} alt="Personalized artwork" /> */}
          <p>
            Receive a personalized piece of artwork or design (available at $499
            minimum)
          </p>
          <a href="#" className="btn">
            Claim Reward
          </a>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
