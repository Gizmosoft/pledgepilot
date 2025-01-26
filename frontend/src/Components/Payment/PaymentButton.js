import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { getUserInTheSession } from "../../Utils/SessionStorage";
import { dateGen } from "../../Utils/CurrentDateGenerator";
import { rewardGen } from "../../Utils/RewardGenerator";

export const PaymentButton = ({ campaign }) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleInputChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const makePayment = async (token) => {
    const body = {
      token,
      donationAmount: parseFloat(donationAmount),
    };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(`http://localhost:3001/payments`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
      const { status } = response;
      if (status === 200) {
        try {
          await fetch("http://localhost:3001/payments/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              campaignName: campaign.name,
              paidBy: getUserInTheSession(),
              amount: donationAmount,
              rewardGenerated: rewardGen(donationAmount),
              txnDate: dateGen(),
            }),
          });
          setSnackbarMessage("Donation successful! Thank you!");
          setSnackbarSeverity("success");
        } catch (error) {
          console.error("Error saving payment to DB:", error);
          setSnackbarMessage("Failed to save donation to database.");
          setSnackbarSeverity("error");
        }
      } else {
        setSnackbarMessage("Payment failed. Please try again.");
        setSnackbarSeverity("error");
      }
      setDonationAmount("");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Payment error:", error);
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "8px",
        // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: "#555", marginBottom: "8px" }}
      >
        Donate to {campaign.name}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#333",
          marginBottom: "16px",
        }}
      >
        Donate ❤️
      </Typography>
      <TextField
        label="Enter Amount (in USD)"
        type="number"
        variant="outlined"
        value={donationAmount}
        onChange={handleInputChange}
        fullWidth
        sx={{
          marginBottom: "16px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
        required
      />
      <StripeCheckout
        stripeKey="pk_test_51OFqNiEPRj1zaiex4lxQVyzwMSJtsB9w1yEJ6qUcbWFUq8QaE5lrNv0e2FZe6OK86On0CDRRvnYch17VyXFV6zba006DYhm4EI"
        token={makePayment}
        name="PledgePilot Donations"
        description="Donate to help initiatives"
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            padding: "10px 0",
            fontWeight: "bold",
            backgroundColor: "#EF476F",
            "&:hover": {
              backgroundColor: "#D3365E",
            },
          }}
        >
          Donate
        </Button>
      </StripeCheckout>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
