import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAlert } from "../context/AlertContext";

const ExpenseTracker = ({ setExpenses }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { triggerAlert } = useAlert();

  const handleAddExpense = () => {
    if (amount && category) {
      const newExpense = {
        amount: parseFloat(amount),
        category,
        description,
        date: new Date().toLocaleString(),
      };

      const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
      expenses.push(newExpense);

      localStorage.setItem("expenses", JSON.stringify(expenses));
      setExpenses(expenses);
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
        label="Amount"
        variant="outlined"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ marginBottom: 2 }}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
      />
      <TextField
        label="Category"
        variant="outlined"
        fullWidth
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddExpense}>
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseTracker;
