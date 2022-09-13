import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../../components/Dashboard/Navbar";
import Topbar from "../../../components/Dashboard/Topbar";

import "./index.css";

const Dashboard = () => {
  return (
    <div className="backend">
      <Topbar />
      <Navbar />

      <div className="dashboard-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
