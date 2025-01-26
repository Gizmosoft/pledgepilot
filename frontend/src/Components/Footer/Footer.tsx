import React from "react";
import { Box, Typography, Link, Grid, Container } from "@mui/material";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
const Logo = require("../../assets/pledge-pilot-text.png");

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0B3D3A",
        color: "#fff",
        padding: "40px 0", // Vertical padding for footer
        marginTop: "40px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Connect with Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Connect with PledgePilot:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                  "&:hover": { color: "#06D6A0" },
                }}
              >
                <FaTwitter style={{ marginRight: "8px" }} />
                Twitter
              </Link>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                  "&:hover": { color: "#06D6A0" },
                }}
              >
                <FaInstagram style={{ marginRight: "8px" }} />
                Instagram
              </Link>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                  "&:hover": { color: "#06D6A0" },
                }}
              >
                <FaFacebook style={{ marginRight: "8px" }} />
                Facebook
              </Link>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                  "&:hover": { color: "#06D6A0" },
                }}
              >
                <FaYoutube style={{ marginRight: "8px" }} />
                YouTube
              </Link>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link
                href="about"
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  "&:hover": { color: "#06D6A0" },
                }}
              >
                About Us
              </Link>
              <Link
                href="careers"
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  "&:hover": { color: "#06D6A0" },
                }}
              >
                Careers
              </Link>
              <Link
                href="faq"
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  "&:hover": { color: "#06D6A0" },
                }}
              >
                FAQ
              </Link>
            </Box>
          </Grid>

          {/* Logo and Text Section */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="PledgePilot Logo"
                sx={{
                  width: "180px",
                  marginBottom: "16px",
                }}
              />
              <Typography
                variant="body2"
                sx={{ lineHeight: 1.6, color: "#ddd" }}
              >
                Navigating Dreams, Funding Journeys. Elevate your ambitions with
                our crowdfunding platform that empowers creators, dreamers, and
                innovators.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box
          sx={{
            marginTop: "40px",
            textAlign: "center",
            borderTop: "1px solid #555",
            paddingTop: "20px",
          }}
        >
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            Copyright © {new Date().getFullYear()}, All Rights Reserved{" "}
            <Link
              href="#"
              sx={{
                color: "#FFD700",
                textDecoration: "none",
                "&:hover": { color: "#FFD700" },
              }}
            >
              PledgePilot
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
