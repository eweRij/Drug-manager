import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useAppSelector } from "../utils/hooks";
import { setLogged } from "../features/user/userSlice";

const ProtectedRoute: React.FC = ({ children }: any) => {
  const dispatch = useDispatch();

  console.log("chroniona");
  useEffect(() => {
    dispatch(setLogged());
    console.log("appprzelogowany cgronione");
  }, []);
  const isLogged: string = useAppSelector((state) => state.user.isLogged);
  console.log(isLogged);
  const location = useLocation();
  console.log(isLogged);
  if (!isLogged) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
