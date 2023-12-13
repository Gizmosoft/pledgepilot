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
    const dispatch = useDispatch();
  let user = sessionStorage.getItem("user") ?? "";
  const [profile, setProfile] = useState<User | null>(null);
  useEffect(() => {
//     console.log("hello")
    const fetchData = async () => {
      try {
        const response = await getUserByEmail(JSON.parse(user).emailAddress);
        console.log(response, "response");
        setProfile(response);
        let userFromLocalStorage = localStorage.getItem("user") ?? "";
        // let loginResponse: LoginResponse  = JSON.parse(userFromLocalStorage);
        // loginResponse.user = response;
        dispatch(setUser(JSON.parse(userFromLocalStorage)));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  function exploreCampaigns() {
    navigate("/discover");
  }
  function createCampaign() {
    navigate("/create");
  }
  console.log(profile)
  return (
    <>
    {profile && <div className="dashboard-container">
      <div className="welcome-text">
        <h2>Welcome {profile!.firstName + " " + profile!.lastName}</h2>
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
        {profile!.createdProjects == undefined
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
