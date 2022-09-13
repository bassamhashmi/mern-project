import React from "react";

const AdminContext = React.createContext(undefined);

function AdminProvider({ children }) {
  const [admin, setAdmin] = React.useState(null);

  const handleAdminChange = (admin) => {
    setAdmin(admin);
  };

  return (
    <AdminContext.Provider value={[admin, handleAdminChange]}>
      {children}
    </AdminContext.Provider>
  );
}

const useAdminContext = () => {
  const context = React.useContext(AdminContext);

  if (context === undefined) {
    throw Error("useAdminContext must be inside AdminProvider");
  }

  return context;
};

export { AdminProvider, useAdminContext };
