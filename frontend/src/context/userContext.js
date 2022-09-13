import React from "react";

const UserContext = React.createContext(undefined);

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const handleUserChange = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={[user, handleUserChange]}>
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw Error("useUserContext must be inside UserProvider");
  }

  return context;
};

export { UserProvider, useUserContext };
