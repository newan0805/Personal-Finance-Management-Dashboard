// src/context/AlertContext.js
import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    type: "success",
    title: "",
    description: "",
    onConfirm: () => {},
    onCancel: () => {},
  });

  const triggerAlert = ({ type, title, description, onConfirm, onCancel }) => {
    setAlert({
      show: true,
      type,
      title,
      description,
      onConfirm,
      onCancel,
    });
  };

  const closeAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <AlertContext.Provider value={{ alert, triggerAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
