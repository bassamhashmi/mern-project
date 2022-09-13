import React from "react";

const AdminAuthContext = React.createContext(undefined);

function AdminAuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAdminAuthChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <AdminAuthContext.Provider value={[isAuthenticated, handleAdminAuthChange]}>
      {children}
    </AdminAuthContext.Provider>
  );
}

const useAdminAuthContext = () => {
  const context = React.useContext(AdminAuthContext);

  if (context === undefined) {
    throw Error("useAdminAuthContext must be inside AdminAuthProvider");
  }

  return context;
};

export { AdminAuthProvider, useAdminAuthContext };
