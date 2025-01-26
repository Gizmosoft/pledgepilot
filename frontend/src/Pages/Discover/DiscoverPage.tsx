import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CampaignTile from "../../Components/Campaign/CampaignTile";
import Search from "../../Components/SearchBar/SearchBar";
import { discoverCampaign } from "../../services/discoverServices";
import Footer from "../../Components/Footer/Footer";

const DiscoverPage = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllCampaigns = async () => {
      const campaignsData = await discoverCampaign();
      setCampaigns(campaignsData);
      setFilteredCampaigns(campaignsData);
    };
    fetchAllCampaigns();
  }, []);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim() === "") {
      setFilteredCampaigns(campaigns); // Reset to all campaigns if search is empty
    } else {
      const results = campaigns.filter((campaign) =>
        campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCampaigns(results);
    }
  };

  return (
    <>
      <Box sx={{ padding: "40px 0" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "24px",
              color: "#0B3D3A",
            }}
          >
            Discover Campaigns
          </Typography>

          {/* Create Campaign Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "40px",
            }}
          >
            <Search campaigns={campaigns} onSearch={handleSearch} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "#EF476F", // Pink color
                "&:hover": { backgroundColor: "#D3365E" }, // Darker pink
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
              onClick={() => navigate("/create")}
            >
              Create Campaign +
            </Button>
          </Box>

          {/* Campaigns Grid */}
          {filteredCampaigns.length > 0 ? (
            <Grid container spacing={3} justifyContent="center">
              {filteredCampaigns.map((campaign: any) => (
                <CampaignTile campaignObject={campaign} key={campaign._id} />
              ))}
            </Grid>
          ) : (
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#888",
                marginTop: "40px",
              }}
            >
              No campaigns found.
            </Typography>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default DiscoverPage;
