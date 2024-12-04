import React from "react";
import { Switch, FormControlLabel, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const DarkModeSwitch = ({ darkMode, toggleDarkMode }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        // top: 16,
        bottom: 16,
        right: 16,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        padding: "8px",
        backgroundColor: "background.default",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Typography variant="body1" sx={{ marginRight: 2 }}>
        Dark Mode
      </Typography>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
        label=""
        sx={{ margin: 0 }}
      />
    </Box>
  );
};

export default DarkModeSwitch;
