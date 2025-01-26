import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Box, Typography, Grid, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { PaymentButton } from "../../Components/Payment/PaymentButton";
import { RedirectButton } from "../../Components/Payment/RedirectButton";
import FollowButton from "../../Components/Buttons/FollowButton";
import { Milestone } from "../../Components/Milestone/Milestone";
import { getUserInTheSession } from "../../Utils/SessionStorage";
import "../../assets/ckEditorStyles/ckEditorStyles.css";

const CampaignPage = () => {
  const [campaign, setCampaign] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const { campaignId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const campaignResponse = await fetch(
          `http://localhost:3001/campaigns/campaign/${campaignId}`
        );
        const campaignData = await campaignResponse.json();
        setCampaign(campaignData);

        if (campaignData.owner) {
          const userResponse = await fetch(
            `http://localhost:3001/users/id/${campaignData.owner}`
          );
          const userData = await userResponse.json();
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching campaign or user data:", error);
      }
    };

    fetchCampaign();
  }, [campaignId]);

  const editCampaign = () => {
    navigate(`/create/${campaignId}`);
  };

  const redirectToBlog = () => {
    navigate(`/BlogDashboard/${campaignId}`);
  };

  const sessionUser = getUserInTheSession();
  const isOwner = sessionUser?._id === campaign?.owner;
  const markup = { __html: campaign?.description };

  if (!campaign) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20vh" }}>
        <Typography variant="h4" color="error">
          404: Campaign Not Found!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      className="campaign-page"
      sx={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "5vh auto 0 auto",
        borderRadius: "8px",
        // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          color: "#333",
        }}
      >
        {campaign.name}
      </Typography>
      <Milestone campaignId={campaignId} />
      <Divider
        sx={{
          mb: 4,
          borderWidth: "2px",
        }}
      />

      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={8}>
          <Box
            className="campaign-description"
            sx={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h4" sx={{ color: "#333" }}>
              Campaign Description:
            </Typography>
            <div
              className="ck-content"
              dangerouslySetInnerHTML={markup}
              style={{ lineHeight: 1.6,fontSize: "1rem" }}
            />
          </Box>
          {user && (
            <Box
              display="flex"
              alignItems="center"
              sx={{
                padding: "10px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <PersonIcon
                fontSize="medium"
                sx={{ marginRight: "8px", color: "#06D6A0" }}
              />
              <Typography variant="body1" sx={{ color: "#333" }}>
                {user.firstName} {user.lastName}
              </Typography>
            </Box>
          )}
          {isOwner && (
            <Button
              variant="contained"
              color="primary"
              onClick={editCampaign}
              sx={{
                marginTop: "20px",
                backgroundColor: "#06D6A0",
                "&:hover": { backgroundColor: "#05B589" },
              }}
            >
              Edit Campaign
            </Button>
          )}
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FollowButton campaign={campaign} />
            {sessionUser ? (
              <PaymentButton campaign={campaign} />
            ) : (
              <RedirectButton />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CampaignPage;
