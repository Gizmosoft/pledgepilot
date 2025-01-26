import React, { useState } from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import LoginComponent from "../../Components/Login-Auth/LoginComponent";
import SignUp from "../../Components/Signup/Signup";

const loginPageImage = require("../../assets/Charts.gif");

const LoginPage: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const switchComponent = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <Grid container sx={{ height: "100%",
    position:"absolute",bottom:0}}>
      {/* Left Side: Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${loginPageImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex:-1
        }}
      />
      
      {/* Right Side: Login/Signup Component */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        {/* Login or Signup Component */}
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          {isRegistered ? <LoginComponent /> : <SignUp />}
        </Box>

        {/* Toggle Between Login and Signup */}
        <Typography
          variant="body2"
          sx={{ marginTop: 2, textAlign: "center", color: "#555" }}
        >
          {isRegistered ? (
            <>
              Don’t have an account?{" "}
              <Link
                href="#"
                onClick={switchComponent}
                sx={{ color: "#06D6A0", fontWeight: "bold" }}
              >
                Create an Account
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href="#"
                onClick={switchComponent}
                sx={{ color: "#06D6A0", fontWeight: "bold" }}
              >
                Log in
              </Link>
            </>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
