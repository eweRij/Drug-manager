import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";

const Layout: React.FC = () => {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/home" element={<Main />}></Route>
      </Routes>
    </Router>
  );
};

export default Layout;
