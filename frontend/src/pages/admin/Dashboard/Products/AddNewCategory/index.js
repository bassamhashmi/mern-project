import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Button } from "react-bootstrap";

import InputForm from "../../../../../components/Dashboard/Products/InputForm";

const AddNewProduct = () => {
  const [product, setProduct] = React.useState({
    title: "",
    description: "",
    inventory: 0,
  });

  const [image, setImage] = React.useState({});

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const addProduct = async (event) => {
    console.log("running");
    event.preventDefault();

    const formData = new FormData();

    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("inventory", product.inventory);
    formData.append("avatar", image);

    const url = "http://localhost:3001/api/admin/products/add";

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const json = await response.json();

    console.log(json);
  };

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
          <h1>Add New Product</h1>
        </div>
      </div>
      <Row className="Polaris-two-col">
        <div className="Polaris-Card col-8">
          <InputForm
            product={product}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            submitButton="Add"
            handleFormSubmit={addProduct}
          />
        </div>
        <div className="Polaris-Card col-3 product-status">
          <h5>Product Status</h5>
        </div>
      </Row>

      {/* <div className="Polaris-Tabs">
          <li>All</li>
          <li>Active</li>
          <li>Draft</li>
        </div>
        <div className="Polaris-Head">
          <div className="col-6" style={{ paddingRight: "20px" }}>
            <SearchBar placeholder="Search Products" />
          </div>
          <div className="col-2 offset-3">
            <DropdownButton id="dropdown-product-vendor" title="Product Vendor">
              <Dropdown.Item href="#/vendor-1">Vendor</Dropdown.Item>
              <Dropdown.Item href="#/vendor-2">Another vendor</Dropdown.Item>
              <Dropdown.Item href="#/vendor-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-1">
            <DropdownButton id="dropdown-sort" title="Sort">
              <Dropdown.Item href="#/vendor-1">Vendor</Dropdown.Item>
              <Dropdown.Item href="#/vendor-2">Another vendor</Dropdown.Item>
              <Dropdown.Item href="#/vendor-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <ProductsTable /> */}
    </div>
  );
};

export default AddNewProduct;
