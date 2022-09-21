import React, { PropsWithChildren, ReactElement } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  isLogged: boolean | null;
  children: ReactElement;
};
const ProtectedRoute: React.FC<PropsWithChildren<ProtectedRouteProps>> = ({
  isLogged,
  children,
}) => {
  if (!isLogged) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
