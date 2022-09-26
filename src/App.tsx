import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { useAppSelector } from "./utils/hooks";
import {
  fetchUser,
  selectUserData,
  selectUserId,
  selectUserLogged,
  setLogged,
  setId,
} from "./store/features/user/userSlice";
import Navigation from "./components/Navigation";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import DrugManager from "./components/DrugManager";
import Welcome from "./components/Welcome";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.scss";

const App: React.FC = () => {
  const isLogged: boolean | null = useAppSelector(selectUserLogged);
  const userId: string | null = useAppSelector(selectUserId);
  const user = useAppSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogged());
    console.log(userId);
    userId && dispatch(fetchUser(userId));
  }, []);
  console.log(userId);
  console.log(localStorage.getItem("id"));
  console.log(user);
  return (
    <>
      {isLogged && <Navigation />}
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route
          path="home"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="drugManager"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <DrugManager />
            </ProtectedRoute>
          }
        />
        <Route path="confirm/:confirmationCode" element={<Welcome></Welcome>} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
};

export default App;
