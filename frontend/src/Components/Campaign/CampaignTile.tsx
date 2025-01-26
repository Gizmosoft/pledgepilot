import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { getUserById } from "../../services/userServices";

const cardImg = require("../../assets/sample-image.jpg");

const CampaignTile = ({ campaignObject }: any) => {
  const DESCRIPTION_THRESHOLD = 35;

  const descriptionContent =
    campaignObject.description.length > DESCRIPTION_THRESHOLD
      ? `${campaignObject.description.substring(0, DESCRIPTION_THRESHOLD)}...`
      : campaignObject.description;

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserById(campaignObject.owner);
      console.log(user, "user");
    };
    fetchUser();
  }, [campaignObject.owner]);

  const regex = /(<([^>]+)>)/gi;

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "16px", // Spacing between cards
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover animation
        "&:hover": {
          transform: "translateY(-10px)", // Slight lift on hover
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
        },
        textDecoration: "none",
        overflow: "hidden",
      }}
      component={Link}
      to={`/campaigns/campaign/${campaignObject._id}`}
    >
      {/* Campaign Image */}
      <CardMedia
        component="img"
        height="180"
        image={cardImg}
        alt={`${campaignObject.name} campaign`}
        sx={{
          objectFit: "cover",
          borderBottom: "1px solid #ddd", // Separator between image and content
        }}
      />
      {/* Campaign Content */}
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          {campaignObject.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#555",
            fontStyle: "italic",
            marginBottom: "12px",
          }}
        >
          {descriptionContent.replace(regex, "")}
        </Typography>
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "#777",
              fontSize: "0.85rem",
            }}
          >
            Created by: {campaignObject.owner}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CampaignTile;
