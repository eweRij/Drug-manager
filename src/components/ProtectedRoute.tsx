import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "../utils/hooks";

const ProtectedRoute: React.FC = ({ children }: any) => {


  const isLogged: string = useAppSelector((state) => state.user.isLogged);
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
