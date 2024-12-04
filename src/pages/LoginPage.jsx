import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useAlert } from "../context/AlertContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();

  const { triggerAlert, closeAlert } = useAlert();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      triggerAlert({
        type: "error",
        title: "Error",
        description: `Please enter both email and password!`,
        onConfirm: () => {},
      });
    } else {
      triggerAlert({
        type: "success",
        title: "Success",
        description: `Login successful!`,
        onConfirm: () => {
        },
      });
      setTimeout(()=> {navigate("/dashboard"), closeAlert()}, 2000);
    }
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        backgroundColor={theme.palette.background.paper}
        p={2}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box width={300} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
