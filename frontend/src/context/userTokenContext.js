import React from "react";

const CreateUserTokenContext = React.createContext(undefined);
const CreateUserTokenDispatchContext = React.createContext(undefined);

function UserTokenProvider({ children }) {
  const [userToken, setUserToken] = React.useState("");

  const handleUserTokenChange = (token) => {
    setUserToken(token);
  };

  return (
    <CreateUserTokenContext.Provider value={userToken}>
      <CreateUserTokenDispatchContext.Provider
        value={{ handleUserTokenChange }}
      >
        {children}
      </CreateUserTokenDispatchContext.Provider>
    </CreateUserTokenContext.Provider>
  );
}

const useCreateUserTokenContext = () => {
  const context = React.useContext(CreateUserTokenContext);

  if (context === undefined) {
    throw Error("useCreateUserTokenContext must be inside UserTokenProvider");
  }

  return context;
};

const useCreateUserTokenDispatchContext = () => {
  const context = React.useContext(CreateUserTokenDispatchContext);

  if (context === undefined) {
    throw Error(
      "useCreateUserTokenDispatchContext must be inside UserTokenProvider"
    );
  }

  return context;
};

const useUserTokenContext = () => {
  return [useCreateUserTokenContext(), useCreateUserTokenDispatchContext()];
};

export { UserTokenProvider, useUserTokenContext };
