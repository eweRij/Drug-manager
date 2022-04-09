import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";

const AuthLayout: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/confirm/:confirmationCode" element={<Welcome />}></Route>
      </Routes>
    </Router>
  );
};

export default AuthLayout;
