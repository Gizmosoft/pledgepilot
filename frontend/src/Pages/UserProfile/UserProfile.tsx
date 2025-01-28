import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Container,
} from "@mui/material";
import { getUserByEmail, getUserPayments } from "../../services/userServices";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import CampaignTile from "../../Components/Campaign/CampaignTile";
import { UserStats } from "../../Components/Stats/UserStats"; // Import UserStats
import "./UserProfile.css";
import PaymentCard from "../../Components/PaymentCard/PaymentCard";

export const UserProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [paymentHistory, setPaymentHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userString = sessionStorage.getItem("user");
        if (userString) {
          const emailAddress = JSON.parse(userString).emailAddress;
          const getUserResponse = await getUserByEmail(emailAddress);
          setProfile(getUserResponse);
          sessionStorage.setItem("user", JSON.stringify(getUserResponse));

          // Fetch payment history
          const paymentHistoryRes = await getUserPayments(getUserResponse._id)
          setPaymentHistory(paymentHistoryRes.payments);
        }
      } catch (error) {
        console.error("Error fetching user profile or payment history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const redirectToRewards = () => navigate("/rewards");

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
        {/* User Information */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
          >
            {profile.firstName} {profile.lastName}
          </Typography>
          <Typography variant="body1" sx={{ color: "#666" }}>
            {profile.emailAddress}
          </Typography>
        </Box>

        {/* User Stats Section */}
        <Box sx={{ mb: 4 }}>
          <UserStats />
        </Box>

        {/* Created Campaigns Section */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
          >
            Campaigns Created
          </Typography>
          {profile.createdProjects?.length > 0 ? (
            <Grid container spacing={2}>
              {profile.createdProjects.map((campaign: any) => (
                <CampaignTile campaignObject={campaign} key={campaign._id} />
              ))}
            </Grid>
          ) : (
            <Typography
              variant="body1"
              sx={{ color: "#666", textAlign: "center" }}
            >
              You haven't created any campaigns yet.
            </Typography>
          )}
        </Box>

        {/* Followed Campaigns Section */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
          >
            Campaigns Followed
          </Typography>
          {profile.projectsFollowed.length > 0 ? (
            <Grid container spacing={2}>
              {profile.projectsFollowed.map((campaign: any) => (
                <CampaignTile campaignObject={campaign} key={campaign._id} />
              ))}
            </Grid>
          ) : (
            <Typography
              variant="body1"
              sx={{ color: "#666", textAlign: "center" }}
            >
              You haven't followed any campaigns yet.
            </Typography>
          )}
        </Box>

        {/* Payment History Section */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
          >
            Payment History
          </Typography>
          {paymentHistory.length > 0 ? (
            <Grid container spacing={2}>
              {paymentHistory.map((payment) => (
                <PaymentCard paymentId = {payment}/>
              ))}
            </Grid>
          ) : (
            <Typography
              variant="body1"
              sx={{ color: "#666", textAlign: "center" }}
            >
              No payment history available.
            </Typography>
          )}
        </Box>

        {/* Redeem Rewards Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            onClick={redirectToRewards}
            variant="contained"
            sx={{
              backgroundColor: "#EF476F",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#D3365E",
              },
            }}
          >
            Redeem Rewards
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
