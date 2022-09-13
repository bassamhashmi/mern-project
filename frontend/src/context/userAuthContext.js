import React from "react";

const UserAuthContext = React.createContext(undefined);

function UserAuthProvider({ children }) {
  const [isUserAuthenticated, setIsUserAuthenticated] = React.useState(true);

  const handleUserAuthChange = (isUserAuthenticated) => {
    setIsUserAuthenticated(isUserAuthenticated);
  };

  return (
    <UserAuthContext.Provider
      value={[isUserAuthenticated, handleUserAuthChange]}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

const useUserAuthContext = () => {
  const context = React.useContext(UserAuthContext);

  if (context === undefined) {
    throw Error("useUserAuthContext must be inside UserAuthProvider");
  }

  return context;
};

export { UserAuthProvider, useUserAuthContext };
