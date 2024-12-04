import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAlert } from "../context/AlertContext";

const BudgetTracker = ({ setBudget }) => {
  const [budget, setLocalBudget] = useState("");

  const { triggerAlert } = useAlert();

  const handleSetBudget = () => {
    if (budget) {
      localStorage.setItem("budget", budget);
      setBudget(budget);
      
      triggerAlert({
        type: "success",
        title: "Success",
        description: `Budgest set successfully!`,
        onConfirm: () => {},
      });
    }
  };

  return (
    <Box borderRadius={2}>
      <TextField
        label="Set Budget"
        variant="outlined"
        fullWidth
        value={budget}
        onChange={(e) => setLocalBudget(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSetBudget}>
        Set Budget
      </Button>
    </Box>
  );
};

export default BudgetTracker;
