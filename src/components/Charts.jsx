import React from "react";
import { Line } from "react-chartjs-2";
import { Paper, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ expenses }) => {
  const chartData =
    expenses.length > 0
      ? {
          labels: expenses.map((expense) => expense.date),
          datasets: [
            {
              label: "Expenses",
              data: expenses.map((expense) => expense.amount),
              borderColor: "rgba(75,192,192,1)",
              fill: false,
            },
          ],
        }
      : {
          labels: [],
          datasets: [
            {
              label: "Expenses",
              data: [],
              borderColor: "rgba(75,192,192,1)",
              fill: false,
            },
          ],
        };

  return (
    <div>
      {/* <Typography variant="h6" sx={{ mb: 2 }}>
        Spending Overview
      </Typography> */}
      {expenses.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No data available for this period.
        </Typography>
      ) : (
        <Line data={chartData} options={{ responsive: true }} />
      )}
    </div>
  );
};

export default Charts;
