import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserAuthContext } from "../context/userAuthContext";

export default function CustomerAuthRoute({ children }) {
  const location = useLocation();
  const [isUserAuthenticated] = useUserAuthContext();

  if (!isUserAuthenticated) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return children;
}
