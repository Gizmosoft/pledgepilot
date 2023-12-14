import React, { useState, useEffect } from "react";
import { UserState, setUser } from "../../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Blog } from "../../types/Blogs";
import CampaignTile from "../../Components/Campaign/CampaignTile";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogs,saveBlog } from "../../services/blogServices";
import BlogTile from "../../Components/Blog/BlogTile";

function BlogDashboard() {
  const navigate = useNavigate();
  //let responseData: Blog[] = [];
  const { campaignId } = useParams()

  const [responseData, setResponseData]: any[] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs(campaignId);
        setResponseData(response)   
      } catch (error) {
        setResponseData([])
        console.error("Error fetching user:", error);
      }
    };

    fetchBlogs();
  }, []);

  



  const exploreCampaigns = () => {
    navigate("/discover");
  };

  const createCampaign = () => {
    navigate("/create");
  };
  return (
    <>
    {responseData && <div className="dashboard-container">
      <div className="projects-followed">
      <h4>123 Campaigns</h4>
        {responseData!.map((blog: any) => (
          <BlogTile key={blog.Id} campaignObject={blog} />
        ))}
        {/* {profile!.projectsFollowed.length == 0
          ? "You are not following any projects"
          : ""} */}
      </div>

      <div className="created-campaigns">
        <h4>Created Campaigns</h4>
        <button onClick={createCampaign} className="create-campaign">
          Create Campaign +{" "}
        </button>
      </div>
      {/* <div className="created-projects">
        {profile!.createdProjects.map((campaign: any) => (
          <CampaignTile key={campaign._id} campaignObject={campaign} />
        ))}
        {profile!.createdProjects == undefined
          ? "You have not created any projects"
          : ""}
      </div> */}
    </div>}
    </>
  );
}
export default BlogDashboard;
