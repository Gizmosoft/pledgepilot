import React, { useState, useEffect } from "react";
import { UserState, setUser } from "../../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LoginResponse, User } from "../../types/User";
import "./Dashboard.css";
import CampaignTile from "../../Components/Campaign/CampaignTile";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../../services/userServices";

function Dashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userString = sessionStorage.getItem("user") ?? "";
        const emailAddress = JSON.parse(userString).emailAddress;
        
        const response = await getUserByEmail(emailAddress);
        setProfile(response);
        sessionStorage.setItem("user", JSON.stringify(response));
    
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const exploreCampaigns = () => {
    navigate("/discover");
  };

  const createCampaign = () => {
    navigate("/create");
  };
  return (
    <>
    {profile && <div className="dashboard-container">
      <div className="welcome-text">
        <h2>Welcome { profile && profile!.firstName + " " + profile!.lastName}</h2>
      </div>
      <div className="follow-campaigns">
        <h4>Campaigns Followed</h4>
        <button onClick={exploreCampaigns} className="follow-campaign">
          Explore Campaigns{" "}
        </button>
      </div>

      <div className="projects-followed">
        {profile!.projectsFollowed.map((campaign: any) => (
          <CampaignTile key={campaign._id} campaignObject={campaign} />
        ))}
        {profile!.projectsFollowed.length == 0
          ? "You are not following any projects"
          : ""}
      </div>

      <div className="created-campaigns">
        <h4>Created Campaigns</h4>
        <button onClick={createCampaign} className="create-campaign">
          Create Campaign +{" "}
        </button>
      </div>
      <div className="created-projects">
        {profile!.createdProjects.map((campaign: any) => (
          <CampaignTile key={campaign._id} campaignObject={campaign} />
        ))}
        {profile!.createdProjects == undefined
          ? "You have not created any projects"
          : ""}
      </div>
    </div>}
    </>
  );
}
export default Dashboard;
