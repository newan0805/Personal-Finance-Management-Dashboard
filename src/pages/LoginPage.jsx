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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { triggerAlert } = useAlert();
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
          navigate("/dashboard");
        },
      });
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
        bgcolor="#fff"
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
