import React, { useState, useEffect } from "react";
import { UserState } from "../../store/UserSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { User } from "../../types/User";
import "./Dashboard.css";
import CampaignTile from "../../Components/Campaign/CampaignTile";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const user = sessionStorage.getItem("user") ?? "";
  console.log(user);
  const loggedInUser: UserState = useSelector(
    (state: RootState) => state.user as UserState
  );
  console.log(loggedInUser.loginResponse);
  let profile: User | undefined = undefined;
  if (loggedInUser.loginResponse) {
    profile = loggedInUser.loginResponse?.user;
  } else {
    profile = JSON.parse(user);
  }
  const navigate = useNavigate();
  console.log(profile);
  function exploreCampaigns(){
    navigate("/discover");
  }
  function createCampaign(){
    navigate("/create");
  }
  return (
    <div className="dashboard-container">
      <div className="welcome-text">
        <h2>Welcome {profile?.firstName + " " + profile?.lastName}</h2>
      </div>
      <div className="follow-campaigns">
        <h4>Campaigns Followed</h4>
        <button onClick={exploreCampaigns} className="follow-campaign">Explore Campaigns </button>
      </div>

      <div className="projects-followed">
        {profile?.projectsFollowed.map((campaign: any) => (
          <CampaignTile key={campaign._id} campaignObject={campaign} />
        ))}
        {profile?.createdProjects.length == 0
          ? "You are not following any projects"
          : ""}
      </div>

      <div className="created-campaigns">
        <h4>Created Campaigns</h4>
        <button onClick={createCampaign} className="create-campaign">Create Campaign + </button>
      </div>
      <div className="created-projects">
        {profile?.createdProjects.map((campaign: any) => (
          <CampaignTile key={campaign._id} campaignObject={campaign} />
        ))}
        {profile?.createdProjects.length == 0
          ? "You have not created any projects"
          : ""}
      </div>
    </div>
  );
}
export default Dashboard;
