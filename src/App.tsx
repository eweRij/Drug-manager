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

const App: React.FC = () => {
  const isLogged: boolean = useAppSelector((state) => state.user.isLogged);
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
