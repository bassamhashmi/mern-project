import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Button, Dropdown, DropdownButton } from "react-bootstrap";
import SearchBar from "../../../../../components/Searchbar";
import ProductsTable from "../../../../../components/Dashboard/Table/ProductsTable";
import "../../index.css";
import InputForm from "../../../../../components/Dashboard/Products/InputForm";

const EditProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="products-container">
      <div className="products-header-row">
        <div className="col-1">
          <Button
            onClick={() => {
              navigate("/admin/products");
            }}
          >
            Back
          </Button>
        </div>
        <div className="col-3">
          <h1>Edit Product</h1>
        </div>
      </div>
      <Row className="Polaris-two-col">
        <div className="Polaris-Card col-8">
          <InputForm submitButton="Update" />
        </div>
        <div className="Polaris-Card col-3 product-status">
          <h5>Product Status</h5>
        </div>
      </Row>
    </div>
  );
};

export default EditProduct;
