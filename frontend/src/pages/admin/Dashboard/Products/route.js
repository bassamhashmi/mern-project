import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css";

const ProductsRoute = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProductsRoute;
