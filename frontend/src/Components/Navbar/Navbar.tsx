import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { userLogout } from "../../store/UserSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar({
  onSearch,
}: {
  onSearch?: (searchQuery: string) => void;
}): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userString = sessionStorage.getItem("user") ?? "";
  const user = userString ? JSON.parse(userString) : null;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileClick = () => {
    navigate("/profile");
    handleCloseMenu();
  };

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/login");
    handleCloseMenu();
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0B3D3A", // Dark teal for navbar background
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 !important",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FFD700", // Gold for the PledgePilot text
                fontFamily: "Quicksand, Arial, sans-serif",
              }}
            >
              PledgePilot
            </Typography>
          </Box>

          {/* Navigation Links and Profile Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Navigation Links */}
            <Button
              sx={{
                color: "#FFFFFF", // White text for links
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              sx={{
                color: "#FFFFFF", // White text for links
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              component={Link}
              to="/discover"
            >
              Discover
            </Button>
            {userString && (
              <Button
                sx={{
                  color: "#FFFFFF", // White text for dashboard button
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>
            )}

            {/* User Profile Menu */}
            {userString ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="account"
                  onClick={handleOpenMenu}
                  sx={{
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "#FFFFFF", // White menu background
                      color: "#333333", // Dark gray text
                      borderRadius: 2,
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                sx={{
                  color: "#FFFFFF", // White text for login button
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
