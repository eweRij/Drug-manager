import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Profile from "./Profile";
import DrugManager from "./DrugManager";

const Layout: React.FC = () => {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/drugmanager" element={<DrugManager />}></Route>
      </Routes>
    </Router>
  );
};

export default Layout;
