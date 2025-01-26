import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

export const RedirectButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "20px",
        borderRadius: "8px",
        // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleOnClick}
        sx={{
          padding: "10px 20px",
          backgroundColor: "#06D6A0",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#05B589" },
        }}
      >
        Login to Donate
      </Button>
    </Box>
  );
};
