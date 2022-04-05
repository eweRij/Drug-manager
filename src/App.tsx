import React from "react";
import "./App.scss";
import { Container } from "@mui/material";
import "./components/AuthLayout.scss";
import AuthLayout from "./components/AuthLayout";

const App: React.FC = () => {
  return (
    <div className="authlayout-container">
      <AuthLayout />
    </div>
  );
};

export default App;
