import React from "react";
import "./App.scss";
import { Container } from "@mui/material";
import "./components/AuthLayout.scss";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <div className="authlayout-container">
      {/* <AuthLayout /> */}
      <Layout />
    </div>
  );
};

export default App;
