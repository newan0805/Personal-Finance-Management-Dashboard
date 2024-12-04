import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography, Paper } from "@mui/material";
import ExpenseTracker from "../components/ExpenseTracker";
import BudgetTracker from "../components/BudgetTracker";
import Charts from "../components/Charts";
import TopBar from "../components/TopBar";

const DashboardPage = ({ darkMode, toggleDarkMode }) => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const savedBudget = localStorage.getItem("budget");
    setExpenses(savedExpenses);
    setBudget(savedBudget || "");
  }, []);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        p={2}
        borderRadius={2}
      >
        <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* <Typography variant="h3" gutterBottom>
          Personal Finance Dashboard
        </Typography> */}

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Budget Tracker
              </Typography>
              <BudgetTracker setBudget={setBudget} />
              {budget && (
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Current Budget: LKR {budget}
                </Typography>
              )}
            </Paper>
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">
                Total Expenses: LKR {" "}
                {expenses.reduce((acc, expense) => acc + expense.amount, 0)}
              </Typography>
              {budget && (
                <Typography
                  variant="h6"
                  color={
                    expenses.reduce((acc, expense) => acc + expense.amount, 0) >
                    budget
                      ? "error"
                      : "primary"
                  }
                >
                  {expenses.reduce((acc, expense) => acc + expense.amount, 0) >
                  budget
                    ? "Warning: You have exceeded your budget!"
                    : "You are within your budget."}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} borderRadius={2}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Expense Tracker
              </Typography>
              <ExpenseTracker setExpenses={setExpenses} />
            </Paper>
          </Grid>

          <Grid item sx={{ width: "100%", height: "100%" }} borderRadius={2}>
            {/* <Paper sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Spending Overview
              </Typography>
              <Charts expenses={expenses} />
            </Paper> */}
            <Paper sx={{ padding: 2, width: "100%", height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Spending Overview
              </Typography>
              <Box sx={{ width: "100%", height: 500 }}>
                <Charts expenses={expenses} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardPage;
