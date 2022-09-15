import React from "react";
import { AdminProvider } from "./adminContext";
import { AdminAuthProvider } from "./adminAuthContext";
import { UserProvider } from "./userContext";
import { UserAuthProvider } from "./userAuthContext";
import { ProductsDataProvider } from "./productsContext";

export default function ContextProvider({ children }) {
  return (
    <AdminProvider>
      <AdminAuthProvider>
        <ProductsDataProvider>
          <UserProvider>
            <UserAuthProvider>{children}</UserAuthProvider>
          </UserProvider>
        </ProductsDataProvider>
      </AdminAuthProvider>
    </AdminProvider>
  );
}
