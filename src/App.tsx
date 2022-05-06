import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import "./components/AuthLayout.scss";

import { useAppSelector } from "./utils/hooks";
import { setLogged } from "./features/user/userSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Profile from "./components/Profile";
import DrugManager from "./components/DrugManager";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogged());
    console.log(isLogged);
  }, []);
  const isLogged: string = useAppSelector((state) => state.user.isLogged);

  return (
    <div className="authlayout-container">
      {isLogged && <Navigation></Navigation>}
      <Routes>
        <Route index element={<SignIn />}></Route>
        <Route path="login" element={<SignIn />}></Route>
        <Route path="register" element={<SignUp />}></Route>
        <Route path="confirm/:confirmationCode" element={<Welcome />}></Route>
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="drugmanager"
          element={
            <ProtectedRoute>
              <DrugManager />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
