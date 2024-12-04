import React, { useState, useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import { AlertProvider } from "./context/AlertContext";
import AlertCard from "./components/AlertCard";
import DarkModeSwitch from "./components/DarkModeSwitch";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <AlertProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {/* <DarkModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          </Routes>
        </Router>
        <AlertCard />
      </ThemeProvider>
    </AlertProvider>
  );
};

export default App;
