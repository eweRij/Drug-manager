import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.scss";
import "./components/AuthLayout.scss";

import AuthLayout from "./components/AuthLayout";
import { useAppSelector } from "./utils/hooks";
import { setLogged } from "./features/user/userSlice";
import Layout from "./components/Layout";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isLogged: boolean = useAppSelector((state) => state.user.isLogged);
  console.log(isLogged);
  useEffect(() => {
    dispatch(setLogged());
  }, []);
  console.log(isLogged);
  return (
    <div className="authlayout-container">
      {isLogged ? <Layout /> : <AuthLayout />}
    </div>
  );
};

export default App;
