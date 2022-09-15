import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setLogged } from "../store/features/user/userSlice";

type ProtectedRouteProps = {
  user: string | null;
};
const ProtectedRoute: React.FC<any> = ({ isLogged, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogged());
  }, [isLogged]);
  if (!isLogged) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
