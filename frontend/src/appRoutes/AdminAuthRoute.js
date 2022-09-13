import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAdminAuthContext } from "../context/adminAuthContext";

export default function AdminAuthRoute({ children }) {
  const location = useLocation();
  const [isAdminAuthenticated] = useAdminAuthContext();

  if (!isAdminAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
}
