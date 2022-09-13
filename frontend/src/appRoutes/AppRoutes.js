import React from "react";
import { Route, Routes } from "react-router-dom";

// Admin
import AdminAuthRoute from "./AdminAuthRoute";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/admin/Login";
import SignUp from "../pages/admin/SignUp";
import Overview from "../pages/admin/Dashboard/Overview";
import Customers from "../pages/admin/Dashboard/Customers";
import ProductsRoute from "../pages/admin/Dashboard/Products/route.js";
import Products from "../pages/admin/Dashboard/Products/AllProducts";
import AddNewProduct from "../pages/admin/Dashboard/Products/AddNewProduct";
import EditProduct from "../pages/admin/Dashboard/Products/Edit";
import Orders from "../pages/admin/Dashboard/Orders";

// user
import CustomerAuthRoute from "./CustomerAuthRoute";
import Cart from "../components/Shop/Cart/Cart";
import Home from "../pages/user/Home";
import Shop from "../pages/user/Home/Shop";
import HomeRoute from "../pages/user/Home/route";
import Settings from "../pages/admin/Dashboard/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* user Routes */}

      <Route path="/" element={<HomeRoute />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>

      <Route
        path="cart"
        element={
          <CustomerAuthRoute>
            <Cart />
          </CustomerAuthRoute>
        }
      ></Route>

      {/* Admin Routes */}

      <Route
        path="admin"
        element={
          <AdminAuthRoute>
            <Dashboard />
          </AdminAuthRoute>
        }
      >
        <Route index element={<Overview />} />

        <Route path="customers" element={<Customers />} />

        <Route path="products" element={<ProductsRoute />}>
          <Route index element={<Products />} />
          <Route exact path="new" element={<AddNewProduct />} />
          <Route exact path="edit" element={<EditProduct />} />
        </Route>

        <Route path="orders" element={<Orders />} />

        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="admin/login" element={<Login />} />

      <Route path="admin/signup" element={<SignUp />} />
    </Routes>
  );
}
