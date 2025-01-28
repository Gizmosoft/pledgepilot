import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/UserSlice";
import { AppDispatch } from "../../store/store";
import { Box, TextField, Typography, Button, Stack } from "@mui/material";
import GoogleLoginComponent from "./GoogleLoginComponent";

const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin(formData)).then((result) => {
      if (result.payload) {
        navigate("/dashboard");
      }
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        width: "100%",
        margin: "0 auto",
        padding: 4,
        // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Login to Your Account
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ marginBottom: 3, color: "#555" }}
      >
        Login to experience a new world of PledgePilot.
      </Typography>
      <form onSubmit={handleLogin}>
        <Stack spacing={2}>
          <TextField
            label="Email Address"
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#0B3D3A",
              "&:hover": { backgroundColor: "#05B589" },
              padding: "10px",
              fontSize: "16px",
            }}
          >
            Login
          </Button>
          <GoogleLoginComponent />
        </Stack>
      </form>
    </Box>
  );
};

export default LoginComponent;
