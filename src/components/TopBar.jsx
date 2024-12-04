import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
import { useAlert } from "../context/AlertContext";
const TopBar = ({ darkMode, toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();

  const { triggerAlert } = useAlert();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    triggerAlert({
      type: "warning",
      title: "Warning",
      description: `Do you want to log out?`,
      onConfirm: () => {
        navigate("/");
        setAnchorEl(null);
      },
    });
  };

  const handleResetAll = () => {
    triggerAlert({
      type: "error",
      title: "Error",
      description: `Do you want to reset?`,
      onConfirm: () => {
        localStorage.clear();
        setAnchorEl(null);
        navigate("/dashboard");
      },
    });
  };

  return (
    <AppBar position="sticky" sx={{borderRadius: 2, marginBottom: 2}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Personal Finance Manager
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem onClick={toggleDarkMode}>{!darkMode ? "dark" : "light"}</MenuItem>
        <MenuItem onClick={handleResetAll}>Reset All</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default TopBar;
