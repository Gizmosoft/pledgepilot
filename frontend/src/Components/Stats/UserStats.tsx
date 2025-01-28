import React, { useState } from "react";
import "./UserStats.css";
import { useEffect } from "react";
import { getUserInTheSession } from "../../Utils/SessionStorage";
import { getUserPayments } from "../../services/userServices";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const UserStats = () => {
  const user = getUserInTheSession();

  // set data in state
  const [donations, setDonations] = useState<any>();
  const [rewards, setRewards] = useState<any>();

  useEffect(() => {
    const getUserStats = async () => {
      const userPaymentInfo = await getUserPayments(user._id);
      const userPaymentData = userPaymentInfo;
      if (
        userPaymentData == null ||
        userPaymentData.totalDonations === undefined
      ) {
        setDonations(0);
      } else {
        setDonations(userPaymentData.totalDonations);
      }
      if (
        userPaymentData == null ||
        userPaymentData.totalRewards === undefined
      ) {
        setRewards(0);
      } else {
        setRewards(userPaymentData.totalRewards);
      }
    };
    getUserStats();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 3,
        mb: 4,
      }}
    >
      <Card sx={{ flex: "1", minWidth: "250px", p: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Donations Made
          </Typography>
          <Typography variant="h4" sx={{ color: "#06D6A0" }}>
            ${donations}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ flex: "1", minWidth: "250px", p: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Rewards Earned
          </Typography>
          <Typography variant="h4" sx={{ color: "#FFD700" }}>
            ${rewards}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
