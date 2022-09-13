import React from "react";
import { AdminProvider } from "./adminContext";
import { AdminAuthProvider } from "./adminAuthContext";
import { UserProvider } from "./userContext";
import { UserAuthProvider } from "./userAuthContext";

export default function ContextProvider({ children }) {
  return (
    <AdminProvider>
      <AdminAuthProvider>
        <UserProvider>
          <UserAuthProvider>{children}</UserAuthProvider>
        </UserProvider>
      </AdminAuthProvider>
    </AdminProvider>
  );
}
