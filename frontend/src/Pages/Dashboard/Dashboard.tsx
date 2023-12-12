import React, { useState, useEffect } from "react";
import { UserState } from "../../store/UserSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { User } from "../../types/User";
import "./Dashboard.css";
import CampaignTile from "../../Components/Campaign/CampaignTile";

function Dashboard() {
  const user = sessionStorage.getItem("user") ?? "";
  const loggedInUser: UserState = useSelector(
    (state: RootState) => state.user as UserState
  );
  let profile : User | undefined = undefined;
  if (!loggedInUser) {
    profile = JSON.parse(user);
  }
  profile  = loggedInUser.loginResponse?.user;
  console.log(profile);
  return (
    <div className="dashboard-container">
      <div className="welcome-text">
        <h2>Welcome {profile?.firstName + " " + profile?.lastName}</h2>
      </div>
      <h4>Projects Followed</h4>
      <div className="projects-followed">
        {profile?.projectsFollowed.map((campaign: any) => <CampaignTile key={campaign._id} campaignObject={campaign}/>)}
      </div>
      <h4>Created Projects</h4>
      <div className="created-projects">
        {profile?.createdProjects.map((campaign: any) => <CampaignTile key={campaign._id} campaignObject={campaign}/>)}
      </div>
    </div>
  );
}
export default Dashboard;
