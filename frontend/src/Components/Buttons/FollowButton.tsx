import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { getUserInTheSession } from "../../Utils/SessionStorage";

const FollowButton = ({ campaign }: { campaign: any }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("FOLLOW");
  const [loading, setLoading] = useState<boolean>(false);
  const user = getUserInTheSession();
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfFollowing = async () => {
      if (!user) return;
      try {
        const response = await fetch(`http://localhost:3001/users/id/${user._id}`);
        const userData = await response.json();
        const isAlreadyFollowing = userData.projectsFollowed.includes(campaign._id);
        setIsFollowing(isAlreadyFollowing);
        setButtonText(isAlreadyFollowing ? "FOLLOWING" : "FOLLOW");
      } catch (error) {
        console.error("Error checking following status:", error);
      }
    };

    checkIfFollowing();
  }, [campaign._id, user]);

  const handleButtonClick = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      const updatedProjects = isFollowing
        ? user.projectsFollowed.filter((id: string) => id !== campaign._id)
        : [...user.projectsFollowed, campaign._id];

      await fetch(`http://localhost:3001/users/id/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectsFollowed: updatedProjects }),
      });

      setIsFollowing(!isFollowing);
      setButtonText(!isFollowing ? "FOLLOWING" : "FOLLOW");
    } catch (error) {
      console.error("Error updating follow status:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isFollowing ? "contained" : "outlined"}
      onClick={handleButtonClick}
      startIcon={<BookmarkIcon />}
      sx={{
        backgroundColor: isFollowing ? "#EF476F" : "transparent",
        color: isFollowing ? "#fff" : "#EF476F",
        "&:hover": {
          backgroundColor: isFollowing ? "#D3365E" : "rgba(239, 71, 111, 0.1)",
        },
        borderColor: "#EF476F",
      }}
      disabled={loading}
    >
      {buttonText}
    </Button>
  );
};

export default FollowButton;
