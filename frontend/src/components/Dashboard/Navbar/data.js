import React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

export const SidebarData = [
  {
    title: "Overview",
    path: "/admin",
    icon: <DashboardIcon fontSize="small" />,
    className: "nav-text active",
  },
  {
    title: "Customers",
    path: "customers",
    icon: <PeopleIcon fontSize="small" />,
    className: "nav-text",
  },
  {
    title: "Products",
    path: "products",
    icon: <InventoryIcon fontSize="small" />,
    className: "nav-text",
  },
  {
    title: "Orders",
    path: "orders",
    icon: <ShoppingBagIcon fontSize="small" />,
    className: "nav-text",
  },
  {
    title: "Settings",
    path: "settings",
    icon: <SettingsApplicationsIcon />,
    className: "li-settings",
  },
];
