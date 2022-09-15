import React from "react";
import { useNavigate } from "react-router-dom";

import { useAdminAuthContext } from "./context/adminAuthContext";
import { useAdminContext } from "./context/adminContext";

import AppRoutes from "./appRoutes/AppRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [, handleAdminChange] = useAdminContext();
  const navigate = useNavigate();

  const [, handleAdminAuthChange] = useAdminAuthContext();

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    getAdminData(token);
  }, []);

  const getAdminData = async (token) => {
    if (!token) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/admin/me`,
        {
          headers: {
            auth_token: token,
          },
        }
      );

      if (!response.ok) {
        localStorage.removeItem("token");
      }

      const admin = await response.json();

      handleAdminChange(admin);

      handleAdminAuthChange(true);

      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
