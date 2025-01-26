import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

export const Milestone = ({ campaignId }: { campaignId: string | undefined }) => {
  const [txns, setTxns] = useState<number>(0);
  const [donationsReceived, setDonationsReceived] = useState<number>(0);
  const [milestoneTarget, setMilestoneTarget] = useState<number>(0);
  const [milestoneReceived, setMilestoneReceived] = useState<number>(0);

  useEffect(() => {
    const getMilestoneStats = async () => {
      try {
        const paymentInfo = await fetch(
          `http://localhost:3001/campaignpayments/${campaignId}`
        );
        const paymentInfoData = await paymentInfo.json();

        const milestoneStats = await fetch(
          `http://localhost:3001/milestones/${campaignId}`
        );
        const milestoneStatsData = await milestoneStats.json();

        // Handle payments
        if (!paymentInfoData) {
          setTxns(0);
          setDonationsReceived(0);
        } else {
          setTxns(paymentInfoData.users.length);
          setDonationsReceived(paymentInfoData.totalDonations);
        }

        // Handle milestones
        if (!milestoneStatsData) {
          setMilestoneTarget(0);
          setMilestoneReceived(0);
        } else {
          setMilestoneTarget(milestoneStatsData.target);
          setMilestoneReceived(milestoneStatsData.received);
        }
      } catch (error) {
        console.error("Error fetching milestone stats:", error);
      }
    };

    getMilestoneStats();
  }, [campaignId]);

  return (
    <Box sx={{ padding: 4, borderRadius: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#333", textAlign: "center",marginBottom:4 }}
      >
        Milestones
      </Typography>
      <Grid container spacing={4} sx={{ textAlign: "center" }}>
        {/* Left Section: Last Milestone */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Typography variant="body1" sx={{ color: "#666" }}>
            Last Milestone
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#888" }}>
            Target
          </Typography>
          <Typography variant="h6" sx={{ color: "#06D6A0" }}>
            ${milestoneTarget}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#888" }}>
            Received
          </Typography>
          <Typography variant="h6" sx={{ color: "#06D6A0" }}>
            ${milestoneReceived}
          </Typography>
        </Grid>

        {/* Center Section: Total Donations */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Typography variant="body1" sx={{ color: "#666" }}>
            Total Donations Received
          </Typography>
          <Typography variant="h4" sx={{ color: "#06D6A0" }}>
            ${donationsReceived}
          </Typography>
        </Grid>

        {/* Right Section: Number of Transactions */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Typography variant="body1" sx={{ color: "#666" }}>
            Number of Transactions
          </Typography>
          <Typography variant="h4" sx={{ color: "#06D6A0" }}>
            {txns}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
