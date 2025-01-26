import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Grid,
  CircularProgress,
  Container,
} from "@mui/material";
import CampaignTile from "../../Components/Campaign/CampaignTile";
import { getUserByEmail } from "../../services/userServices";
import { User } from "../../types/User";
import Footer from "../../Components/Footer/Footer";

function Dashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userString = sessionStorage.getItem("user");
        if (userString) {
          const emailAddress = JSON.parse(userString).emailAddress;
          const response = await getUserByEmail(emailAddress);
          setProfile(response);
          sessionStorage.setItem("user", JSON.stringify(response));
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const exploreCampaigns = () => navigate("/discover");
  const createCampaign = () => navigate("/create");

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!profile) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6">Failed to load profile.</Typography>
      </Box>
    );
  }

  return (
    <>
      <Container sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome {profile.firstName} {profile.lastName}
          </Typography>
        </Box>

        {/* Followed Campaigns Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom>
            Campaigns Followed
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#06D6A0",
              "&:hover": { backgroundColor: "#05C293" },
              mb: 4,
            }}
            onClick={exploreCampaigns}
          >
            Explore Campaigns
          </Button>
          <Grid container spacing={3} justifyContent="center">
            {profile.projectsFollowed.length > 0 ? (
              profile.projectsFollowed.map((campaign: any) => (
                // <Grid item xs={12} sm={6} md={4} key={campaign._id}>
                <CampaignTile campaignObject={campaign} />
                // </Grid>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                You are not following any projects.
              </Typography>
            )}
          </Grid>
        </Box>

        {/* Created Campaigns Section */}
        <Box>
          <Typography variant="h5" gutterBottom>
            Created Campaigns
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EF476F",
              "&:hover": { backgroundColor: "#D3365E" },
              mb: 4,
            }}
            onClick={createCampaign}
          >
            Create Campaign +
          </Button>
          <Grid container spacing={3} justifyContent="center">
            {profile.createdProjects?.length > 0 ? (
              profile.createdProjects.map((campaign: any) => (
                // <Grid item xs={12} sm={6} md={4} key={campaign._id}>
                <CampaignTile campaignObject={campaign} />
                // </Grid>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                You have not created any projects.
              </Typography>
            )}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
