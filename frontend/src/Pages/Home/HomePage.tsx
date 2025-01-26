import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaShareAlt, FaTrophy } from "react-icons/fa";
import Stats from "../../Components/Stats/Stats";
import CampaignTile from "../../Components/Campaign/CampaignTile";
import Footer from "../../Components/Footer/Footer";
import { discoverCampaign } from "../../services/discoverServices";

const pledgePilotVideo = require("../../assets/videos/pledge-pilot-landing-page.mp4");
const founders = [
  { name: "Deepansh", image: require("../../assets/deepansh.jpeg") },
  { name: "Kartikey", image: require("../../assets/kartikey.jpeg") },
  { name: "Aaryan", image: require("../../assets/aaryan.jpeg") },
  { name: "Kartik", image: require("../../assets/kartik.jpeg") },
];

function HomePage() {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const campaignsData = await discoverCampaign();
      setCampaigns(campaignsData);
    };
    fetchCampaigns();
  }, []);

  const steps = [
    {
      icon: <FaPlus size={40} color="#FFD700" />, // Gold
      title: "Create Your Campaign",
      description: "Tell your story, set your funding goal, and offer exciting rewards.",
      action: () => navigate("/create-campaign"),
      buttonLabel: "Get Started",
    },
    {
      icon: <FaShareAlt size={40} color="#FFD700" />, // Gold
      title: "Spread the Word",
      description: "Share your campaign on social media, email, and your network.",
      action: () => navigate("/learn-more"),
      buttonLabel: "Learn More",
    },
    {
      icon: <FaTrophy size={40} color="#FFD700" />, // Gold
      title: "Pledges and Rewards",
      description: "Backers support your campaign and receive your rewards.",
      action: () => navigate("/rewards"),
      buttonLabel: "Learn About Rewards",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          src={pledgePilotVideo}
          autoPlay
          loop
          muted
          preload="metadata" 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker overlay
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Stats />
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              backgroundColor: "#EF476F", // Pink
              "&:hover": { backgroundColor: "#D3365E" },
            }}
            onClick={() => navigate("/dashboard")}
          >
            Dive into PledgePilot
          </Button>
        </Box>
      </Box>

      {/* Featured Campaigns */}
      <Box sx={{ py: 6, backgroundColor: "#F8F9FA" }}>
        <Container>
          <Typography variant="h4" sx={{ mb: 4, color: "#333", textAlign: "center" }}>
            Browse Featured Campaigns
          </Typography>
          <Grid container spacing={2}>
            {campaigns.slice(0, 3).map((campaign: any) => (
                <CampaignTile campaignObject={campaign} />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box sx={{ py: 6, backgroundColor: "#055E5B" }}>
        <Container>
          <Typography variant="h4" sx={{ mb: 4, color: "#FFD700", textAlign: "center" }}>
            How PledgePilot Works
          </Typography>
          <Grid container spacing={3}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "#F0FFF0",
                  }}
                >
                  {step.icon}
                  <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#333" }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
                    {step.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#EF476F",
                      "&:hover": { backgroundColor: "#D3365E" },
                    }}
                    onClick={step.action}
                  >
                    {step.buttonLabel}
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Meet the Founders */}
      <Box sx={{ py: 6, backgroundColor: "#F8F9FA" }}>
        <Container>
          <Typography variant="h4" sx={{ mb: 4, color: "#333", textAlign: "center" }}>
            Meet the Founders!
          </Typography>
          <Grid container spacing={3}>
            {founders.map((founder) => (
              <Grid item xs={12} sm={6} md={3} key={founder.name}>
                <Card
                  sx={{
                    textAlign: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    padding: 2,
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image={founder.image}
                    alt={founder.name}
                    sx={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "150px",
                      margin: "0 auto",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: "#333" }}>
                      {founder.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default HomePage;
