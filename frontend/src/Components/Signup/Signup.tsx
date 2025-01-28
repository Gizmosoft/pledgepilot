import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, TextField, Typography, Button, Stack } from "@mui/material";
import { registerUser } from "../../services/userServices";

interface FormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  accountCreationDate: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    accountCreationDate: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    registerUser({
      ...formData,
      accountCreationDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    });
    setFormData({
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      accountCreationDate: "",
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
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
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
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
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SignUp;
