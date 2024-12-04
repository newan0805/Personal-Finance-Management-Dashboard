import React, { useEffect } from "react";
import {
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { CheckCircle, Error, Warning } from "@mui/icons-material";
import { useAlert } from "../context/AlertContext";

const AlertCard = () => {
  const { alert, closeAlert } = useAlert();
  const { type, title, description, onConfirm, onCancel, show } = alert;
  const theme = useTheme();

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle color="success" fontSize="large" />;
      case "error":
        return <Error color="error" fontSize="large" />;
      case "warning":
        return <Warning color="warning" fontSize="large" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (show) {
      // document.body.style.filter = "blur(5px)";
    } else {
      // document.body.style.filter = "none";
    }
  }, [show]);

  if (!show) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: 400,
        mx: "auto",
        p: 3,
        textAlign: "center",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: theme.palette.background.paper,
        zIndex: 1300,
      }}
    >
      <Box>{getIcon()}</Box>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="outlined"
          onClick={onCancel || closeAlert}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (onConfirm) onConfirm();
            closeAlert();
          }}
          color={type}
        >
          Confirm
        </Button>
      </CardActions>
    </Box>
  );
};

export default AlertCard;
