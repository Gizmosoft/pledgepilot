import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./PaymentButton.css";
import { CustomSnackbar } from "../Snackbar/CustomSnackbar";
import { getUserInTheSession } from "../../Utils/SessionStorage";
import { dateGen } from "../../Utils/CurrentDateGenerator";
import { rewardGen } from "../../Utils/RewardGenerator";
import { Label } from "@mui/icons-material";

export const PaymentButton = ({ campaign }) => {
  const [donationAmount, setDonationAmount] = useState("");

  const handleInputChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const makePayment = async (token) => {
    const body = {
      token,
      donationAmount: parseFloat(donationAmount),
      // product,
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
        console.log(campaign);
        console.log(getUserInTheSession());
        try {
          const paymentDbResponse = await fetch(
            "http://localhost:3001/payments/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                campaignName: campaign,
                paidBy: getUserInTheSession(),
                amount: donationAmount,
                rewardGenerated: rewardGen(donationAmount),
                txnDate: dateGen(),
              }),
            }
          );
        } catch (error) {
          return console.log(error);
        }
      }
      setDonationAmount("");
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <div className="payment-box">
      <small>Donate to {campaign.name}</small>
      <h4>Donate❤️</h4>
      <div className="amount-box">
        <input
          className="amount-input"
          type="text"
          value={donationAmount}
          onChange={handleInputChange}
          placeholder="Enter Amount (in US Dollars)"
          required
        />
      </div>
      <StripeCheckout
        stripeKey="pk_test_51OFqNiEPRj1zaiex4lxQVyzwMSJtsB9w1yEJ6qUcbWFUq8QaE5lrNv0e2FZe6OK86On0CDRRvnYch17VyXFV6zba006DYhm4EI"
        token={makePayment}
        name="PledgePilot Donations"
        description="Donate to help initiatives"
      >
        {/* <button className='donate-button'>Donate</button> */}
        <button type="button" className="donate-button">
          Donate
        </button>
      </StripeCheckout>
    </div>
  );
};
