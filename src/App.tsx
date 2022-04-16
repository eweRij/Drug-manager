import React, { useEffect } from "react";
import "./App.scss";
import { Container } from "@mui/material";
import "./components/AuthLayout.scss";
import AuthLayout from "./components/AuthLayout";
import { useAppSelector } from "./utils/hooks";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import selectUserLogged, { setLogged } from "./features/user/userSlice";
import { removeUserId } from "./utils/auth";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const isLogged: string | null = useAppSelector(
    (state) => state.user.isLogged
  );
  console.log(isLogged);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    console.log(isLogged);
  }, []);
  return (
    <div className="authlayout-container">
      {isLogged ? <Layout /> : <AuthLayout />}
    </div>
  );
};

export default App;
