import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress, Box } from "@mui/material";
import { getPayment } from "../../services/userServices";

const PaymentCard = ({ paymentId }: { paymentId: string }) => {
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const getPaymentResponse = await getPayment(paymentId);
        if (getPaymentResponse) {
          setPaymentDetails(getPaymentResponse);
        } else {
          console.error(`Failed to fetch payment details for ID: ${paymentId}`);
        }
      } catch (error) {
        console.error("Error fetching payment details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [paymentId]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100px" }}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  if (!paymentDetails) {
    return (
      <Typography variant="body2" sx={{ color: "red" }}>
        Unable to load payment details.
      </Typography>
    );
  }

  return (
    <Card sx={{ width: "100%", p: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Campaign: {paymentDetails.campaignName}
        </Typography>
        <Typography variant="body2">Amount: ${paymentDetails.amount}</Typography>
        <Typography variant="body2">
          Date: {new Date(paymentDetails.txnDate).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
